import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
const TodoReducer = createSlice({
  name: "todo",
  initialState,

  //ACTIONS
  reducers: {
    addItem: (state, action) => {
      let { id, name } = action.payload;
      state.todoList.push({ id, name, completed: false });
    },
    deleteItem: (state, action) => {
      let updatedTodo = state.todoList.filter((e) => e.id != action.payload);
      state.todoList = updatedTodo;
    },
  },
});

export const { addItem, updateItem, deleteItem } = TodoReducer.actions;

export default TodoReducer.reducer;
