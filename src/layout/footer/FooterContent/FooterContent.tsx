import React from "react";
import styles from "./FooterContent.module.css";
import FooterCol from "./FooterCol/FooterCol";
import FooterInput from "./FooterInput/FooterInput";
const FooterContent = () => {
  const colArray = [
    {
      title: "Company Profile",
      array: ["About Us", "About Us", "About Us", "About Us"],
    },
    {
      title: "Company Profile",
      array: ["About Us", "About Us", "About Us", "About Us"],
    },
    {
      title: "Company Profile",
      array: ["About Us", "About Us", "About Us", "About Us"],
    },
    {
      title: "Company Profile",
      array: ["About Us", "About Us", "About Us", "About Us"],
    },
  ];
  return (
    <React.Fragment>
      <div className={styles.footer_content}>
        {colArray.map((col,index) => (
          <FooterCol key={index} title={col.title} array={col.array} />
        ))}
        <FooterInput/>
      </div>
    </React.Fragment>
  );
};

export default FooterContent;
