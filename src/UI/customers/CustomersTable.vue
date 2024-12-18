<script lang="ts" setup>
import { GrUserAdmin } from "vue3-icons/gr";
import { TiUserAddOutline } from "vue3-icons/ti";

import { RouterLink } from "vue-router";
import DisplayCustomerRow from "./DisplayCustomerRow.vue";
import type { Customer } from "@/validations/customerValidation";

interface Props {
  customers: Customer[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black mx-auto mt-5 p-4">
    <div class="card-header bg-transparent border-0">
      <h4 class="text-center">Customer List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th class="fw-bold">Customer Name</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <DisplayCustomerRow :customer="customer" />
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex justify-content-center p-3 text-center bg-transparent border-0"
    >
      <RouterLink
        to="/admin-users/create"
        class="btn btn-outline-secondary w-50 fw-bold d-flex rounded-5"
      >
        <TiUserAddOutline class="alf" size="20px" /> Customer
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary w-50 fw-bold rounded-5"
      >
        <GrUserAdmin class="alf" size="20px" />
        Admin
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.alf {
  vertical-align: middle;
}
</style>
