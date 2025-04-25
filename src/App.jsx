import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import SpaceVR from "./pages/SpaceVR/SpaceVR";
import GraphiteProject from "./pages/Graphite/Graphite";
import Lucidity from "./pages/Lucidity/Lucidity";
import WSL from "./pages/WSL/WSL";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/spacevr" element={<SpaceVR />} />
        <Route path="/graphite" element={<GraphiteProject />} />
        <Route path="/lucidity" element={<Lucidity />} />
        <Route path="/wsl" element={<WSL />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
