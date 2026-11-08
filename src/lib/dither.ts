const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

export type RGB = [number, number, number];

export function hex(c: string): RGB {
  const n = parseInt(c.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 2-colour Bayer dither, `cols` pixels wide. Scale up with image-rendering: pixelated.
export function ditherInto(
  out: HTMLCanvasElement,
  source: CanvasImageSource,
  sw: number,
  sh: number,
  opts: { cols: number; ink: string; paper: string; gamma?: number; contrast?: number }
) {
  const cols = opts.cols;
  const rows = Math.round((sh / sw) * cols);
  const tmp = document.createElement('canvas');
  tmp.width = cols;
  tmp.height = rows;
  const t = tmp.getContext('2d', { willReadFrequently: true })!;
  t.imageSmoothingQuality = 'high';
  t.drawImage(source, 0, 0, cols, rows);
  const data = t.getImageData(0, 0, cols, rows);
  const px = data.data;
  const ink = hex(opts.ink);
  const paper = hex(opts.paper);
  const gamma = opts.gamma ?? 1;
  const contrast = opts.contrast ?? 1;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = (y * cols + x) * 4;
      if (px[i + 3] < 110) {
        px[i + 3] = 0;
        continue;
      }
      let l = (0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) / 255;
      l = Math.min(1, Math.max(0, (Math.pow(l, gamma) - 0.5) * contrast + 0.5));
      const c = l > (BAYER8[y & 7][x & 7] + 0.5) / 64 ? paper : ink;
      px[i] = c[0];
      px[i + 1] = c[1];
      px[i + 2] = c[2];
      px[i + 3] = 255;
    }
  }
  out.width = cols;
  out.height = rows;
  out.getContext('2d')!.putImageData(data, 0, 0);
}

// placeholder art for projects without a screenshot yet
export function drawArt(w: number, h: number, seed: number, label: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d')!;
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);

  g.fillStyle = '#000';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 4; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = (0.25 + rnd() * 0.45) * Math.max(w, h);
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(255,255,255,${0.55 + rnd() * 0.35})`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
  }
  g.fillStyle = '#fff';
  g.font = `700 ${Math.round(h * 0.5)}px "Plus Jakarta Sans", system-ui, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(label, w / 2, h / 2 + h * 0.03);
  return c;
}

// blocky dissolve that ends on the full image
export function pixelReveal(canvas: HTMLCanvasElement, final: CanvasImageSource, duration = 900) {
  const w = canvas.width;
  const h = canvas.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(final, 0, 0, w, h);
  if (reducedMotion()) return;
  const src = ctx.getImageData(0, 0, w, h);
  const out = ctx.createImageData(w, h);
  const sp = src.data;
  const op = out.data;
  const hash = (x: number, y: number) => {
    let n = (x * 374761393 + y * 668265263) ^ 0x5bd1e995;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  };
  const start = performance.now();
  const token = Symbol();
  (canvas as any).__reveal = token;

  const frame = (now: number) => {
    if ((canvas as any).__reveal !== token) return;
    const p = Math.min(1, (now - start) / duration);
    if (p >= 1) {
      ctx.putImageData(src, 0, 0);
      return;
    }
    const b = Math.max(1, Math.round(18 * Math.pow(1 - p, 2.2)));
    const shown = 1 - Math.pow(1 - p, 2) * 1.05;
    for (let y = 0; y < h; y++) {
      const cy = (y / b) | 0;
      const sy = Math.min(h - 1, cy * b + (b >> 1));
      for (let x = 0; x < w; x++) {
        const cx = (x / b) | 0;
        const o = (y * w + x) * 4;
        if (hash(cx, cy) > shown) {
          op[o + 3] = 0;
          continue;
        }
        const sx = Math.min(w - 1, cx * b + (b >> 1));
        const si = (sy * w + sx) * 4;
        op[o] = sp[si];
        op[o + 1] = sp[si + 1];
        op[o + 2] = sp[si + 2];
        op[o + 3] = sp[si + 3];
      }
    }
    ctx.putImageData(out, 0, 0);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
