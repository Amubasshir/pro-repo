import React, { useEffect, useState } from 'react';
import RepoDetails from '../components/RepoDetails';
import RepoForm from '../components/RepoForm';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getRepos = async (req, res) => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/repos');
        if (!res.ok) throw new Error('something went wrong');
        const data = await res.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getRepos();
  }, []);
  return (
    <div className="home container mx-auto grid min-h-fit  grid-cols-3 gap-8 py-5 ">
      <div className="left col-span-2">
        <h2 className="mb-10 text-4xl font-medium text-sky-400">
          All Repository
        </h2>
        <div className="repos-wrapper flex flex-wrap gap-10">
          {repos &&
            repos.map((repo) => <RepoDetails key={repo._id} repo={repo} />)}
        </div>
      </div>
      <RepoForm />
    </div>
  );
};

export default Home;
