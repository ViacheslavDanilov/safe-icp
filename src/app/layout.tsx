import type { Metadata } from 'next';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
