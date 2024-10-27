// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-10">
      <div className="container text-center">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/"className="text-white hover:underline">Home</Link>
              <Link href="/events"className="text-white hover:underline">Events</Link>
              <Link href="/contact" className="text-white hover:underline"> Contact</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>Email: support@acarain.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Event St., City, Country</p>
          </div>
        </div>

        <p className="mt-10">&copy; {new Date().getFullYear()} Acarain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
