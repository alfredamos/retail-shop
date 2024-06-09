<template>
  <DisplayTableOrders :orders="orders" @onViewOrder="viewOrderHandler" />
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import DisplayTableOrders from "@/UI/orders/DisplayTableOrders.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useGetOrdersByCustomerUserId } from "@/composable/orders/useGetOrdersByCustomerUserId";

const router = useRouter();

const { userId } = storeToRefs(useAuthStore());

const { data: orders } = useGetOrdersByCustomerUserId(userId.value);

const viewOrderHandler = (id: string) => {
  console.log("Let me view please", id);
  router.push(`/admin-orders/view/${id}`);
};
</script>

<style lang="scss" scoped></style>
