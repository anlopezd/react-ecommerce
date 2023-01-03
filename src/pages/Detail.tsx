import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/Products";
import { ProductT } from "../interfaces";
import { useState } from "react";
import ItemAdded from "../components/popups/ItemAdded";
import { CartContext } from "../context/Cart";

interface ProductInterface {
  size: string;
  quantity: number;
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const Detail = () => {
  const [product, setProduct] = useState<ProductInterface>({
    size: sizes[0],
    quantity: 0,
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const products = useContext(ProductContext);
  const params = useParams();

  const currentProduct: ProductT | undefined = products.find(
    (product) => product.id == params.id
  );

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [products]);

  const { dispatch, cart } = useContext(CartContext);

  const addToCart = () => {
    if (currentProduct && cart.find((item) => item.id === currentProduct.id))
      return;
    if (product.quantity === 0) return;

    dispatch({
      type: "add",
      payload: {
        ...currentProduct,
        quantity: product.quantity,
        size: product.size,
      },
    });

    setShowPopUp(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen pt-20 w-4/5 mx-auto flex-col flex lg:flex-row gap-4 justify-between">
      <ItemAdded
        product={currentProduct}
        quantity={product.quantity}
        show={showPopUp}
        closePopUp={() => setShowPopUp(false)}
      />

      <div className="lg:w-3/5 w-full flex gap-10 items-center lg:items-start flex-col lg:flex-row">
        <div className="border-2 flex items-center justify-center w-40 h-56 p-2">
          <img
            src={currentProduct?.image}
            className="object-contain"
            alt="product image"
          />
        </div>

        <div className="border-2 hidden lg:block w-[500px] h-4/5 p-16">
          <img
            src={currentProduct?.image}
            className="object-contain w-full h-full"
            alt="product image"
          />
        </div>
      </div>

      <div className="lg:w-2/5 w-full space-y-6">
        <div>
          <h2 className="text-3xl font-semibold">{currentProduct?.title}</h2>
          <p className="text-2xl  font-semibold">${currentProduct?.price}</p>
          <p className=" text-gray-400 ">{currentProduct?.description}</p>
        </div>

        <div className=" space-y-2">
          <p className="text-xl text-black font-semibold">Size:</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setProduct((prev) => ({ ...prev, size }))}
                className={`w-12 py-1 border ${
                  product.size === size ? "border-black" : ""
                }  hover:border-black`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-2">
          <div className="flex">
            <button
              onClick={() =>
                setProduct((prev) => ({
                  ...prev,
                  quantity: Math.max(0, prev.quantity - 1),
                }))
              }
              className="border w-20 h-10"
            >
              -
            </button>
            <span className="border w-20 h-10 grid place-items-center">
              {product.quantity}
            </span>
            <button
              onClick={() =>
                setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }))
              }
              className="border w-20 h-10"
            >
              +
            </button>
          </div>
          <button
            onClick={addToCart}
            className="lg:w-full w-60 bg-black px-3 py-1 text-white"
          >
            Add to Cart
          </button>
        </div>

        <ul className="pb-4">
          <li className="text-lg list-disc ml-5">
            Availability:{" "}
            <span className="text-gray-500 text-lg">Available</span>
          </li>
          <li className="text-lg list-disc ml-5">
            Category:{" "}
            <span className="text-gray-500 text-lg">
              {currentProduct?.category}
            </span>
          </li>
          <li className="text-lg list-disc ml-5">
            Rating:{" "}
            <span className="text-gray-500 text-lg">
              {currentProduct?.rating.count}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
