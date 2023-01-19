import React, { createContext, useReducer } from "react";
import GlobalReducer from "./globalReducer";

const initialState = {
  searchTerm: "",
  items: []
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

  function setItems(items) {
    dispatch({
      type: "SET_ITEMS",
      payload: items,
    });
  }


  

  return (
    <GlobalContext.Provider
      value={{
        searchTerm: state.searchTerm,
        items : state.items,

        addSearchTerm,
        setItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
