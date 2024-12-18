import type { CartItem } from "@/validations/cartItemValidation";
import { sumOfQuantitiesAndSumOfCosts } from "./sumOfQuantitiesAndSumOfCosts";
import { useOrderStore } from "@/stores/useOrderStore";
import type { OrderProduct } from "@/models/OrderProduct";
import type { OrderModel } from "@/models/orderModel";

interface QuantityAdjustmentReturn {
  carts: CartItem[];
  sumOfCosts: number;
  sumOfQuantities: number;
}

export const quantityAdjustmentOrRemoval = (
  carts: CartItem[],
  customerId: string
): QuantityAdjustmentReturn => {
  const orderStore = useOrderStore();
  //----> Update the quantities and total-cost.
  const { sumOfCosts, sumOfQuantities } = sumOfQuantitiesAndSumOfCosts(carts);
  orderStore.totalCostAndQuantities(carts); //----> Adjust the totalPrice and quantities.

  console.log("Quantity is not zero", carts);

  console.log("There are still items in cart", { carts });
  //----> Reflect the change in the order.
  const orderCartTemp: OrderProduct = { customerId, cartItems: carts };
  orderStore.editOrder(orderCartTemp as OrderModel); //----> Replace with new order.

  return { carts, sumOfCosts, sumOfQuantities };
};
