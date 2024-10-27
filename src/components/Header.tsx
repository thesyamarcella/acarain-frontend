import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/auth">Login/Register</Link>
        <Link href="/events">Events</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
