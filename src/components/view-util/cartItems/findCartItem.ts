import type { CartItem } from "@/validations/cartItemValidation";
import type { Product } from "@/validations/productValidation";

export const findCartItem = (cartItems: CartItem[], product: Product) => {
  return cartItems?.find((cartItem) => cartItem.productId === product?.id);
};
