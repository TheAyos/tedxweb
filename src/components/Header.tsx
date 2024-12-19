import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TEDx[name]
        </Link>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
