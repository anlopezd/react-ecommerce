import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";

interface Props {
  show: boolean;
  closePopUp: () => void;
  setSuccessMessage: () => void
}

const BuyCart = ({ show, closePopUp, setSuccessMessage }: Props) => {
  const { cart, dispatch } = useContext(CartContext);

  const buyCart = () => {
    dispatch({type: 'clear', payload: []})
    closePopUp()
    setSuccessMessage()
}

  if (!show) {
    return null;
  }

  return (
    <div
      onClick={closePopUp}
      className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white flex flex-col justify-between px-10 py-2 relative sm:w-1/2 w-11/12 min-h-[50vh]"
      >
        <div
          onClick={closePopUp}
          className="absolute right-5 top-2 text-black text-2xl cursor-pointer"
        >
          x
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center py-2">
            Are you sure to buy {cart.length > 1 ? "these" : "this"}{" "}
            {cart.length > 1 ? cart.length : ""} product
            {cart.length > 1 ? "s" : ""}?
          </h2>

          <ul className="list-item p-6">
            {cart.map((product) => (
              <li className="list-disc" key={product.id}>
                {product.title}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end gap-x-2">
          <button
            onClick={closePopUp}
            className="bg-white text-black sm:px-3 sm:py-3 p-1.5 border border-black"
          >
            Cancel
          </button>
          <button onClick={buyCart} className="bg-black text-white sm:px-5 sm:py-3 p-1.5 border border-black">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCart;
