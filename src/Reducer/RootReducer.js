import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import FetchAPIReducer from "./FetchAPIReducer";
import TodoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  fetchAPI: FetchAPIReducer,
  todo: TodoReducer,
});

export default rootReducer;
