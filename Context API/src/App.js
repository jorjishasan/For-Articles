import React, { StrictMode, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import StatusContext from "./contexts/StatusContext";
const App = () => {
  const { status } = useContext(StatusContext);
  const [newStatus, setNewStatus] = useState(status);

  return (
    <StatusContext.Provider
      value={{ status: newStatus, setStatus: setNewStatus }}
    >
      <div className="h-screen flex flex-col">
        <Header />
        <Body />
        <Footer />
      </div>
    </StatusContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
