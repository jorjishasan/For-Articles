import React from "react";
import ReactDOM from "react-dom/client";

import RandomImage from "./components/RandomImage";
import RandomImageClass from "./components/RandomImageClass";
const App = () => {
  return <RandomImageClass />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
