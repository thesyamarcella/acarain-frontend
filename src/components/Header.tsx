// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-5 bg-white shadow-lg">
      <div className="text-2xl font-bold text-purple-600">Acarain</div>
      <nav className="space-x-5">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <button className="bg-yellow-500 text-white rounded-full px-4 py-2">Create Event</button>
    </header>
  );
};

export default Header;
