import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Inter({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const bodyFont = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'SafeICP | A Safe Window Into Brain Pressure',
  description:
    'Opening slide for the SafeICP site-presentation on non-invasive intracranial pressure estimation.',
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
