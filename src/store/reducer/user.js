import { SET_TEST } from "../action_type";

const initialState = {
  test_variable: "redux variable :)",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST : {
      state.test_variable = action.payload;
      break;
    }
    default:
      return state;
  }
}
