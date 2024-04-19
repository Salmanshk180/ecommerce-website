import React, { Dispatch, SetStateAction } from "react";
import styles from "./MainComponent.module.css";
import TextCompoent from "./TextCompoent";
import ListComponent from "./ListComponent";
import { home_chair_img } from "../../../assets/images";
import ReviewComponent from "./ReviewComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
interface Props {
  componentRender: string;
  setComponentRender: Dispatch<SetStateAction<string>>;
}
const MainComponent = (props: Props) => {
  const product_description = useSelector((state:RootState)=>state.oneProduct.data.product?.description)
  const component = () => {
    switch (props.componentRender) {
      case "review":
        return <ReviewComponent />;
      case "Description":
        return <div>{product_description}</div>;
      default:
        return <ReviewComponent />;
    }
  };

  return (
    <React.Fragment>
      <div className={styles["main-component"]}>
        {component()}
      </div>
    </React.Fragment>
  );
};

export default MainComponent;
