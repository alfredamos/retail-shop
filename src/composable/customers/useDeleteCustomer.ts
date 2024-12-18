import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { customerService } from "../../APIRoutes/customerRoute";

export function useDeleteCustomer(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => customerService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers", id] });
    },
  });
}
