import { todoActionConstant } from "../constants/action-constans";

const initialState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case todoActionConstant.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };

    case todoActionConstant.UPDATE:
      const index = state.todos.find(
        (todoItem) => todoItem.id === action.payload.todoItem.id
      );

      state.todos[index] = action.payload;

      return {
        ...state,
        loading: false,
      };

    case todoActionConstant.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
