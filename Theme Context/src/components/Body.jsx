import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Body = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <div className="h-[40vh] flex items-center justify-center">
      <button onClick={toggleTheme} className="btn btn-primary">
        {isLight ? "Dark 🔄" : "Light 🔄"}
      </button>
    </div>
  );
};

export default Body;
