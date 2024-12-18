import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { productService } from "../../APIRoutes/productRoute";
import { useProductStore } from "@/stores/useProductStore";
import type { Product } from "@/validations/productValidation";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const productState = useProductStore();

  return useMutation({
    // mutationFn: (product) => axios.post(`${baseUrl}/products`, product),
    mutationFn: (product: Product) => productService.create(product),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      productState.addProduct(data);
    },
  });
};
