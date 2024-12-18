import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { OrderProduct } from "../../models/OrderProduct";
import { orderService } from "../../APIRoutes/orderRoute";
import { useOrderStore } from "@/stores/useOrderStore";
import type { OrderModel } from "@/models/orderModel";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  const orderState = useOrderStore();

  return useMutation<OrderModel, Error, OrderModel, OrderModel>({
    // mutationFn: (order) => axios.post(`${baseUrl}/orders`, order),
    mutationFn: (order) => orderService.create(order),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      orderState.addOrder(data);
    },
  });
};
