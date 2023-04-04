import { counterActionConstant } from "../constants/action-constans";

export const increment = (number) => {
  return {
    type: counterActionConstant.INCREMENT,
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: counterActionConstant.DECREMENT,
    payload: number,
  };
};
