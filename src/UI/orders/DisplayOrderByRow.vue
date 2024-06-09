<template>
  <td>{{ order.id.substring(0, 9) }}</td>
  <td>{{ order.customer?.name }}</td>
  <td>{{ order.totalPrice }}</td>
  <td>{{ order.totalQuantity }}</td>
  <td>{{ order.status }}</td>
  <td>
    <button
      type="button"
      class="stretch-link text-secondary m-2 fw-bold bg-transparent border-0"
      @click="viewOrder(order.id)"
    >
      View
    </button>
  </td>
</template>

<script lang="ts" setup>
import type { OrderModel } from "@/models/orderModel";
const props = defineProps<{
  order: OrderModel;
}>();

const emit = defineEmits(["onViewOrder"]);

const viewOrder = (orderId: string) => {
  emit("onViewOrder", orderId);
};
</script>

<style lang="css" scoped></style>
