import type { OrderProduct } from "@/models/OrderProduct";
import { useOrderStore } from "@/stores/useOrderStore";
import type { CartItem } from "@/validations/cartItemValidation";
import type { StoreGeneric } from "pinia";

export function cartAndCheckoutMaker(customerId: string, carts: CartItem[]) {
  const orderStore = useOrderStore();

  orderStore.clearOrder();

  const tempOrder: OrderProduct = {
    customerId,
    cartItems: carts,
  };
  console.log("tempOrder : ", tempOrder);
  orderStore.addOrder(tempOrder);
  orderStore.totalCostAndQuantities(tempOrder?.cartItems);
}
