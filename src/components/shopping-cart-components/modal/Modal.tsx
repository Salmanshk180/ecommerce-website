import React, { ChangeEventHandler, useState } from "react";
import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modal/modal";
import MultiStep from "react-multistep";
import Step1 from "./Step1";
import Step2 from "./Step2";
const Modal = () => {
  const dispatch = useDispatch();
  const steps = [
    { name: "Add Details", component: <Step1 /> },
    { name: "Confirm Details", component: <Step2 /> },
  ];
  return (
    <div className={styles["background"]}>
      <div className={styles["container"]}>
          <button className={styles["close-modal"]} onClick={()=>dispatch(closeModal())}>x</button>
        <div className={styles["modal-container"]}>
          <h3>Order Details</h3>
          <MultiStep steps={steps} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
