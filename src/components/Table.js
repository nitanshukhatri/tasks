import { useDispatch } from "react-redux";
import { EditTodoForm } from "./EditTodoForm";
import { editTodo as editTodoAction, toggleComplete } from "../redux/todo/todo.actions";

export const Table = ({
  allTasks,
  showCompleted,
  toggleCheckBox,
  editTodo,
  editTask,
  deleteTodo,
  firstContentIndex,
  lastContentIndex,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {allTasks
        ?.filter((task) => task.done === showCompleted)
        .slice(firstContentIndex, lastContentIndex)
        .map((val) =>
          val.isEditing ? (
            <EditTodoForm editTodo={editTask} task={val} />
          ) : (
            <div className="Todo" key={val.id}>
              <div className={`${val.done ? "completed" : ""}`}>
                {/* <input type={"checkbox"} checked={val.done} onChange={() => toggleCheckBox(val)} /> */}
                <input type={"checkbox"} checked={val.done} onChange={() => dispatch(toggleComplete(val))} />
                {val.value}
              </div>
              <div>
                {/* <button onClick={() => editTodo(val)}>Edit </button>
                <button onClick={() => deleteTodo(val)}> Delete </button> */}
                <button onClick={() => dispatch(editTodoAction(val))}>Edit</button>
                {/* <button onClick={() => deleteTodo(val)}> Delete </button> */}
              </div>
            </div>
          )
        )}
    </>
  );
};
