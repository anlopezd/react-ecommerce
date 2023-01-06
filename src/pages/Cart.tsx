import { useContext, useState } from "react";
import BuyCart from "../components/popups/BuyCart";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [ showPopUp, setShowPopUp ] = useState(false)
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false)

  const increment = (id: number) => {
    dispatch({
      type: "increment",
      payload: id,
    });
  };

  const decrement = (id: number) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
  };

  const remove = (id: number) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

 const startSuccessMessage = () => {
    setShowSuccessMessage(true)
    setTimeout(()=> setShowSuccessMessage(false), 2000)
 }

  return (
    <>
    {showSuccessMessage ? (
      <div className="bg-black rounded text-white fixed top-5 px-3 py-1 z-50 left-1/2 transform translate-x-[-50%]">
        Purchase made successfully!
    </div>
    ) : null}
    <BuyCart setSuccessMessage={startSuccessMessage} show={showPopUp} closePopUp={()=> setShowPopUp(false)} />
    


      <div className="w-full space-y-2">
        <div className="w-full grid grid-cols-5 px-10 border-b py-2">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {cart.map((item) => (
          <div
            key={item.id}
            className="w-full grid grid-cols-5 items-center px-10 border-b"
          >
            <div className="flex gap-x-2">
              <img
                src={item.image}
                className="h-20 w-14 object-contain"
                alt={`${item.title} image`}
              />
              <div className="sm:block hidden">
                <p className="truncate">{item.title.slice(0, 30)}</p>
                <p>Size: {item.size}</p>
              </div>
            </div>

            <p>${item.price}</p>
            <div className="flex">
              <button
                className="border w-20 h-10"
                onClick={() => decrement(item.id)}
              >
                -
              </button>
              <p className="border w-20 h-10 flex items-center justify-center">
                {item.quantity}
              </p>
              <button
                className="border w-20 h-10"
                onClick={() => increment(item.id)}
              >
                +
              </button>
            </div>
            <p>${item?.quantity ?? 0 * item.price}</p>

            <button
              onClick={() => remove(item.id)}
              className="bg-black px-2 py-2 text-white w-24 sm:w-28"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="grid sm:grid-cols-5 grid-cols-4">
          <div className="hidden sm:block"></div>
          <div></div>
          <div></div>
          <div></div>
          <button onClick={()=> setShowPopUp(true)} className="bg-black px-2 py-2 text-white sm:w-28 mr-4 sm:mr-0">Buy</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
