import React, { Fragment, useEffect, useState } from "react";
import styles from "./Card.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
interface Props {
  src?: string;
  title?: string;
  items?: number;
}
interface ObjectProps {
  id: string;
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
}
const Card = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  // useEffect(() => {
  //   filterData?.products?.forEach((product:any) => {
  //     if (product.id === id) {
  //       setProduct(product);
  //     }
  //   });
  // }, [id,filterData]);
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={product ? product.src : props.src} alt="" />
        <div className={styles.description}>
          <p>{product?"":props.title}</p>
          <p>{props.items}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
