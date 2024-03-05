import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store/Store";
interface Props {
  text: string;
}
const List = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button
        style={{ background: "transparent", border: "none", fontSize: "16px" }}
        onClick={() => {
          console.log(props.text);
        }}
      >
        {props.text}
      </button>
    </Fragment>
  );
};

export default List;
