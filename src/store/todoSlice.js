import { createSlice } from "@reduxjs/toolkit";
const initialState = { todos: [] };
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      const newState = { todos: [] };
      newState.todos = state.todos.filter((todo) => todo.id !== action.payload);
      return newState;
    },
    updateStatus(state, action) {
      const newState = { todos: [] };
      newState.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return true;
      });
    },
    editTodo(state, action) {
      const newState = { todos: [] };
      newState.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload.id) {
          todo.data = action.payload.data;
          todo.category = action.payload.category;
          todo.completed = action.payload.completed;
        }
        return true;
      });
    },
    saveAll(state, action) {
      let todo = action.payload.values();
      for (let x in action.payload) {
        state.todos.push(action.payload[x]);
      }
      return state;
    },
  },
});

export const { addTodo, deleteTodo, updateStatus, editTodo, saveAll } =
  todoSlice.actions;
export default todoSlice.reducer;
