// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE OF A COMPONNENT
export const useStateValue = () => useContext(StateContext);
