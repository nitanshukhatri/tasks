import React, { useReducer, useRef } from "react";
import { TodoList } from "./TodoList";

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload.todo];
    case ACTIONS.TOGGLE_TODO:
      const list = state.map((t) => {
        if (t.id === action.payload.todo.id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
      console.log(list);
      return list;
    default:
      return [];
  }
}

function newTodo(name) {
  return { id: new Date(), value: name, completed: false };
}

export const ToDoRedux = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const name = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todo = newTodo(name.current.value);
    if (name.current.value) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
    }
    name.current.value = "";
  };

  return (
    <div className="app">
      <div className="add_todo_form">
        <form onSubmit={handleOnSubmit}>
          <input className="input" ref={name} type="text" />
          <button className="add-button" type="submit">
            Save
          </button>
        </form>
      </div>
      <TodoList dispatch={dispatch} todos={todos} />
    </div>
  );
};
