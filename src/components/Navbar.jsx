import React from 'react';
import { Link } from 'react-router-dom';
import logOut from '../../public/logOut.png';
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
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  image-rendering="optimizeQuality"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  viewBox="0 0 4335 4335"
                  id="avatar"
                >
                  <path
                    fill="#6d97b5"
                    d="M2155 4191c1116 0 2021-905 2021-2021S3271 149 2155 149 134 1054 134 2170s905 2021 2021 2021z"
                  />
                  <path
                    fill="#e6e6e6"
                    d="M2156 1207h14c308 9 555 304 555 667s-247 659-555 667h-15c-351 0-569-345-569-668 0-363 247-659 555-667h15zM914 3737s417-823 719-963c247-114 800-114 1046 0 302 139 719 963 719 963-411 335-929 423-1173 446v8s-25 0-69-3c-44 3-69 3-69 3v-8c-244-23-762-111-1173-446z"
                  />
                </svg>
              </span>
              <span className="-ml-4">{user.name}</span>
              <img
                src={logOut}
                alt="Logout"
                className="h-16 w-16 cursor-pointer hover:opacity-75"
                onClick={handleLogout}
              />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
