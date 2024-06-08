import { useQuery } from "@tanstack/vue-query";
import { customerByUserIdService } from "../../APIRoutes/customerRoute";

export function useGetCustomerByUserId(userId: string) {
  return useQuery({
    queryKey: ["customers", userId],
    queryFn: () => customerByUserIdService.getOne(userId),
  });
}
