import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { productService } from "../../APIRoutes/productRoute";

export function useDeleteProduct(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => productService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", id] });
    },
  });
}
