import { useRecoilState } from "recoil";

import { cartState } from "./cartAtom";

export const useCartState = () => {
  const [cartProducts, setCartProducts] = useRecoilState(cartState);

  return { cartProducts, setCartProducts };
};
