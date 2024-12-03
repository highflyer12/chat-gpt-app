import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className='text-white font-bold bg-green-900 text-2xl p-2 mb-3 rounded-b-lg shadow-gray-700 shadow-lg flex'>
          <div className='flex flex-grow'>
            <Link href='/'>GPT Chat</Link>
            <Link href='/about' className='ml-5 font-light'>
              About
            </Link>
          </div>
          <div></div>
        </header>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-grow'>{children}</div>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Welcome to GPT Chat',
  description: 'Chat with GPT',
};
