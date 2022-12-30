import { SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../constants/actionTypes";

export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return [...payload];
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return payload;
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const CartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return [
        ...state,
        payload
      ];
    case "DELETE_FROM_CART":
      const newState = state.filter(item => item.id !== payload.id);
      return newState;

    default: return state;
  }
}
