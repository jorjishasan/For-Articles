// UserContext.js
import { createContext } from "react";

const StatusContext = createContext({
  status: "producing bugs",
  setStatus: () => {},
});

export default StatusContext;
