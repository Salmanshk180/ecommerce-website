import { Fragment } from "react";
interface Props {
  text: string;
}
const List = (props: Props) => {
  return (
    <Fragment>
      <li style={{ listStyle: "none" }}>{props.text}</li>
    </Fragment>
  );
};

export default List;
