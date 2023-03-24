import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar container mx-auto mb-2 flex h-20 items-center justify-between border-b border-sky-900">
      <Link className="logo text-2xl font-medium text-sky-400 ">ProRipo</Link>
    </div>
  );
};

export default Navbar;
