import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="h-[30vh] flex items-center justify-center">
      <p>
        {isLight ? "background: ivory white;" : "background: midnight black;"}
      </p>
    </div>
  );
};

export default Footer;
