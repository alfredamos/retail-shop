<script lang="ts" setup>
import { GrUserAdmin } from "vue3-icons/gr";
import { FcCamcorderPro } from "vue3-icons/fc";

import type { OrderModel } from "@/models/orderModel";
import { RouterLink } from "vue-router";
import DisplayOrderRow from "./DisplayOrderRow.vue";

interface Props {
  orders: OrderModel[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black mx-auto mt-5 p-4">
    <div class="card-header bg-transparent border-0">
      <h4 class="text-center">Order List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th class="fw-bold">Order No.</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <DisplayOrderRow :order="order" />
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex justify-content-center p-3 text-center bg-transparent border-0"
    >
      <RouterLink
        to="/products"
        class="btn btn-outline-secondary w-50 fw-bold d-flex rounded-5"
      >
        <FcCamcorderPro size="20px" /> Order
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary w-50 fw-bold rounded-5"
      >
        <GrUserAdmin size="20px" />
        Admin
      </RouterLink>
    </div>
  </div>
</template>
