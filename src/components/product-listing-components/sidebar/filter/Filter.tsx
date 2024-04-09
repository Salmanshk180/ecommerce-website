import { Fragment, useState } from "react";
import styles from "./Filter.module.css";
import List from "./List";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/Store";
const Filter = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  const categories = useSelector(
    (state: RootState) => state.brandAndCategory.data.categories
  );
  return (
    <Fragment>
      <div className={styles.filter}>
        <div className={styles.container}>
          <ul className={styles.list_container}>
            <List
              key={"all"}
              text={"all".toUpperCase()}
              selected={selectedItem === "all"}
              onClick={() => handleItemClick("all")}
            />
            {categories.map((data, index) => (
              <List
                key={index}
                text={data.name.toUpperCase()}
                selected={selectedItem === data.name}
                onClick={() => handleItemClick(data.name)}
              />
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
