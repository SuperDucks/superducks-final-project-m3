import { Routes, Route, Navigate } from "react-router-dom";
//Protec-Router
import Home from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
