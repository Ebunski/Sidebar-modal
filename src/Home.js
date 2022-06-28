import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
// import { AppContext } from "./context";   //  we are using custom hook
import { useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext)         //using custom hook instead
  const { openSidebar, openModal } = useGlobalContext(); //value in AppContext is an object

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
