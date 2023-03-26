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
    <div className="repo flex w-[24rem] flex-col gap-5 rounded-xl border border-slate-600 bg-slate-800 p-5">
      <div className="to flex items-center  ">
        <svg
          aria-hidden="true"
          height="20"
          viewBox="0 0 16 16"
          version="1.1"
          width="20"
          data-view-component="true"
          class="octicon octicon-repo mr-1 fill-current text-slate-500 "
        >
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        <h3 className="  text-xl font-medium text-sky-400">{repo.title}</h3>
        <span className="ml-5 rounded-full border border-slate-600 py-1 px-4 text-xs font-medium tracking-wider text-slate-500 shadow-md duration-300 hover:border-slate-300 hover:text-slate-300">
          {repo.visibility}
        </span>
      </div>
      <div className="mid-one truncate text-sm text-slate-100">
        <p>{repo.subtitle}</p>
      </div>
      <div className="mid-two flex gap-10 text-slate-300">
        <div className="left flex flex-col gap-2">
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
        <div className="right flex flex-col gap-2">
          <span>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-git-pull-request mr-2 inline  fill-current  text-slate-500 hover:text-sky-400"
            >
              <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
            </svg>
            PR:{repo.pr}
          </span>
          <span>
            <svg
              aria-label="fork"
              role="img"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo-forked mr-2 inline  fill-current text-slate-500 hover:text-sky-400"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            Fork:{repo.commit}
          </span>
          <span>
            <svg
              aria-label="star"
              role="img"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-star mr-2 inline  fill-current text-slate-500 hover:text-sky-400"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            Star:{repo.star}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-10">
        <button
          onClick={handleUpdate}
          className="rounded bg-sky-500 py-1  px-5 text-base font-medium text-slate-800 duration-300 hover:bg-sky-700 hover:text-slate-100 "
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className=" rounded border border-slate-600 py-1 px-5 text-lg font-medium duration-300 hover:border-red-600 hover:text-red-500"
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
      </div>
    </div>
  );
};

export default RepoDetails;
