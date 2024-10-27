import Link from 'next/link';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Navbar from '@/components/Navbar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
