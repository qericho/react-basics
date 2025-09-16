import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = new Function("return " + input)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-80 mx-auto my-20 border p-4 shadow-lg bg-gray-100">
      {/* Display */}
      <div className="w-full pb-4">
        <input
          type="text"
          value={input}
          disabled
          className="border w-full py-4 px-2 text-right text-xl font-mono bg-white"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {/* First row */}
        <button
          onClick={handleClear}
          className="px-4 py-2 hover:bg-red-500 border cursor-pointer bg-red-400 text-white font-bold rounded"
        >
          C
        </button>
        <button
          onClick={() => handleClick("/")}
          className="px-4 py-2 hover:bg-green-500 border cursor-pointer rounded"
        >
          ÷
        </button>
        <button
          onClick={() => handleClick("*")}
          className="px-4 py-2 hover:bg-green-500 border cursor-pointer rounded"
        >
          ×
        </button>
        <button
          onClick={() => handleClick("-")}
          className="px-4 py-2 hover:bg-green-500 border cursor-pointer rounded"
        >
          −
        </button>

        {/* Number buttons */}
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="px-4 py-2 hover:bg-gray-300 border cursor-pointer rounded bg-white"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleClick("+")}
          className="px-4 py-2 hover:bg-green-500 border cursor-pointer rounded"
        >
          +
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="px-4 py-2 hover:bg-gray-300 border cursor-pointer rounded bg-white"
          >
            {num}
          </button>
        ))}

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="px-4 py-2 hover:bg-gray-300 border cursor-pointer rounded bg-white"
          >
            {num}
          </button>
        ))}

        {/* Last row */}
        <button
          onClick={() => handleClick("0")}
          className="px-4 py-2 hover:bg-gray-300 border cursor-pointer rounded bg-white col-span-2"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="px-4 py-2 hover:bg-gray-300 border cursor-pointer rounded bg-white"
        >
          .
        </button>
        <button
          onClick={handleCalculate}
          className="px-4 py-2 hover:bg-blue-600 border cursor-pointer bg-blue-500 text-white font-bold rounded"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
