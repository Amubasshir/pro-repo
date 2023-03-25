import moment from 'moment';
import React, { useState } from 'react';
import { useReposContext } from '../hooks/useReposContext';
import RepoForm from './RepoForm';
const RepoDetails = ({ repo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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

  const handleUpdate = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="repo flex w-[26rem] flex-col gap-5 rounded-xl border border-slate-600 bg-slate-800 p-5">
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
          <span>
            Stack <span className="text-blue-400">:</span> {repo.language}
          </span>
          <span>
            Added <span className="text-blue-400">:</span>{' '}
            {moment(repo.createdAt).format('DD MMM, hh:mm A')}
          </span>
          <span>
            Updated <span className="text-blue-400">:</span>{' '}
            {moment(repo.updatedAt).format('DD MMM, hh:mm A')}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Star:{repo.star}</span>
          <span>All Commit:{repo.commit}</span>
          <span>Pull Request:{repo.pr}</span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button
          onClick={handleUpdate}
          className="rounded bg-sky-500 py-2 px-5 text-slate-100 "
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className=" rounded border border-slate-600 py-2 px-5 duration-300 hover:border-red-600"
        >
          Delete
        </button>
      </div>

      {/* overlay */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed top-0 left-0 right-0 bottom-0 z-[1] h-screen w-screen bg-slate-900/50 backdrop-blur-sm ${
          isOverlayOpen ? '' : 'hidden'
        }`}
      ></div>
      {/* modal */}
      <div
        className={`update-modal fixed top-1/2 left-1/2 z-[2] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-700 bg-slate-800 p-10 shadow-xl ${
          isModalOpen ? '' : 'hidden'
        } `}
      >
        <h2 className="mb-3 text-4xl font-medium text-sky-400">
          Update Repository
        </h2>
        <RepoForm
          repo={repo}
          setIsModalOpen={setIsModalOpen}
          setIsOverlayOpen={setIsOverlayOpen}
        />
        {/* <form
          onSubmit={handleSubmit}
          className="repo-form flex flex-col gap-3 "
        >
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo title"
            >
              Repo title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="e.g. e-commerce website"
              id="Repo title"
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('title')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo short description"
            >
              Repo short description
            </label>
            <input
              value={subtitle}
              onChange={(e) => setsubtitle(e.target.value)}
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('subtitle')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="text"
              placeholder="e.g. a e-commerce website site that serve the millennium"
              id="Repo short description"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo visibility"
            >
              Repo visibility
            </label>
            <input
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('visibility')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="text"
              placeholder="e.g. public/private"
              id="Repo visibility"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo stack"
            >
              Repo stack
            </label>
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('language')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="text"
              placeholder="e.g. MERN,MEAN, T3,PERN "
              id="Repo stack"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo star"
            >
              Repo star
            </label>
            <input
              value={star}
              onChange={(e) => setStar(e.target.value)}
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('star')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="number"
              placeholder="e.g. ..."
              id="Repo star"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo commit"
            >
              Repo commit
            </label>
            <input
              value={commit}
              onChange={(e) => setCommit(e.target.value)}
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('commit')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="number"
              placeholder="e.g. ..."
              id="Repo commit"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label
              className="cursor-pointer duration-300 hover:text-sky-400"
              htmlFor="Repo PR"
            >
              Repo PR
            </label>
            <input
              value={pr}
              onChange={(e) => setPr(e.target.value)}
              c
              className={`rounded-lg border  bg-transparent py-2 px-5 outline-none duration-300 focus:border-sky-400 ${
                emptyFields?.includes('pr')
                  ? 'border-red-500'
                  : 'border-slate-600'
              }`}
              type="number"
              placeholder="e.g. ..."
              id="Repo PR"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-sky-400 py-3 text-lg font-medium text-slate-900 duration-300 hover:bg-sky-100 "
          >
            Add Repo
          </button>
          {error && (
            <p className="mb-2 rounded-md border border-red-500 py-2 px-4 text-red-500">
              {error}
            </p>
          )}
        </form> */}
      </div>
    </div>
  );
};

export default RepoDetails;
