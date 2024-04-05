import { Fragment, useState } from "react";
import styles from "./FilterList.module.css";
import List from "./List";
const FilterList = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const FilterArray = [
    { text: "Men's clothing" },
    { text: "Women's clothing" },
    { text: "Footwear" },
    { text: "Watches" },
    { text: "Beauty" },
    { text: "Kid's clothing" },
    { text: "Handbags" },
    { text: "Jwellery" },
  ];
  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        <div className={styles.container}>
          <ul>
            {FilterArray.map((data, index) => (
              <List
                key={index}
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

export default FilterList;
