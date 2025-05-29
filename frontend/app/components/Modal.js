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

// This code defines a reusable modal component in React. It accepts `children` to render inside the modal, a `title` for the modal header, and a `closeModal` function to handle closing the modal. The modal is styled with Tailwind CSS classes for layout and appearance.
// this component can be used in different parts of the application to display modal dialogs.
