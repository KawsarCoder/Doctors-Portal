import React from "react";
import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
