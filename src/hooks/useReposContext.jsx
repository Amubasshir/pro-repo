import { useContext } from 'react';
import { RepoContext } from '../context/RepoContext';

export const useReposContext = () => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error(
      'You have to call useReposContext inside of RepoContextProvider'
    );
  }
  return context;
};
