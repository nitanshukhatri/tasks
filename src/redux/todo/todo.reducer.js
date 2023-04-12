import { v1 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  list: [],
  done: false,
};
export const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      const upList = [...state.list];
      const updatedList = upList.map((todo) =>
        todo.id === action.todo.id ? { ...todo, value: action.todo.value, isEditing: !todo.isEditing } : todo
      );
      return { ...state, list: updatedList };
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.todo],
      };
    case "EDIT_TODO":
      const cloneList = [...state.list];

      const list = cloneList.map((todo) => (todo.id === action.todo.id ? { ...todo, isEditing: true } : todo));

      return {
        ...state,
        list: list,
      };
    case "TOGGLE_COMPLETE":
      const newList = [...state.list];
      const nl = newList.map((t) => (t.value === action.todo.value ? { ...t, done: !t.done } : t));
      return {
        ...state,
        list: nl,
      };
    case "REMOVE_TODO":
      const newList2 = state.list.filter((i) => {
        return i.id !== action.id;
      });

      return { ...state, list: newList2 };
    case "TOGGLE_SHOW_COMPLETED":
      return { ...state, showCompleted: !state.showCompleted };
    default:
      return state;
  }
};
