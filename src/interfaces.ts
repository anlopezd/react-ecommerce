export interface ProductT {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingT;
  title: string;
  quantity?: number;
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
