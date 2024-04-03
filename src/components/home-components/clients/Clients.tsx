import React from "react";
import styles from "./Clients.module.css";
import Image from "../../../UI/ImageComponent/Image";
import {
  client_img_1,
  client_img_2,
  client_img_3,
  client_img_4,
  client_img_5,
  client_img_6,
} from "../../../assets/images";
const Clients = () => {
  const data = [
    client_img_1,
    client_img_2,
    client_img_3,
    client_img_4,
    client_img_5,
    client_img_6,
  ];
  return (
    <React.Fragment>
      <div className={styles["Clients"]}>
        <div className={styles["Clients_container"]}>
          {data.map((image) => (
            <div className={styles["client"]}>
              <Image src={image} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clients;
