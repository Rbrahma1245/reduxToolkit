import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/CounterReducer";

const store = configureStore({
    reducer: {
        counter : CounterReducer
    }
});

export default store;
