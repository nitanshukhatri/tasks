import React, { useState } from "react";
import { updateTodo } from "../redux/todo/todo.actions";
import { useDispatch } from "react-redux";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    //editTodo(value, task);
    dispatch(updateTodo({ value, id: task.id }));
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
