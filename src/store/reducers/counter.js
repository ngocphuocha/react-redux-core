import { counterActionConstant } from "../constants/action-constans";
const initCouter = 0;
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterActionConstant.INCREMENT:
      return state + action.payload;

    case counterActionConstant.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
