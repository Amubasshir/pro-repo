import React, { useEffect, useState } from 'react';

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
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getRepos();
  }, []);
  return (
    <div className="home py-30 container mx-auto bg-red-300">
      <div className="left">
        <h2 className="text-6xl font-medium text-red-700">All projects</h2>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
