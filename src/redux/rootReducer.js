import { combineReducers } from "redux";

import { TodoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export default rootReducer;
