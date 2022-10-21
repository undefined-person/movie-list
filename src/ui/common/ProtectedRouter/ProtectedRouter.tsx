import { FC } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuth: boolean;
  children: JSX.Element;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuth,
  children,
}) => {
  console.log("isAuth", isAuth);
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
