import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    <section className="modal-overlay ">
      <div className="modal-container">
        <h2>Modal content</h2>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Modal;
