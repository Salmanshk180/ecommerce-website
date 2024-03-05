import { Fragment, useState, useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";
import Filter from "./Filter/Filter";
import Price from "./Price/Price";
import Brands from "./Brands/Brands";
import useBreakpoint from "../../../utils/BreakPoints/useBreakpoints";
import FilterList from "./Filter/FilterList";
import greaterThan from "../../../assets/GreaterThan.svg";
interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const Sidebar = (props: Props) => {
  const breakpoint = useBreakpoint();
  const changeShow = () => {
    props.setShow(!props.show);
  };

  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [changeShow]);
  return (
    <Fragment>
      <div
        className={`${styles.sidebar} ${
          props.show ? styles["sidebar_active"] : styles["sidebar_inactive"]
        }`}
      >
        <div
          className={`${styles["container"]}  ${
            props.show ? styles["active"] : styles["inactive"]
          }`}
        >
          <p className={styles.title}>Filter By</p>
          {/* <div className={styles.line}></div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              fontWeight: 700,
              padding: "10px 0px 0px 0px",
            }}
          >
            {breakpoint == "xs" ? <p>Filter By</p> : ""}
            <button className={styles["close_btn"]} onClick={changeShow}>
              Close
            </button>
          </div>
          <div className={styles["components"]}>
            {breakpoint === "xs" ? (
              <div
                className={styles["drawer-container"]}
                style={{ fontSize: "14px" }}
              >
                <button
                  onClick={() => {
                    setShowCategory(!showCategory);
                    setShowBrands(false);
                    setShowPrice(false);
                  }}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Category
                  <img
                    src={greaterThan}
                    alt=""
                    style={
                      showCategory ? { transform: "rotate(90deg)" } : undefined
                    }
                  />
                </button>
                {showCategory ? <FilterList /> : ""}

                <button
                  onClick={() => {
                    setShowPrice(!showPrice);
                    setShowBrands(false);
                    setShowCategory(false);
                  }}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Price
                  <img
                    src={greaterThan}
                    alt=""
                    style={
                      showPrice ? { transform: "rotate(90deg)" } : undefined
                    }
                  />
                </button>
                {showPrice ? <Price /> : ""}
                <button
                  onClick={() => {setShowBrands(!showBrands)
                    setShowCategory(false);
                    setShowPrice(false);
                  }}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Brands
                  <img
                    src={greaterThan}
                    alt=""
                    style={
                      showBrands ? { transform: "rotate(90deg)" } : undefined
                    }
                  />
                </button>
                {showBrands ? <Brands /> : ""}
              </div>
            ) : (
              <>
                <Filter />
                <Price />
                <Brands />
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
