import { useState } from "react";
import { useTodo } from "../context/context";

const TaskList = () => {
  const { items, removeTodo, toggleTodo, updateTodo } = useTodo();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  return (
    <div className="w-full p-4">
      <ul className="space-y-2">
        {items.length === 0 ? (
          <p className="text-gray-500">No tasks yet...</p>
        ) : (
          items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border p-2"
            >
              {editId === item.id ? (
                <input
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="border p-1 flex-1"
                />
              ) : (
                <p
                  className={`flex-1 ${
                    item.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.text}
                </p>
              )}

              <div className="space-x-2">
                {editId === item.id ? (
                  <button
                    onClick={() => {
                      updateTodo(item.id, newText);
                      setEditId(null);
                    }}
                    className="px-2 py-1 bg-blue-500 text-white"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => removeTodo(item.id)}
                      className="px-2 py-1 bg-red-500 text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => toggleTodo(item.id)}
                      className="px-2 py-1 bg-green-500 text-white"
                    >
                      {item.completed ? "Undo" : "Done"}
                    </button>
                    <button
                      onClick={() => {
                        setEditId(item.id);
                        setNewText(item.text);
                      }}
                      className="px-2 py-1 bg-yellow-500 text-white"
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
