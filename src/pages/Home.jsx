import React, { useEffect } from 'react';
import RepoDetails from '../components/RepoDetails';
import RepoForm from '../components/RepoForm';
import { useReposContext } from '../hooks/useReposContext';

const Home = () => {
  const { repos, dispatch } = useReposContext();

  useEffect(() => {
    const getAllRepos = async () => {
      const res = await fetch('http://localhost:5000/api/repos');
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: 'SET_REPOS', payload: json });
      }
    };
    getAllRepos();
  }, [dispatch]);
  return (
    <div className="home container mx-auto grid min-h-fit  grid-cols-3 gap-x-3 px-5 py-10 ">
      <div className="left col-span-2 ">
        <h2 className="mb-10 text-3xl font-medium text-sky-400">
          All Repository
        </h2>
        <div className="repos-wrapper flex flex-wrap gap-5">
          {repos &&
            repos.map((repo) => <RepoDetails key={repo._id} repo={repo} />)}
        </div>
      </div>
      <RepoForm />
    </div>
  );
};

export default Home;
