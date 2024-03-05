import { Fragment } from "react";
interface Props {
  text: string;
}
const List = (props: Props) => {
  return (
    <Fragment>
      <button style={{ background:"transparent",border:"none",fontSize:"16px"}}>{props.text}</button>
    </Fragment>
  );
};

export default List;
