import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { OrderProduct } from "../../models/OrderProduct";
import { orderService } from "../../APIRoutes/orderRoute";
import type { OrderModel } from "@/models/orderModel";
import { useOrderStore } from "@/stores/useOrderStore";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  const orderState = useOrderStore();

  return useMutation<OrderProduct, Error, OrderProduct, OrderProduct>({
    // mutationFn: (order) => axios.post(`${baseUrl}/orders`, order),
    mutationFn: (order) => orderService.create(order),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      orderState.addOrder(data);
    },
  });
};
