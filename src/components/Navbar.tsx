import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar mx-12" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" className="navbar-item has-text-white">
                    Acarain
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/events" className="navbar-item has-text-white">Events</Link>
                    <Link href="/dashboard" className="navbar-item has-text-white">Dashboard</Link>
                    <Link href="/auth" className="navbar-item has-text-white">Login/Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
