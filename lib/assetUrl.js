/**
 * Normalizes Next.js / bundler static asset values (string URL, { default }, or { src }).
 */
export function assetUrl(m) {
  if (m == null) return m;
  if (typeof m === 'string') return m;
  if (typeof m === 'object') {
    if ('default' in m) return assetUrl(m.default);
    if ('src' in m) return m.src;
  }
  return m;
}
