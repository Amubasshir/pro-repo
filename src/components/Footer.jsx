import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-[#0C2237] py-8 text-center text-gray-50">
      <p className="text-slate-400">
        &copy;{new Date().getFullYear()}{' '}
        <span>Pro Repo. All right reserved.</span>{' '}
      </p>
    </div>
  );
};

export default Footer;
