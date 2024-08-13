import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="h-[30vh] flex items-center justify-center">
      <p>{isLight ? "background: white;" : "background: midnight black; "}</p>
    </div>
  );
};

export default Header;
