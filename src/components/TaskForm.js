import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todo.actions";

export const TaskForm = ({ setAllTasks }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(addTodo({ id: uuidv4(), value: task, done: false }));
    //setAllTasks((tasks) => [...tasks, { id: uuidv4(), value: task, done: false }]);
    setTask("");
  };
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-input edit"
        name="createTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-button edit" onClick={handleSave}>
        Save Task
      </button>
    </div>
  );
};
