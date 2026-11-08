// prefixes BASE_URL so links work under /Personal-Portfolio/ on GitHub Pages
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
