<template>
  <td class="text-start">{{ order.id.substring(0, 8) }}...</td>
  <td>
    <RouterLink
      :to="`/admin-orders/detail/${order?.id}`"
      class="stretch-routerLink text-primary fw-bold m-3"
    >
      View
    </RouterLink>
    <RouterLink
      :to="`/admin-orders/delete/${order?.id}`"
      class="stretch-routerLink text-danger fw-bold m-3"
    >
      Delete
    </RouterLink>
    <RouterLink
      :to="`/admin-orders/edit/${order?.id}`"
      class="stretch-routerLink text-secondary fw-bold m-3"
    >
      Edit
    </RouterLink>
  </td>
</template>

<script lang="ts" setup>
import { OrderModel } from "@/models/orderModel";

const props = defineProps<{
  order: OrderModel;
}>();
</script>

<style lang="scss" scoped></style>
