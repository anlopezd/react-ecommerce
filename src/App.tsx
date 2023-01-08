import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ProductProvider } from "./context/ProductsProvider";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
