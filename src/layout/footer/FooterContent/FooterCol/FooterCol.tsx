import React from "react";
import styles from "./FooterCol.module.css";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  array: string[];
}

const FooterCol = (props: Props) => {
  return (
    <React.Fragment>
      <div className={styles.footer_col}>
        <p className={styles.col_title}>{props.title}</p>
        {props.array.map((data, index) => (
          <NavLink key={index} to={"#"}>
            {data}
          </NavLink>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FooterCol;
