import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext(); //value in AppContext is an object

  return (
    <section className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h2>Modal content</h2>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Modal;
