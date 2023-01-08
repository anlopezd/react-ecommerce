import { createContext, useState, useEffect } from 'react'
import { ProductT } from '../interfaces';

export const ProductContext = createContext<ProductT[]>([])

const API_URL: string = "https://fakestoreapi.com/products";

export const ProductProvider = ({ children }: { children: React.ReactNode}) => {
  const [products, setProducts] = useState<ProductT[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(API_URL);
      const data: ProductT[] = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}