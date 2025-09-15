import { useState } from "react";
import { images } from "./assets/data";
const ImageSlider = () => {
  const [curIndex, setCurIndex] = useState(0);
  const nextImg = () => {
    setCurIndex(curIndex === images.length - 1 ? 0 : curIndex + 1);
  };
  const prevImg = () => {
    setCurIndex(curIndex === 0 ? images.length - 1 : curIndex - 1);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${images[curIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-150 h-100 mx-auto my-20 border flex items-center overflow-hidden"
    >
      <div className="w-full flex items-center justify-between">
        <button
          onClick={prevImg}
          className="size-10 text-xs bg-black text-white rounded-full cursor-pointer"
        >
          Left
        </button>
        <button
          onClick={nextImg}
          className="size-10 text-xs bg-black text-white rounded-full cursor-pointer"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
