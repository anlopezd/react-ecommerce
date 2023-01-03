import { useEffect, useState, useContext } from "react";
import { ProductT } from "../interfaces";
import ProductCard from "./ProductCard";
import { ProductContext } from '../context/Products';


const Clothes = () => {
  const [category, setCategory] = useState<string>("");

  const products = useContext(ProductContext)

  const categories: string[] = [
    ...new Set(products.map((product) => product.category)),
  ];
  const clothesFiltered: ProductT[] = products.filter((product) =>
    product.category.includes(category)
  );

  return (
    <section id="shop" className="w-full min-h-screen">
      <h2 className="text-3xl font-semibold text-center">Our newest designs</h2>

    <div className="w-full flex justify-end">

      <select title="categories" className="cursor-pointer mr-40 border border-black" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option className="cursor-pointer" value="">All</option>
        {categories.map((category, i) => (
          <option className="cursor-pointer" key={i} value={category}>
            {category}
          </option>
        ))}
      </select>
        </div>

      <div className="flex gap-10 flex-wrap justify-center mt-10">
        {clothesFiltered &&
          clothesFiltered.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
};

export default Clothes;
