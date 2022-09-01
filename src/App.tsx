import Routes from "./routes";
import Global from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
/* import Login from "./pages/Login"; */
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
