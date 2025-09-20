import { useState } from "react";
import { useTodo } from "../context/context";

const Input = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter task..."
        className="pl-5 border outline-0 border-r-0 flex-1"
      />
      <button type="submit" className="bg-red-500 text-white px-5">
        Add
      </button>
    </form>
  );
};

export default Input;
