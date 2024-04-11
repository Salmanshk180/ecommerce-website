import React,{useEffect, useState} from "react";
import styles from "./ProductDetail.module.css";
import Path from "../../components/shopping-cart-components/Path";
import Clients from "../../components/home-components/clients/Clients";
import Carousel from "../../components/product-detail-page/carousel/Carousel";
import DetailComponent from "../../components/product-detail-page/detail-component/DetailComponent";
import DescriptionComponent from "../../components/product-detail-page/description-component/DescriptionComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";


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
  const [product,setProduct] = useState<any>();
  const productData = useSelector((state:RootState)=>state.product.data.products);  
  useEffect(()=>{
    // productData.forEach((productData)=>{
    //   if(productData.id===id){
    //     setProduct(productData)
    //   }
    // })
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
              <DetailComponent/>
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
