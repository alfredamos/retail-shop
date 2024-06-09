import { useQuery } from "@tanstack/vue-query";
import { customerService } from "../../APIRoutes/customerRoute";
import { type Customer } from "../../validations/customerValidation";

export function useFetchAllCustomers() {
  return useQuery<Customer[], Error>({
    queryKey: ["Customer"],
    queryFn: () => customerService.getAll(),
  });
}
