import { useContext } from "react";
import StatusContext from "../contexts/StatusContext";

const Body = () => {
  const { status, setStatus } = useContext(StatusContext);
  return (
    <main className="h-[40vh] bg-green-100 flex items-center justify-center">
      <div className="text-center">
        <input
          type="text"
          placeholder="Type a status.."
          className="border border-gray-500 rounded-md p-2"
          onChange={(e) => setStatus(e.target.value)}
        />
        <p className="mt-2">Doing what ?: {status}</p>
      </div>
    </main>
  );
};

export default Body;
