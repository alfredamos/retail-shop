import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { productService } from "../../APIRoutes/productRoute";
import { useProductStore } from "@/stores/useProductStore";
import type { Product } from "@/validations/productValidation";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const productState = useProductStore();

  return useMutation({
    // mutationFn: (product) => axios.post(`${baseUrl}/products`, product),
    mutationFn: ({ product, id }: { product: Product; id: string }) =>
      productService.update(id, product),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      productState.addProduct(data);
    },
  });
};
