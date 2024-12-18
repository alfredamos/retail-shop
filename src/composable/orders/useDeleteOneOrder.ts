import { orderService } from "@/APIRoutes/orderRoute";
import { useQueryClient, useMutation } from "@tanstack/vue-query";

export function useDeleteOneOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => orderService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
