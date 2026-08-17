const DEFAULT_DEV_URL = 'http://localhost:3000';

function trimTrailingSlash(url) {
  return url.replace(/\/+$/, '') || url;
}

/**
 * Public site origin (no trailing slash). Set NEXT_PUBLIC_SITE_URL in production.
 */
export const siteUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_DEV_URL,
);

/**
 * Absolute URL for a path (path must start with /).
 */
export function absoluteUrl(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${p}`;
}
