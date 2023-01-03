import { ItemAddedPopUpT } from "../../interfaces";
import { Link } from "react-router-dom";
const ItemAdded = ({
  product,
  quantity,
  show,
  closePopUp,
}: ItemAddedPopUpT) => {
  if (!show) {
    return null;
  }
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white px-10 py-2 relative sm:w-1/2 w-11/12">
        <div onClick={closePopUp} className="absolute right-5 top-5">
          x
        </div>
        <div className="border-b w-full">
          <p className="py-2">{quantity} Item{quantity > 1 ? 's' : ''} added</p>
        </div>

        <div className="flex gap-x-10 pt-7">
          <img
            src={product.image}
            className="h-36 w-32 object-contain"
            alt="product image"
          />
          <div className="space-y-2">
            <p className="text-xl">{product.title}</p>
            <div>
              <p className="text-gray-400">Quantity: {quantity} </p>
              <p className="text-gray-400">
                total: ${quantity * product.price}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t flex justify-end gap-x-2 mt-5 pt-6">
          <Link
            to="/"
            className="bg-white text-black sm:px-3 sm:py-3 p-1.5 border border-black"
          >
            Continue shopping
          </Link>
          <Link
            to="/cart"
            className="bg-black text-white sm:px-3 sm:py-3 p-1.5 border border-black"
          >
            Go to Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemAdded;
