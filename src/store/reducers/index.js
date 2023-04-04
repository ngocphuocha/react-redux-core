import { combineReducers } from "redux";

import counterReducer from "./counter";
import todoReducer from "./todoReducer";

const allReducers = combineReducers({
  counterReducer,
  todoReducer,
});

export default allReducers;
