import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import SpaceVR from "./pages/SpaceVR";
import Lucidity from "./pages/Lucidity";
import WSL from "./pages/WSL";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/SpaceVR" element={<SpaceVR />} />
          <Route path="/Lucidity" element={<Lucidity />} />
          <Route path="/WSL" element={<WSL />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
