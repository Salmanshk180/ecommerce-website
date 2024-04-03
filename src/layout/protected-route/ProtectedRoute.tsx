import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { Navigate } from "react-router-dom";

interface Props {
  element: React.FC;
}

const ProtectedRoute = (props: Props) => {
  const LoggedInUser = useSelector((state: RootState) => state.users.LoggedInUser);

  return (
    <React.Fragment>
      {LoggedInUser ? <props.element /> : <Navigate to="/sign-in" />}
    </React.Fragment>
  );
};

export default ProtectedRoute;
