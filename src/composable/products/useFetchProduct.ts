import { productService } from "@/APIRoutes/productRoute";
import { useQuery } from "@tanstack/vue-query";

export const useFetchProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => productService.getOne(id),
  });
};
