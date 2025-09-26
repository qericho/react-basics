import { useState } from "react";
import useFetch from "./hooks/useFetch";

const RandomQuote = () => {
  const [randomID, setRandomID] = useState(null);
  const { data, loading, error } = useFetch("https://dummyjson.com/quotes");

  const handleRandomID = () => {
    if (data && data.quotes) {
      setRandomID(Math.floor(Math.random() * data.quotes.length));
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.quotes) return <p>No quotes found</p>;
  const quote = randomID !== null ? data.quotes[randomID] : data.quotes[0];

  console.log(randomID);
  return (
    <div className="max-w-3xl mx-auto h-full border border-gray-400 p-10 my-10 relative">
      <h1 className="font-mono absolute top-5 left-5 text-2xl">
        Random Quotes Generator
      </h1>
      {/* Qoutes Container */}
      <div className="py-10">
        <h1 className="font-mono">{quote.quote}</h1>
        <p>
          <i>-{quote.author}</i>
        </p>
      </div>
      <button
        onClick={handleRandomID}
        className="absolute bottom-5 right-5 font-mono text-xs px-10 py-2 bg-green-400 hover:bg-green-600 cursor-pointer hover:scale-110 duration-300"
      >
        Generate Random Quote 👩‍💻
      </button>
    </div>
  );
};

export default RandomQuote;
