import { applyMiddleware, createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
export default function configureStore() {
  const store = createStore(rootReducer, undefined, composeEnhancers);
  return store;
}
