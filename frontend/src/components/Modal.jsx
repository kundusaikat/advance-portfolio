import React, { useEffect, useRef } from "react";

const Modal = ({ onClose, children }) => {
  const modalOutsideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalOutsideRef.current && !modalOutsideRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal" ref={modalOutsideRef}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;