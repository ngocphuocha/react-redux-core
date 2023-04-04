import { todoActionConstant } from "../constants/action-constans";

export const addTodoItem = (todoItem) => (dispatch) => {
  dispatch({ type: "ADD_REQUEST" });
  setTimeout(() => {
    dispatch({ type: todoActionConstant.ADD, payload: todoItem });
  }, 1000);
};

export const updateTodoItem = (todoItem) => (dispatch) => {
  dispatch({ type: "ADD_REQUEST" });
  setTimeout(() => {
    dispatch({ type: todoActionConstant.UPDATE, payload: todoItem });
  });
};

export const deleteTotoItem = (todoId) => {
  return {
    type: todoActionConstant.DELETE,
    payload: todoId,
  };
};
