import React from "react";
import Home from "./components/Intro"; // Import Home component
import Works from "./components/Works"; // Import Works component
import Connect from "./components/Connect"; // Import Connect component

const App = () => {
  return (
    <div>
      <Home />
      <Works />
      <Connect />
    </div>
  );
};

export default App;
