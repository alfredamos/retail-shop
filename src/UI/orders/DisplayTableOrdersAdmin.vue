<template>
  <div class="card mt-5 p-4 wth mx-auto">
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
          <DisplayOrderByRowAdmin
            v-if="!!order"
            :order="order"
            @onIsDeliveredOrder="deliveredOrder"
            @onIsShippedOrder="shippedOrder"
            @onViewOrder="viewOrder"
          />
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-end align-content-center alfS">
      <FaArrowLeft
        size="15px"
        class="text-primary"
        style="align-self: center"
      />
      <RouterLink to="/admin-panel" class="stretch-link text-primary fw-bold">
        Back To Admin Panel
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { OrderModel } from "@/models/orderModel";
import { RouterLink } from "vue-router";
import { FaArrowLeft } from "vue3-icons/fa6";
import DisplayOrderByRowAdmin from "@/UI/orders/DisplayOrderByRowAdmin.vue";

const props = defineProps<{
  orders: OrderModel[];
}>();

const emits = defineEmits([
  "onViewOrder",
  "onIsDeliveredOrder",
  "onIsShippedOrder",
]);

const deliveredOrder = (order: OrderModel) => {
  emits("onIsDeliveredOrder", order);
};

const shippedOrder = (order: OrderModel) => {
  emits("onIsShippedOrder", order);
};

const viewOrder = (orderId: string) => {
  console.log("view!!!", orderId);
  emits("onViewOrder", orderId);
};
</script>

<style scoped>
.alfS {
  align-self: "center";
}
.wth {
  width: 80%;
}
</style>
