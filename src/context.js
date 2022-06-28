import React, { useState, useContext } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
}

//custom hook
export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider }; //we import this in index js
