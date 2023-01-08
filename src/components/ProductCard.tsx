import { truncate } from "../helpers/helpers";
import { ProductT } from "../interfaces";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: ProductT }) => {
  return (
    <article className="border h-80 w-56 py-2 px-4 flex flex-col justify-between">
      <div>
        <div className="h-40">
          <img
            src={product.image}
            alt={product.title + "image"}
            className="w-full h-32 object-contain object-top"
          />
        </div>
        <div>
          <p className="text-gray-500">{truncate(product.title)}</p>
          <p className="text-blakc">${product.price}</p>
        </div>
      </div>

      <div className="flex w-full justify-end mt-auto">
        <Link
          to={`product/${product.id}`}
          className="bg-black text-white px-4 py-2"
        >
          Buy
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
