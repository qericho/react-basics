import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`w-120 h-50 my-20 border mx-auto relative flex flex-col items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <button
        className="absolute top-0 left-0 px-2 py-1 bg-black text-white text-xs cursor-pointer"
        onClick={toggleTheme}
      >
        Switch to {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-center text-2xl">{darkMode ? "DARK" : "LIGHT"}</h1>
    </div>
  );
};

export default ThemeToggle;
