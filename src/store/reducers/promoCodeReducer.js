import { PROMO_CODE } from "../actions/types";

const initialState = {
  value: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROMO_CODE:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};

export default reducer;
