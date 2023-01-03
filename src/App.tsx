import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ProductProvider } from "./context/Products";
import Cart from "./pages/Cart";
import { useReducer } from "react";
import { ProductT } from "./interfaces";
import { CartProvider } from "./context/Cart";
import Header from "./components/Header";

const cartReducer = (
  state: ProductT[],
  action: {
    type: "add" | "remove" | "increment" | "decrement";
    payload: ProductT | number;
  }
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
          ? { ...cartItem, quantity: cartItem.quantity ?? 0 + 1 }
          : cartItem
      );
    case "decrement":
      return state.map((cartItem: ProductT) =>
        cartItem.id === action.payload
          ? { ...cartItem, quantity: Math.max(0, cartItem.quantity ?? 0 - 1) }
          : cartItem
      );

    default:
      break;
  }

  return state;
};

const initialState: ProductT[] = [];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <BrowserRouter>
      <CartProvider cart={cart} dispatch={dispatch}>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
