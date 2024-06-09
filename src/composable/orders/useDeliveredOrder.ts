import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { orderDeliveredService } from "../../APIRoutes/orderRoute";
import type { OrderModel } from "@/models/orderModel";

interface Props {
  id: string;
  order: OrderModel;
}

export function useDelivered() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, order }: Props) =>
      orderDeliveredService.update(id, order),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders", data.id] });
    },
  });
}
