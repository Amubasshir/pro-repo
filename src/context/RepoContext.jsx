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
    // case 'UPDATE_REPOS':
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
