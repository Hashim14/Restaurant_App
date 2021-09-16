import * as type from "../types";

export function getFood(foods: any) {
  return {
    type: type.GET_FOOD,
    payload: foods,
  };
}
