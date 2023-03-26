import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar container mx-auto mb-2 flex h-20 items-center justify-between border-b border-sky-900">
      <Link className="logo pl-5 text-2xl font-medium text-sky-400 ">
        ProRipo
      </Link>
      <nav className="flex gap-5">
        <Link to="/login" className="duration-300 hover:text-sky-400">
          Login
        </Link>
        <Link to="/signup" className="duration-300 hover:text-sky-400">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
