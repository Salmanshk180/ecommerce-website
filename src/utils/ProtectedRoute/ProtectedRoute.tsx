import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
import { Outlet, Navigate } from "react-router-dom";

interface Props {
  element: React.FC;
}

const ProtectedRoute = (props: Props) => {
  const isLoggedin = useSelector((state: RootState) => state.users.isLoggedin);

  return (
    <React.Fragment>
      {isLoggedin ? <props.element /> : <Navigate to="/sign-in" />}
    </React.Fragment>
  );
};

export default ProtectedRoute;
