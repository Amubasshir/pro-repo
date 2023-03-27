import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useReposContext } from '../hooks/useReposContext';

const RepoForm = ({ repo, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(repo ? repo.title : '');
  const [subtitle, setsubtitle] = useState(repo ? repo.subtitle : '');
  const [visibility, setVisibility] = useState(repo ? repo.visibility : '');
  const [language, setLanguage] = useState(repo ? repo.language : '');
  const [star, setStar] = useState(repo ? repo.star : '');
  const [commit, setCommit] = useState(repo ? repo.commit : '');
  const [pr, setPr] = useState(repo ? repo.pr : '');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useReposContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in to view this!!!');
      return;
    }

    // data
    const repoObj = {
      title,
      subtitle,
      visibility,
      language,
      star,
      commit,
      pr,
    };

    //  if there is no repo, send post req
    if (!repo) {
      // post request
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/repos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(repoObj),
      });
      const json = await res.json();

      // !res.ok set error
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      // req.ok reset
      if (res.ok) {
        setTitle('');
        setsubtitle('');
        setVisibility('');
        setLanguage('');
        setStar('');
        setCommit('');
        setPr('');
        setError(null);
        setEmptyFields([]);
        dispatch({ type: 'CREATE_REPO', payload: json });
      }
      return;
    }

    // if there is a repo, send patch req
    if (repo) {
      // send patch req
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/repos/${repo._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(repoObj),
        }
      );
      const json = await res.json();

      // !res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      // res.ok
      if (res.ok) {
        setError(null);
        setEmptyFields([]);

        // dispatch
        dispatch({ type: 'UPDATE_REPO', payload: json });

        // close overlay and modal
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="repo-form flex flex-col gap-1 ">
      <h2
        className={`mb-5 text-3xl font-medium text-sky-400 ${
          repo ? 'hidden' : ''
        } `}
      >
        Add Repository
      </h2>
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
            emptyFields?.includes('pr') ? 'border-red-500' : 'border-slate-600'
          }`}
          type="number"
          placeholder="e.g. ..."
          id="Repo PR"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-lg bg-sky-400 py-3 text-xl  font-medium tracking-wider text-slate-800 duration-300 hover:bg-sky-700   hover:text-slate-100 "
      >
        {repo ? 'Confirm Update' : 'Add Repo'}
      </button>
      {error && (
        <p className="mb-2 rounded-md border border-red-500 py-2 px-4 text-red-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default RepoForm;
