import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";

//Protec-Router
import Home from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/dashboard" element={<ProtectedRoutes/>}>
      <Route index element={<Dashboard />}/>
    </Route>
    <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>
);

export default RoutesMain;
