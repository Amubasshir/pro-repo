import { createContext, useReducer } from 'react';

const initialState = {
  repos: null,
};

export const repoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_REPOS':
      return {
        repos: action.payload,
      };
    case 'CREATE_REPO':
      return {
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
