import { Fragment } from "react";
import styles from "./Filter.module.css";
import List from "./List";
const Filter = () => {
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
          <ul className={styles.list_container}>
            <li style={{ listStyle: "none", fontWeight: "bold" }}>
              &lt; All Categories
            </li>
            {FilterArray.map((data) => (
              <List text={data.text} />
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
