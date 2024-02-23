import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    val: 0,
    newVal: 0,
  },
  reducers: {
    increment: (state) => {
      state.val += 1;
    },
    decrement: (state) => {
      state.val -= 1;
    },
    add: (state, action) => {
      console.log(state, 'state');
      console.log(action , 'payload');
      state.newVal += action.payload;
    },
  },
});

export const { increment, decrement, add } = CounterSlice.actions;
export default CounterSlice.reducer;
