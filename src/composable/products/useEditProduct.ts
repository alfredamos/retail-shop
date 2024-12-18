import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { productService } from "../../APIRoutes/productRoute";
import type { Product } from "@/validations/productValidation";

export function useEditProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, product }: { id: string; product: Product }) =>
      productService.update(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
