export function getImageUrl(path: string): string {
  if (!path) return "";
  // 1. Keeps external WordPress/Unsplash URLs untouched
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // 2. Safely prepends basePath for local /public images on GitHub Pages
  const basePath = process.env.NODE_ENV === "production" ? "/bostonlanka-monorepo" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}