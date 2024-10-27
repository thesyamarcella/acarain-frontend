import Link from 'next/link';
import '../styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Header
       />
      <main className='p-5'>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
