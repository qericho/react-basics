import { useState } from "react";

const StringReverser = () => {
  const [str, setStr] = useState("");
  let [reversedString, setreversedString] = useState("");

  const reverseString = () => {
    let container = "";
    for (let i = str.length - 1; i >= 0; i--) {
      container += str[i];
    }
    setreversedString(container);
    setStr("");
  };

  return (
    <div className="w-120 h-50 mx-auto my-20 border p-2">
      <div className="w-full flex">
        <input
          onChange={(e) => setStr(e.target.value)}
          value={str}
          type="text"
          placeholder="input string to reverse"
          className="w-full h-full py-1 border pl-5 outline-0"
        />
        <button
          className="bg-black text-white text-xs px-2"
          onClick={reverseString}
        >
          confirm
        </button>
      </div>
      <h1 className="text-2xl text-center my-14">
        {reversedString.length === 0
          ? "Enter String to Reverse"
          : reversedString}
      </h1>
    </div>
  );
};

export default StringReverser;
