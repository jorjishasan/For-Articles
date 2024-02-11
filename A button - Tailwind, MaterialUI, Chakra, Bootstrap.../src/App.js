import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
const InTailwind = () => {
  return (
    <div className="container">
      <button className="btn">Button</button>
    </div>
  );
};

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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<InStyledComponent />);
