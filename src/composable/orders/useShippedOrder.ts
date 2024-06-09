import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { orderShippedService } from "../../APIRoutes/orderRoute";
import type { OrderModel } from "@/models/orderModel";

interface Props {
  id: string;
  order: OrderModel;
}

export function useShipped() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, order }: Props) => orderShippedService.update(id, order),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders", data.id] });
    },
  });
}
