import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Add
  const addTodo = (text) => {
    setItems([...items, { id: Date.now(), text, completed: false }]);
  };

  // Delete
  const removeTodo = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle done
  const toggleTodo = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Update
  const updateTodo = (id, newText) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <TodoContext.Provider
      value={{ items, addTodo, removeTodo, toggleTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
