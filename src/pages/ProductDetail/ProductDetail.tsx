import React,{useEffect, useState} from "react";
import styles from "./ProductDetail.module.css";
import Path from "../../components/ShoppingCartComponents/Path";
import Clients from "../../components/HomeComponents/clients/Clients";
import Carousel from "../../components/ProductDetailComponents/Carousel/Carousel";
import DetailComponent from "../../components/ProductDetailComponents/DetailComponent/DetailComponent";
import DescriptionComponent from "../../components/ProductDetailComponents/DescriptionComponent/DescriptionComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";


interface ObjectProps{
    id: string;
    src: string;
    title: string;
    description:string;
    original_price: number,
    price: number,
    showColors: boolean,
    category: string;
    brand: string;
}

const ProductDetail = () => {
  const {id} = useParams();
  const [product,setProduct] = useState<ObjectProps>();
  const productData = useSelector((state:RootState)=>state.product);
  useEffect(()=>{
    productData.forEach((productData)=>{
      if(productData.id===id){
        setProduct(productData)
      }
    })
  },[id,productData])
  return (
    <React.Fragment>
      <div className={styles["product-detail"]}>
        <Path currentPath="Shop" />
        <div className={styles["container"]}>
          <div className={styles["first_container"]}>
            <div className={styles["carousel_component"]}>
              <Carousel data={product}/>
            </div>
            <div className={styles["detail_component"]}>
              <DetailComponent data={product} />
            </div>
          </div>
        </div>
        <DescriptionComponent />
        <Clients />
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
