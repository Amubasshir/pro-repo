import { useAuthContext } from './useAuthContext';
import { useReposContext } from './useReposContext';

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: reposDispatch } = useReposContext();
  const logout = () => {
    // clear ls
    localStorage.removeItem('user');

    // dispatch logout
    logoutDispatch({ type: 'LOGOUT' });
    reposDispatch({ type: 'SET_REPOS', payload: null });
  };
  return { logout };
};
