import { customerService } from "@/APIRoutes/customerRoute";
import type { Customer } from "@/validations/customerValidation";
import { initialCustomer } from "@/views/customers/initialCustomer";
import { onMounted, ref } from "vue";

export function useGetOneCustomer(id: string) {
  const customer = ref<Customer>(initialCustomer);

  onMounted(async () => {
    customer.value = await customerService.getOne(id);
  });

  return { customer };
}
