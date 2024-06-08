import { productService } from "@/APIRoutes/productRoute";
import { useQuery } from "@tanstack/vue-query";

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
  });
};
