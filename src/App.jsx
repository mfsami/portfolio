import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
