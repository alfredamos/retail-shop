import { productService } from "@/APIRoutes/productRoute";
import type { Product } from "@/validations/productValidation";
import { onMounted, ref } from "vue";

export const useGetAllProducts = () => {
  const products = ref<Product[]>([]);

  onMounted(async () => {
    products.value = await productService.getAll();
  });

  return { products };
};
