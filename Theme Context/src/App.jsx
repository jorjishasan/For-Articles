import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { isLight } = useContext(ThemeContext);

  const [isLightMode, setIsLightMode] = useState(isLight);

  return (
    <ThemeContext.Provider
      value={{ isLight: isLightMode, setIsLight: setIsLightMode }}
    >
      <div className="h-screen flex flex-col divide-y divide-slate-300">
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
