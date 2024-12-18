import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { customerService } from "../../APIRoutes/customerRoute";
import { useCustomerStore } from "@/stores/useCustomerStore";
import type { Customer } from "@/validations/customerValidation";

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();

  const customerState = useCustomerStore();

  return useMutation({
    // mutationFn: (customer) => axios.post(`${baseUrl}/customers`, customer),
    mutationFn: (customer: Customer) => customerService.create(customer),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      customerState.addCustomer(data);
    },
  });
};
