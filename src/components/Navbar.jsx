import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar  bg-[#0C2237]">
      <div className="container mx-auto mb-2 flex h-20 items-center justify-between border-b border-sky-900">
        <Link className="logo pl-5 text-2xl font-medium text-sky-400 ">
          ProRipo
        </Link>
        <nav className="flex gap-5">
          {!user && (
            <div className="flex gap-5">
              <Link to="/login" className="duration-300 hover:text-sky-400">
                Login
              </Link>
              <Link to="/signup" className="duration-300 hover:text-sky-400">
                Signup
              </Link>
            </div>
          )}
          {user && (
            <div className="flex items-center gap-5">
              <span>{user.email}</span>
              <button
                onClick={handleLogout}
                type="submit"
                className="mt-2 rounded-lg bg-red-500 py-2 px-5 text-xl  font-medium tracking-wider text-white duration-300 hover:bg-red-700   hover:text-slate-900 "
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
