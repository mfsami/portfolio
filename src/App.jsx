import React from "react";
import Home from "./pages/Home"; // Import Home component
import Works from "./pages/Works"; // Import Works component
import Connect from "./pages/Connect"; // Import Connect component

const App = () => {
  return (
    <div>
      <div className="home">
        <Home />
      </div>
      <div className="works">
        <Works />
      </div>
      <div className="connect">
        <Connect />
      </div>
    </div>
  );
};

export default App;
