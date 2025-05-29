"use client";
import React, { useReducer, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "@/app/components/Modal";
import { toggleModal } from "../redux/slice";
import { SignIn } from "@/components/Signin";
import { Signup } from "@/app/components/Signup";

export function ModalManager() {
  const isSigninModal = useSelector((state) => state.isSigninModal);
  const isSignupModal = useSelector((state) => state.isSignupModal);

  const dispatch = useDispatch();

  const handleCloseModal = (payload) => {
    dispatch(toggleModal(payload));
  };

  return (
    <>
      {isSigninModal && (
        <>
          <ModalComponent
            title={"SIGN IN"}
            closeModal={() => handleCloseModal("SIGN_IN")}
          >
            <SignIn />
          </ModalComponent>
        </>
      )}

      {isSignupModal && (
        <>
          <ModalComponent
            title={"SIGN UP"}
            closeModal={() => handleCloseModal("SIGN_UP")}
          >
            <Signup />
          </ModalComponent>
        </>
      )}
    </>
  );
}

// This code defines a `ModalManager` component in React that manages the display of modal dialogs for signing in and signing up. It uses Redux to manage the state of whether each modal is open or closed. The component renders a `ModalComponent` with the appropriate title and content based on the current state, allowing users to sign in or sign up through modals.
// The `handleCloseModal` function dispatches an action to close the modal when the user clicks the close button, ensuring that the modal state is updated correctly in the Redux store.
// The `ModalManager` component is designed to be used in the main application layout, allowing for a consistent modal management system across the app.
