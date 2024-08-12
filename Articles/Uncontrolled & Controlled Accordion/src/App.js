import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { StrictMode } from "react";
const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <span>{isOpen && children}</span>
    </div>
  );
};

const UncontrolledAccordion = () => {
  return (
    <>
      <AccordionSection title="Button 1">Content 1</AccordionSection>
      <AccordionSection title="Button 2">Content 2</AccordionSection>
      <AccordionSection title="Button 3">Content 3</AccordionSection>
    </>
  );
};

// export default UncontrolledAccordion;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UncontrolledAccordion />
// );

// const AccordionSection = ({ title, children, isActive, onClick }) => {
//   return (
//     <div>
//       <button onClick={onClick}>{title}</button>
//       {isActive && <span>{children}</span>}
//     </div>
//   );
// };

// const ControlledAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <>
//       {["Content 1", "Content 2", "Content 3"].map((content, index) => (
//         <AccordionSection
//           key={index}
//           title={`Button ${index + 1}`}
//           isActive={activeIndex === index}
//           onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//         >
//           {content}
//         </AccordionSection>
//       ))}
//     </>
//   );
// };

export default UncontrolledAccordion;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UncontrolledAccordion />
  </StrictMode>
);
