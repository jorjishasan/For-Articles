import { useEffect, useState } from "react";
import { UNSPLASH_API, randomNum } from "../utils";

const RandomImage = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, [count]);

  const getData = async () => {
    const response = await fetch(UNSPLASH_API);
    const data = await response.json();
    setImgUrl(data[randomNum(0, 10)]?.urls?.small);
  };

  return (
    <div className="container">
      <div className="count">
        <h1>Total Renders →</h1>
        <h2>{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Render ✦
        </button>
      </div>
      <img src={imgUrl} />
    </div>
  );
};

export default RandomImage;
