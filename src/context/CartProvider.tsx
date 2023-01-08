import { createContext, useReducer } from "react";
import { CartProviderT, ContextT } from "../interfaces";
import {  ProductT } from "../interfaces";
import { cartReducer } from "./CartReducer";

export const CartContext = createContext<ContextT>({} as ContextT);
const initialState: ProductT[] = [];

export const CartProvider = ({ children }: CartProviderT) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
