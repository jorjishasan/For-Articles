import React from "react";
import ReactDOM from "react-dom/client";

//In styled-component
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: inherit;
  background-color: #fff;
  border: 1px solid #1f1f1f;
  border-radius: 7px;
  font-size: 32px;
  cursor: pointer;
  transition-duration: 0.3s;
  padding: 20px 48px;
  &:hover {
    background-color: #9747ff;
    color: #fff;
    border-color: #9747ff;
  }
`;

const InStyledComponent = () => {
  return <StyledButton>Button</StyledButton>;
};

// In materialUI
import { Button } from "@mui/material";

const InMaterialUi = () => {
  return (
    <Button
      sx={{
        fontFamily: "inherit",
        backgroundColor: "#fff",
        color: "#1f1f1f",
        border: "1px solid #1f1f1f",
        borderRadius: "7px",
        fontSize: "32px",
        cursor: "pointer",
        transitionDuration: "0.3s",
        padding: "20px 48px",
        "&:hover": {
          backgroundColor: "#9747ff",
          color: "#fff",
          borderColor: "#9747ff",
        },
      }}
    >
      Button
    </Button>
  );
};

// In Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const InBootstrap = () => {
  return <button className="btn btn-custom">Button</button>;
};

//In Tailwind
const InTailwind = () => {
  return (
    <button className="text-[#1f1f1f] px-[48px] py-[20px] text-[32px] cursor-pointer border rounded-[7px] transition-colors duration-300 hover:bg-[#9747ff] hover:text-[#fff]">
      Button
    </button>
  );
};

//Render Process
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<InTailwind />);
