"use client";
import React from "react";

const ModalComponent = ({ children, title, closeModal }) => {
  return (
    <div className="flex w-full flex-wrap h-full justify-center content-center fixed left-0 top-0 flex-col">
      <div className="max-w-sm mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <div className="text-base text-black-600 font-semibold mb-4">
          {title}
          <span className="float-right cursor-pointer" onClick={closeModal}>
            X
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;

// This component can be used to create a modal dialog in a React application.
// It accepts children to render inside the modal, a title for the modal, and a function to close the modal.
// The modal is styled with Tailwind CSS classes for a clean and modern look.
