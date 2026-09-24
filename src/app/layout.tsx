import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// The latin subsets of the variable fonts Google Fonts serves, kept in the repo so a
// build never downloads them (a failed download used to break CI). Licences are the
// OFL-*.txt files next to them. The deck uses only latin characters.
const headingFont = localFont({
  src: './fonts/inter-latin.woff2',
  variable: '--font-heading',
  weight: '400 700',
});

const bodyFont = localFont({
  src: './fonts/ibm-plex-sans-latin.woff2',
  variable: '--font-body',
  // The file reaches 700, but the deck has always rendered body text at 600 at most;
  // text that asks for 700 keeps rendering at 600.
  weight: '400 600',
});

const title = 'SafeICP | A Safe Window Into Brain Pressure';
const description =
  'A research presentation on non-invasive intracranial pressure estimation through optical sensing and machine learning.';

export const metadata: Metadata = {
  metadataBase: new URL('https://safe-icp.vercel.app'),
  title,
  description,
  openGraph: {
    type: 'website',
    siteName: 'SafeICP',
    title,
    description,
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <a className="skip-link" href="#page-title">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
