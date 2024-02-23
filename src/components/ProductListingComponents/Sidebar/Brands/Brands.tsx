import { Fragment } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
const Brands = () => {
    const initialState=[
        {text:"All"},
        {text:"Zara"},
        {text:"Levi's"},
        {text:"Adidas"},
        {text:"Peter England"},
        {text:"Allen Solly"},
        {text:"Fabindia"},
    ]
  return (
    <Fragment>
      <div className={styles.brands}>
        <div className={styles.container}>
          <p className={styles.title}>Brands</p>
          {
            initialState.map((state)=>(
                <CheckBox text={state.text}/>
            ))
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Brands;
