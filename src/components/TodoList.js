import { useState } from "react";
import { ACTIONS } from "./TodoRedux";
import "../css/todoRedux.css";

export const TodoList = ({ todos, dispatch }) => {
  const [showComplete, setShowComplete] = useState(false);

  const handleToggle = (e) => {
    const {
      target: { checked },
    } = e;
    setShowComplete(checked);
  };

  return (
    <div className="tasks-list-container">
      <div className="tasks-list">
        <input type="checkbox" onChange={handleToggle} />
        <label>Show Completed</label>
        {todos
          .filter((todo) => todo.completed === showComplete)
          .map((todo) => {
            return (
              <div className="task-container" key={todo.id}>
                <div className="task-term-container">
                  <input
                    type="checkbox"
                    onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { todo: todo } })}
                  />
                  <label>{todo.value}</label>
                </div>
                <div className="buttons-container">
                  <button className="delete-button">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
