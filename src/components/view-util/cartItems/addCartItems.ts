import type { CartItem } from "@/validations/cartItemValidation";
import { modifiedCartItemQuantity } from "./modifiedCartItem";
import { createCartItem } from "./CreateCartItem";
import type { Product } from "@/validations/productValidation";
import type { OrderProduct } from "@/models/OrderProduct";
import { useOrderStore } from "@/stores/useOrderStore";

export function addCartItems(
  customerId: string,
  product: Product,
  cart: CartItem,
  carts: CartItem[]
) {
  const orderStore = useOrderStore();
  if (cart?.quantity > 0) {
    console.log("In the subsequent cart!!!");
    //----> Modified the cart-item quantity, for existing cart by one.
    const tempCartItems = modifiedCartItemQuantity(carts, cart);
    console.log({ tempCartItems });
    carts = [...tempCartItems];
    console.log("In subsequent-add ", { cart });
  } else {
    console.log("In the first cart!!!");
    //----> Cart-item does not exist, then create it.
    cart = createCartItem(product);
    carts = [...carts, cart];
    console.log("In first-add ", { carts });
  }
  const tempOrder: OrderProduct = {
    customerId,
    cartItems: carts,
  };
  console.log("tempOrder : ", tempOrder);
  //orderStore.editOrder(tempOrder);
  orderStore.totalCostAndQuantities(tempOrder?.cartItems);

  return { carts, tempOrder };
}
