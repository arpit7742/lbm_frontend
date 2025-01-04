import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangePasswordForm";

const Modal = ({ setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
      aria-hidden="true"
    >
      <div
        className="w-[90%] max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 p-4">
          <h3 id="modal-title" className="text-lg font-semibold dark:text-white">
            Change Password
          </h3>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M15 9L9 15M15 15L9 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Modal;
