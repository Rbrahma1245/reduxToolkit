import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/CounterReducer";
import FetchAPIReducer from "../Reducer/FetchAPIReducer";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    fetchAPI: FetchAPIReducer,
  },

});

export default store;
