/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoutes = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    
    if (!localStorage.getItem('@TOKEN')) {
      navigate("/");
    }
  }, [])
  return (
    <>
      { user && (
        <Outlet/>
      )}
    </>
  )
};
export default ProtectedRoutes;