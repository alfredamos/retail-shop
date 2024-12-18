import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { customerService } from "../../APIRoutes/customerRoute";
import type { Customer } from "@/validations/customerValidation";

export function useEditCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, customer }: { id: string; customer: Customer }) =>
      customerService.update(id, customer),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
}
