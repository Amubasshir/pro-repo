import { createContext, useReducer } from 'react';

const initialState = {
  repos: [],
};

export const repoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.payload,
      };
    case 'CREATE_REPO':
      return {
        ...state,
        repos: [action.payload, ...state.repos],
      };
    default:
      return state;
    // case 'DELETE_REPO':
    case 'DELETE_REPO':
      return {
        ...state,
        repos: state.repos.filter((repo) => repo._id !== action.payload._id),
      };
    // case 'UPDATE_REPOS':
    case 'UPDATE_REPO':
      const [existingRepo] = state.repos.filter(
        (repo) => repo._id === action.payload._id
      );

      return {
        ...state,
        repos: [
          action.payload,
          ...state.repos.filter((repo) => repo._id !== existingRepo._id),
        ],
      };
  }
};

export const RepoContext = createContext();

export const RepoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(repoReducer, initialState);

  return (
    <RepoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RepoContext.Provider>
  );
};
