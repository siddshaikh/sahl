import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signature from "./pages/Signature";
import { Routes, Route } from "react-router-dom";
import LinkDownLoad from "./pages/LinkDownLoad";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/sign" element={<Signature />} />
        <Route path="/link-download" element={<LinkDownLoad />} />
      </Routes>
    </div>
  );
}

export default App;
