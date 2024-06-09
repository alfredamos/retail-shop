<template>
  <div class="card card-border-primary shadow-lg text-black wth mx-auto mt-5 p-5">
    <template v-if="orders?.length > 0">
      <table class="table table-striped table-responsive table-bordered">
        <thead>
          <tr>
            <th>Order. No.</th>
            <th>Order By</th>
            <th>Total Price</th>
            <th>Quantities</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <DisplayOrderByRow :order="order" @onViewOrder="viewOrder" />
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-end align-content-center">
        <FaArrowLeft size="15px" class="text-primary alfS" />
        <RouterLink :to="`/profiles/${userId}`" class="stretch-link text-primary fw-bold">
          Back
        </RouterLink>
      </div>
    </template>
    <h4 v-else class="text-center">
      <hr />
      <RouterLink to="/products" class="stretch-link primary">
        <FaArrowLeft />
        No available orders at this time, go back to products to make orders, if so
        desired!
      </RouterLink>
      <hr />
    </h4>
  </div>
</template>

<script lang="ts" setup>
import type { OrderModel } from "@/models/orderModel";
import DisplayOrderByRow from "@/UI/orders/DisplayOrderByRow.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { FaArrowLeft } from "vue3-icons/fa6";

const { userId } = storeToRefs(useAuthStore());

const props = defineProps<{
  orders: OrderModel[];
}>();

const emit = defineEmits(["onViewOrder"]);

const viewOrder = (order: OrderModel) => {
  emit("onViewOrder", order);
};
</script>

<style scoped>
.alfS {
  align-self: center;
}
.wth {
  width: 80%;
}
</style>
