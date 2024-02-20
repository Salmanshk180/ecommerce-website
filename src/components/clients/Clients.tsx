import { Fragment } from "react";
import client1 from "../../assets/vector-1.svg";
import client2 from "../../assets/vector-2.svg";
import client3 from "../../assets/vector-3.svg";
import client4 from "../../assets/vector-4.svg";
import client5 from "../../assets/vector-5.svg";
import client6 from "../../assets/vector-6.svg";
import styles from "./Clients.module.css"
const clients = () => {
  return (
    <Fragment>
      <div className={styles.Clients}>
        <div className={styles.Clients_container}>
          <img src={client1} alt="client1" className={styles.client} />
          <img src={client2} alt="client2" className={styles.client}/>
          <img src={client3} alt="client3" className={styles.client}/>
          <img src={client4} alt="client4" className={styles.client}/>
          <img src={client5} alt="client5" className={styles.client}/>
          <img src={client6} alt="client6" className={styles.client}/>
        </div>
      </div>
    </Fragment>
  );
};

export default clients;
