import type { OrderModel } from "@/models/orderModel";
import { onMounted, ref } from "vue";
import { useGetCustomerId } from "../customers/useGetCustomerId";

export const useGetProfileOrders = (userId: string, orders: OrderModel[]) => {
  const customerOrders = ref<OrderModel[]>([]);

  const { customerId } = useGetCustomerId(userId);

  onMounted(() => {
    const ordersByCustomer = orders?.filter(
      (order) => order.customerId === customerId.value
    );

    customerOrders.value = ordersByCustomer;
  });

  return { customerOrders, customerId };
};

function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}

function setCustomerOrders(ordersByCustomer: OrderModel[]) {
  throw new Error("Function not implemented.");
}
