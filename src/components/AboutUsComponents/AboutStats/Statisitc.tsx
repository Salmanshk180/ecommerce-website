import React from "react";
import styles from "./Statistics.module.css";

interface Props {
  StatsNumber: string;
  StatsText: string;
}

const Statisitc = (props: Props) => {
  return (
    <React.Fragment>
      <div className={styles["statistics"]}>
        <p className={styles["number"]}>{props.StatsNumber}</p>
        <p className={styles["text"]}>{props.StatsText}</p>
      </div>
    </React.Fragment>
  );
};

export default Statisitc;
