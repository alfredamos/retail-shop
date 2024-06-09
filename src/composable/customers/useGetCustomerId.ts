import { useFetchAllCustomers } from "./useFetchAllCustomers";
import { onMounted, ref } from "vue";

export function useGetCustomerId(userId: string) {
  const customerId = ref("");
  const { data: customers } = useFetchAllCustomers();

  onMounted(() => {
    const idOfCustomer = customers.value?.find(
      (customer) => customer.userId === userId
    )?.id as string;

    customerId.value = idOfCustomer;
  });

  return { customerId };
}
