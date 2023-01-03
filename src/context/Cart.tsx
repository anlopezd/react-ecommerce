import { createContext } from 'react';
import { ProductT } from '../interfaces';


export const CartContext = createContext<ContextT>(null)

interface ContextT {
    cart: ProductT[];
    dispatch: (action: {type: 'add' |'increment' | 'decrement' | 'remove', payload: ProductT | number}) => void
}


interface CartProviderT {
    children: React.ReactNode;
    cart: ProductT[];
    dispatch: ()=> void
}

export const CartProvider = ({ children, cart, dispatch }: CartProviderT) => {
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
