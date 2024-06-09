import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { orderDeleteAllByUserIdService } from "../../APIRoutes/orderRoute";

export function useDeleteAllOrdersByUserId(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => orderDeleteAllByUserIdService.remove(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders", userId] });
    },
  });
}
