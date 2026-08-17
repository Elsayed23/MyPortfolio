import { ImageResponse } from 'next/og';

export const alt = 'Elsayed Kewan — Full stack developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #09090b 0%, #1e1b4b 42%, #0f172a 100%)',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            padding: 48,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(167, 139, 250, 0.95)',
            }}
          >
            Portfolio
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fafafa',
              maxWidth: 900,
            }}
          >
            Elsayed Kewan
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 32,
              fontWeight: 500,
              color: '#a1a1aa',
              maxWidth: 800,
            }}
          >
            Full stack developer · Next.js · Node · AI automation
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
