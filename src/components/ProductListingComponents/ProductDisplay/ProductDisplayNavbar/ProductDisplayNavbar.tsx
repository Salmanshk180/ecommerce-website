import React, { Fragment } from "react";
import styles from "./ProductDisplayNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  priceHighToLow, priceLowToHigh } from "../../../../redux/Slices/filterProducts";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ProductDisplayNavbar = (props: Props) => {
  const dispatch = useDispatch();
 const handleChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    if(event.target.value==="pricelowtohigh"){
       dispatch(priceLowToHigh()) 
    }
    
    if(event.target.value==="pricehightolow"){
       
       dispatch(priceHighToLow()) 
    }
    
 }
  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.description}>
          <p className={styles.heading}>Men's Clothing</p>
          <p className={styles.subheading}>Seo text will be here</p>
        </div>
        <div className={styles.sort_container}>
          <p className={styles.sort_text}>Sort By</p>
          <button
            className={styles.filter_btn}
            onClick={() => props.setShow(!props.show)}
          >
            Filter By
          </button>
          <select name="sort" id="sort" onChange={(event)=>handleChange(event)}>
            {/* <option value="Popularity" selected>
              Popularity
            </option> */}
            <option value="pricelowtohigh">Price: Low to High</option>
            <option value="pricehightolow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplayNavbar;
