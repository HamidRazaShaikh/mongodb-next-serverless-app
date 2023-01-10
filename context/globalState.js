import React, { createContext, useReducer } from "react";
import GlobalReducer from "./globalReducer";

const initialState = {
  searchTerm: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function addSearchTerm(searchTerm) {
    dispatch({
      type: "ADD_SEARCH_TERM",
      payload: searchTerm,
    });
  }

  

  return (
    <GlobalContext.Provider
      value={{
        searchTerm: state.searchTerm,

        addSearchTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
