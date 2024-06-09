import { useQuery } from "@tanstack/vue-query";
import { customerService } from "../../APIRoutes/customerRoute";
import { type Customer } from "../../validations/customerValidation";

export function useFetchOneCustomer(id: string) {
  return useQuery<Customer, Error>({
    queryKey: ["Customer", id],
    queryFn: () => customerService.getOne(id),
  });
}
