import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/CounterReducer";
import { thunk } from "redux-thunk";
import FetchAPIReducer from "../Reducer/FetchAPIReducer";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    fetchAPI: FetchAPIReducer,
  },

});

export default store;
