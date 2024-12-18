<template>
  <div class="card d-flex flex-column gap-2 mb- mt-5 p-5 wth mx-auto">
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
        {{ totalQuantity > 1 ? "Quantities" : "Quantity" }}
      </span>
      <span class="text-end">{{ order.totalQuantity }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between w-100">
      <button
        class="btn btn-outline-primary w-50 fw-bold rounded-2"
        @click="viewOrder(order.id)"
      >
        <FaMagnifyingGlassArrowRight
          class="d-flex justify-content-center align-center"
          size="20px"
        />
      </button>
      <button
        class="btn btn-outline-danger w-50 fw-bold rounded-2"
        @click="deleteOrder(order.id)"
      >
        <FaDeleteLeft class="d-flex justify-content-center align-center" size="20px" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { OrderModel } from "@/models/orderModel";
import { computed } from "vue";
import { FaDeleteLeft, FaMagnifyingGlassArrowRight } from "vue3-icons/fa6";

const props = defineProps<{
  order: OrderModel;
}>();

const totalQuantity = computed(() => props?.order?.totalQuantity as number);
const emits = defineEmits(["onView", "onDelete"]);

const viewOrder = (id: string) => {
  emits("onView", id);
};

const deleteOrder = (id: string) => {
  emits("onDelete", id);
};
</script>

<style scoped>
.wth {
  width: 80%;
}

.alf {
  align-self: center;
}
</style>
