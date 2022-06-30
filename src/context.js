import React, { useState, useContext } from "react";

const AppContext = React.createContext();
//context is used because the buttons are in separate components and to avoid prop drilling
//Used for projects involving modals.
//Because the buttons are on different components, you would need separate functions for show and hide
//This would cause App.js to be bulky hence the need for context.
//Alternative to creating state in App and passing the states and functions to the components


function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

//custom hook
export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider }; //we import this in index js
