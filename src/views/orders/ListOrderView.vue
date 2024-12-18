<template>
  <DisplayTableOrdersAdmin
    v-if="!!orders?.length"
    :orders="orders"
    @onIsDeliveredOrder="deliveredHandler"
    @onIsShippedOrder="shippedHandler"
    @onViewOrder="viewHandler"
  />
</template>

<script lang="ts" setup>
import { useDelivered } from "@/composable/orders/useDeliveredOrder";
import { useFetchAllOrders } from "@/composable/orders/useFetchAllOrders";
import { useShipped } from "@/composable/orders/useShippedOrder";
import type { OrderModel } from "@/models/orderModel";
import { useRouter } from "vue-router";
import DisplayTableOrdersAdmin from "@/UI/orders/DisplayTableOrdersAdmin.vue";

const router = useRouter();

const { mutateAsync: shippedAsync } = useShipped();
const { mutateAsync: deliveredAsync } = useDelivered();

const { data: orders } = useFetchAllOrders();

console.log({ orders });

const shippedHandler = (order: OrderModel) => {
  console.log("Shipped!!!!!!!");
  shippedAsync({ id: order.id, order }).then().catch();
};

const deliveredHandler = (order: OrderModel) => {
  console.log("delivered!!!!!!!");
  deliveredAsync({ id: order.id, order }).then().catch();
};

const viewHandler = (id: string) => {
  console.log("Let me view please", id);
  router.push(`/admin-orders/detail/${id}`);
};
</script>

<style scoped></style>
