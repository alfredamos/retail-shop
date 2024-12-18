<template>
  <td class="alf">{{ order.id.substring(0, 9) }}</td>
  <td class="alf">{{ order.customer?.name }}</td>
  <td class="alf">{{ order.totalPrice }}</td>
  <td class="alf">{{ order.totalQuantity }}</td>
  <td class="alf">{{ order.status }}</td>
  <td class="alf">
    <button
      type="button"
      class="stretch-link text-secondary m-2 fw-bold bg-transparent border-0"
      @click="viewOrder(order.id)"
    >
      View
    </button>
    <button
      type="button"
      class="stretch-link text-primary m-2 fw-bold bg-transparent border-0"
      @click="shippedOrder(order)"
    >
      Shipped
    </button>
    <button
      type="button"
      class="stretch-link text-info m-2 fw-bold bg-transparent border-0"
      @click="deliveredOrder(order)"
    >
      Delivered
    </button>
  </td>
</template>

<script lang="ts" setup>
import type { OrderModel } from "@/models/orderModel";

const props = defineProps<{
  order: OrderModel;
}>();

const emits = defineEmits(["onViewOrder", "onIsDeliveredOrder", "onIsShippedOrder"]);

const deliveredOrder = (order: OrderModel) => {
  emits("onIsDeliveredOrder", order);
};

const shippedOrder = (order: OrderModel) => {
  emits("onIsShippedOrder", order);
};

const viewOrder = (orderId: string) => {
  console.log({ orderId });
  emits("onViewOrder", orderId);
};
</script>

<style scoped>
.alf {
  vertical-align: middle;
}
</style>
