export interface ProductT {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingT;
  title: string;
  quantity: number;
  size?: string;
}

interface RatingT {
  rate: number;
  count: number;
}

export interface ItemAddedPopUpT {
  product: ProductT;
  quantity: number;
  show: boolean;
  closePopUp: () => void;
}

export interface ContextT {
  cart: ProductT[];
  dispatch: (action: ActionCart) => void;
}

export interface CartProviderT {
  children: JSX.Element;
}

export type ActionCart =
  | { type: "add"; payload: ProductT }
  | { type: "remove"; payload: number }
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "clear" };
