import { Fragment, useState } from "react";
import ProductDisplayNavbar from "./ProductDisplayNavbar/ProductDisplayNavbar";
import styles from "./ProductDisplay.module.css";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import Pagination from "../Pagination/Pagination";
import p1 from "../../../assets/product-1.svg";
import p2 from "../../../assets/product-2.svg";
import p3 from "../../../assets/product-3.svg";
import p4 from "../../../assets/product-4.svg";
import p5 from "../../../assets/product-5.svg";
const CarouselData = [
  {
    initialState: [
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
    ],
  },
  {
    initialState: [
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
      },
    ],
  },
];

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const ProductDisplay = (props: Props) => {
  const [sliceMin, setSliceMin] = useState<number>(0);
  const [sliceMax, setSliceMax] = useState<number>(1);
  return (
    <Fragment>
      <div className={styles.product_display}>
        <div className={styles.navbar}>
          <ProductDisplayNavbar show={props.show} setShow={props.setShow} />
        </div>
        <div className={styles.carousel}>
          <ProductCarousel data={CarouselData} min={sliceMin} max={sliceMax}/>
          <Pagination numberOfCarousel={CarouselData.length} setSliceMin={setSliceMin} setSliceMax={setSliceMax} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplay;
