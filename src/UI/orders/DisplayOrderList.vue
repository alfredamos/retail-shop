<template>
  <div
    class="card card-border-primary shadow-lg text-black d-flex flex-column gap-2 mb-5"
  >
    <div class="d-flex justify-content-between">
      <span class="text-start">Order No.</span>
      <span class="text-end">{{ `${order.id.substring(0, 8)}...` }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span class="text-start">Total Cost</span>
      <span class="text-end">${{ order.totalPrice }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span class="text-start">
        {{ order.totalQuantity > 1 ? "Quantities" : "Quantity" }}
      </span>
      <span class="text-end">{{ order.totalQuantity }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between w-100">
      <button
        class="btn btn-outline-primary w-50 fw-bold rounded-2"
        @click="viewOrder(order.id)"
      >
        <FaMagnifyingGlassArrowRight size="20px" />
      </button>
      <button
        class="btn btn-outline-danger w-50 fw-bold rounded-2"
        @click="deleteOrder(order.id)"
      >
        <FaDeleteLeft size="20px" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FaDeleteLeft } from "vue3-icons";

const props = defineProps<{
  order: OrderModel;
}>();

const emits = defineEmits(["onView", "onDelete"]);

const viewOrder = (id: string) => {
  emits("onView", id);
};

const deleteOrder = (id: string) => {
  emits("onDelete", id);
};
</script>

<style scoped></style>
