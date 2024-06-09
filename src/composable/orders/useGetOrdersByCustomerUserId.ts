import { useQuery } from "@tanstack/vue-query";
import { ordersByUserIdService } from "../../APIRoutes/orderRoute";

export function useGetOrdersByCustomerUserId(userId: string) {
  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => ordersByUserIdService.getOne(userId),
  });
}
