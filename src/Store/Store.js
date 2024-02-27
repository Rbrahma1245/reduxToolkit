import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/CounterReducer";
import FetchAPIReducer from "../Reducer/FetchAPIReducer";
import TodoReducer from "../Reducer/TodoReducer";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    fetchAPI: FetchAPIReducer,
    todo: TodoReducer,
  },
});

export default store;
