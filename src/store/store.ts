import { create } from "zustand";

interface ProductState {
  ProductStates: Record<
    string,
    {
      currentImage: string;
      hover: boolean;
    }
  >;

  setProductImage: (productId: string, image: string) => void;
  setProductHover: (productId: string, hover: boolean) => void;
  initializeProduct: (productId: string, initialImage: string) => void;
}


