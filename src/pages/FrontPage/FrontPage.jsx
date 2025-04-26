import React from "react";

import Intro from "../../components/home/Intro/Intro";
import Works from "../../components/home/Works/Works";
import Connect from "../../components/home/Connect/Connect";

const FrontPage = () => {
  return (
    <main>
      <Intro />
      <Works />
      <Connect />
    </main>
  );
};

export default FrontPage;
