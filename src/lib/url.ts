/** Prefix a root-relative path with Astro's configured base (needed for GitHub Pages project sites). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
