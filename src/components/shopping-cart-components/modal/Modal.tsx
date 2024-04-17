import React, { ChangeEventHandler, useState } from "react";
import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modal/modal";
import MultiStep from "react-multistep";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const Modal = () => {
  const dispatch = useDispatch();
  const [showNavigation, setShowNavigation] = useState(true);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const steps = [
    {
      name: "Add Details",
      component: <Step1 setShowNavigation={setShowNavigation} />,
    },
    {
      name: "Confirm Details",
      component: <Step2 setShowNavigation={setShowNavigation} setShowOrderSuccess={setShowOrderSuccess}/>,
    },
  ];
  return (
    <div className={styles["background"]}>
      <div className={styles["container"]}>
        <button
          className={styles["close-modal"]}
          onClick={() => dispatch(closeModal())}
        >
          x
        </button>
        <div className={styles["modal-container"]}>
          {showOrderSuccess ? (
            <Step3 />
          ) : (
            <>
              <h3>Order Details</h3>
              <MultiStep
                steps={steps}
                stepCustomStyle={{ width: "100%", justifyContent: "center" }}
                showNavigation={showNavigation}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
