import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from 'react'
interface Props {
  isAuthenticated: boolean;
  user: {
    role: string
  };
  children?: ReactNode;
}
function CheckAuth({ isAuthenticated, user, children }: Props) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth")
    )
  ) {
    return <Navigate to="/auth" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/auth"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
