import { customerService } from "@/APIRoutes/customerRoute";
import { useQuery } from "@tanstack/vue-query";

export const useFetchCustomer = (id: string) => {
  return useQuery({
    queryKey: ["customers", id],
    queryFn: () => customerService.getOne(id),
  });
};
