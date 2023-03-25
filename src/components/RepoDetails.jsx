import React from 'react';
import { useReposContext } from '../hooks/useReposContext';

const RepoDetails = ({ repo }) => {
  const { dispatch } = useReposContext();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/api/repos/${repo._id}`, {
      method: 'DELETE',
    });
    const json = await res.json();
    if (res.ok) {
      dispatch({ type: 'DELETE_REPO', payload: json });
    }
  };
  return (
    <div className="repo flex w-[25rem] flex-col gap-5 rounded-xl border border-slate-600 bg-slate-800 p-5">
      <div className="to flex gap-5 ">
        <h3 className="  text-3xl font-medium text-sky-400">{repo.title}</h3>
        <span className="rounded-full border border-slate-600 py-2 px-3 text-sm font-medium tracking-wider text-slate-500 shadow-md">
          {repo.visibility}
        </span>
      </div>
      <div className="mid-one  truncate text-slate-100">
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
        <button className="rounded bg-sky-500 py-2 px-5 text-slate-100 ">
          Update
        </button>
        <button
          onClick={handleDelete}
          className=" rounded border border-slate-600 py-2 px-5 duration-300 hover:border-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RepoDetails;
