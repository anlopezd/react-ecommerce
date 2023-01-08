import { ActionCart, ProductT } from "../interfaces";

export const cartReducer = (
  state: ProductT[],
  action: ActionCart
): ProductT[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload as ProductT];
    case "remove":
      return state.filter(
        (cartItem: ProductT) => cartItem.id !== action.payload
      );

    case "increment":
      return state.map((cartItem: ProductT) =>
        cartItem.id === action.payload
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    case "decrement":
      return state.map((cartItem: ProductT) =>
        cartItem.id === action.payload
          ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
          : cartItem
      );

    case "clear":
      return [];

    default:
      break;
  }

  return state;
};
