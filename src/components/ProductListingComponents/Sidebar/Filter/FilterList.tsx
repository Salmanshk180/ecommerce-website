import { Fragment } from "react";
import styles from "./FilterList.module.css";
import List from "./List";
const FilterList = () => {
  const FilterArray = [
    { text: "All Men's clothing" },
    { text: "Women's clothing" },
    { text: "Footwear" },
    { text: "Watches" },
    { text: "Beauty" },
    { text: "Kid's clothing" },
    { text: "Handbags" },
    { text: "Jwellery" },
  ];

  return (
    <Fragment>
      <div className={styles.filter}>
        <div className={styles.container}>
          <ul>
            {FilterArray.map((data) => (
              <List text={data.text}/>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterList;
