import * as type from "../types";

const initialState = {
  foods: [],
};

export default function foods(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_FOOD:
      return {
        ...state,
        foods: action.payload,
      };
    default:
      return state;
  }
}
