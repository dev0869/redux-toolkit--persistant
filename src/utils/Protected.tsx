import { Navigate, Outlet } from "react-router";

const Protected = () => {
  const user = localStorage.getItem("token");
  if (!user) {
    return <Navigate to={"/Login"} />;
  }
  return <Outlet />;
};

export default Protected;
