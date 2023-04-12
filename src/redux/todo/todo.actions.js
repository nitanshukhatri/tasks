export const updateTodo = (todo) => ({ type: "UPDATE_TODO", todo });
export const addTodo = (todo) => ({ type: "ADD_TODO", todo });
export const editTodo = (todo) => ({ type: "EDIT_TODO", todo });
export const toggleComplete = (todo) => ({ type: "TOGGLE_COMPLETE", todo });
export const removeTodo = (id) => ({ type: "REMOVE_TODO", id });
export const toggleShowCompleted = () => ({
  type: "TOGGLE_SHOW_COMPLETED",
});
