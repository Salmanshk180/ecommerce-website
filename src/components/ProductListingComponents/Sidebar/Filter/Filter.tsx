import { Fragment, useState } from "react";
import styles from "./Filter.module.css";
import List from "./List";
const Filter = () => {
  const [selectedItem, setSelectedItem] = useState("");
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
  const handleItemClick = (text: string) => {
    setSelectedItem(text); // Update selected item
  };
  return (
    <Fragment>
      <div className={styles.filter}>
        <div className={styles.container}>
          <ul className={styles.list_container}>
            <li style={{ listStyle: "none", fontWeight: "bold" }}>
              &lt; All Categories
            </li>
            {FilterArray.map((data) => (
              <List
                text={data.text}
                selected={selectedItem === data.text}
                onClick={() => handleItemClick(data.text)}
              />
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
