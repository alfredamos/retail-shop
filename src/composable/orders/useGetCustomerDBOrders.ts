import { useFetchAllCustomers } from "../customers/useFetchAllCustomers";
import { useFetchAllOrders } from "./useFetchAllOrders";
import { UserResponse } from "../../models/userResponse";
import { onMounted, ref } from "vue";
import { OrderModel } from "@/models/orderModel";
import type { Customer } from "@/validations/customerValidation";

export const useGetCustomerDBOrders = (currentUser: UserResponse) => {
  const customerId = ref("");
  const orders = ref<OrderModel[]>([]);
  const { data: customers } = useFetchAllCustomers();
  const { data: ordersDb } = useFetchAllOrders();
  console.log("In use-get-customerDb-orders", { ordersDb });

  onMounted(() => {
    const idOfCustomer = customers.value?.find(
      (customer) => customer.userId === currentUser?.id
    )?.id as string;

    customerId.value = idOfCustomer;

    const ordersByCustomerId = ordersDb
      ? (ordersDb.value?.filter(
          (order) => order.customerId === customerId.value
        ) as OrderModel[])
      : [];

    orders.value = ordersByCustomerId;
  });

  return { currentUser, customerId, orders };
};
