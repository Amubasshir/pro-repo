import React from 'react';

const RepoDetails = ({ repo }) => {
  return (
    <div className="repo flex w-[25rem] flex-col gap-5 rounded-xl border border-slate-600 bg-slate-800 p-5">
      <div className="to flex gap-5 ">
        <h3 className="  text-3xl font-medium text-sky-400">{repo.title}</h3>
        <span className="rounded-full border border-slate-600 py-2 px-3 text-sm font-medium tracking-wider text-slate-500 shadow-md">
          {repo.visibility}
        </span>
      </div>
      <div className="mid-one w-80 text-slate-100">
        <p>{repo.subtitle}</p>
      </div>
      <div className="mid-two flex gap-10 text-slate-300">
        <div className="left flex flex-col">
          <span>Stack:{repo.language}</span>
          <span>Added on:{new Date(repo.createdAt).toLocaleDateString()}</span>
          <span>
            Last updated:{new Date(repo.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Star:{repo.star}</span>
          <span>All Commit:{repo.commit}</span>
          <span>Pull Request:{repo.pr}</span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button className="rounded bg-sky-400 py-2 px-5 text-slate-100 ">
          Update
        </button>
        <button className=" rounded border border-slate-600 py-2 px-5 duration-300 hover:border-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RepoDetails;
