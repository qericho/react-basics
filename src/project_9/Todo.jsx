import Input from "./components/input";
import TaskList from "./components/Tasklist";
import { TodoProvider } from "./context/context";

const Todo = () => {
  return (
    <div className="w-120 h-full mx-auto p-4 border my-20">
      <TodoProvider>
        <Input />
        <TaskList />
      </TodoProvider>
    </div>
  );
};

export default Todo;
