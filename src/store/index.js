import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  console.log('Action Type:', action.type);

  if (action.type === "inc") {
    return { counter: state.counter + 5 };
  } else if (action.type === "dec") {
    return { counter: state.counter - 5 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

