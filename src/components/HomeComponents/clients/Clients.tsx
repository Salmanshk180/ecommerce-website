import { Fragment } from "react";
import styles from "./Clients.module.css";
import {
  client_img_1,
  client_img_2,
  client_img_3,
  client_img_4,
  client_img_5,
  client_img_6,
} from "../../../assets/images";
const clients = () => {
  return (
    <Fragment>
      <div className={styles.Clients}>
        <div className={styles.Clients_container}>
          <img src={client_img_1} alt="client1" className={styles.client} />
          <img src={client_img_2} alt="client2" className={styles.client} />
          <img src={client_img_3} alt="client3" className={styles.client} />
          <img src={client_img_4} alt="client4" className={styles.client} />
          <img src={client_img_5} alt="client5" className={styles.client} />
          <img src={client_img_6} alt="client6" className={styles.client} />
        </div>
      </div>
    </Fragment>
  );
};

export default clients;
