import { useQuery } from "@tanstack/vue-query";
import { orderService } from "../../APIRoutes/orderRoute";

export function useFetchOneOrder(id: string) {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => orderService.getOne(id),
  });
}
