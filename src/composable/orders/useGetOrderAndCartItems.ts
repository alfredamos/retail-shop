import type { OrderProduct } from "@/models/OrderProduct";
import type { CartItem } from "@/validations/cartItemValidation";
import { onMounted, ref } from "vue";

export function useGetOrderAndCartItems(customerId: string, orders: OrderProduct[]){
  const order = ref<OrderProduct>({customerId: "", cartItems: []});
  const cartItems = ref<CartItem[]>([]);

  onMounted(()=> {
    const custOrder = orders?.find(ord => ord.customerId === customerId);
    if (custOrder){
      order.value = { ...custOrder };
      cartItems.value = [...custOrder?.cartItems];
    }
  });

  return {cartItems, order}
}