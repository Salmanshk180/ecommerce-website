import React, { useState } from "react";
import styles from "./DescriptionComponent.module.css";
import TopBar from "./TopBar";
import MainComponent from "./MainComponent";

const DescriptionComponent = () => {
  const [compoenentRender, setComponentRender] = useState("reviews");
  return (
    <React.Fragment>
      <div className={styles["description-component"]}>
        <TopBar
          componentRender={compoenentRender}
          setComponentRender={setComponentRender}
        />
        <MainComponent
          componentRender={compoenentRender}
          setComponentRender={setComponentRender}
        />
      </div>
    </React.Fragment>
  );
};

export default DescriptionComponent;
