import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    // login user
    await login(email, password);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="login-form mx-auto flex max-w-sm flex-col gap-5 py-16"
    >
      <h2 className="mb-10 text-center text-5xl font-medium text-sky-400">
        Login
      </h2>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className="cursor-pointer duration-300 hover:text-sky-400"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. name@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-slate-400 bg-transparent py-4 px-5 outline-none focus:border-sky-400"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="password"
          className="cursor-pointer duration-300 hover:text-sky-400"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-slate-400 bg-transparent py-4 px-5 outline-none focus:border-sky-400"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="delay-50 mt-3 inline-flex items-center justify-center rounded-xl bg-sky-400 py-3 text-lg font-medium tracking-wide text-slate-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 "
      >
        <span className="mr-2">Log in</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="22px"
          width="22px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 499.1 499.1"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path d="M0,249.6c0,9.5,7.7,17.2,17.2,17.2h327.6l-63.9,63.8c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5     l93.1-93.1c6.7-6.7,6.7-17.6,0-24.3l-93.1-93.1c-6.7-6.7-17.6-6.7-24.3,0c-6.7,6.7-6.7,17.6,0,24.3l63.8,63.8H17.2     C7.7,232.5,0,240.1,0,249.6z" />
                <path d="M396.4,494.2c56.7,0,102.7-46.1,102.7-102.8V107.7C499.1,51,453,4.9,396.4,4.9H112.7C56,4.9,10,51,10,107.7V166     c0,9.5,7.7,17.1,17.1,17.1c9.5,0,17.2-7.7,17.2-17.1v-58.3c0-37.7,30.7-68.5,68.4-68.5h283.7c37.7,0,68.4,30.7,68.4,68.5v283.7     c0,37.7-30.7,68.5-68.4,68.5H112.7c-37.7,0-68.4-30.7-68.4-68.5v-57.6c0-9.5-7.7-17.2-17.2-17.2S10,324.3,10,333.8v57.6     c0,56.7,46.1,102.8,102.7,102.8H396.4L396.4,494.2z" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
        </svg>
      </button>

      {error && (
        <p className="mb-2 rounded-md border border-red-500 py-2 px-4 text-red-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
