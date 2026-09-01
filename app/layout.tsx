import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Namit Mahajan — React & Next.js Developer',
  description: 'Personal portfolio of Namit Mahajan — building modern web experiences with React and Next.js.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
