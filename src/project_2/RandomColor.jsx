import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState(" ");
  const generateRandomColor = () => {
    const array = "123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += array[Math.floor(Math.random() * array.length)];
    }
    return setColor(color);
  };
  console.log(color);
  return (
    <div className="w-120 mx-auto h-full mt-10 border px-5 py-2">
      <button
        onClick={generateRandomColor}
        className="bg-gradient-to-r from-red-500 to-white text-sm px-2 py-1 my-5 rounded text-black cursor-pointer"
      >
        Generate Random Color
      </button>
      <div
        className={`w-full h-full py-5 border ${
          color === " " ? "text-black" : "text-white border-0"
        }`}
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center text-sm">
          {color === " " ? "generate color" : color}
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;
