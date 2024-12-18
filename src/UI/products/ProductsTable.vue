<script lang="ts" setup>
import { GrUserAdmin } from "vue3-icons/gr";
import { RiProductHuntLine } from "vue3-icons/ri";

import { RouterLink } from "vue-router";
import DisplayProductRow from "./DisplayProductRow.vue";
import type { Product } from "@/validations/productValidation";

interface Props {
  products: Product[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black mx-auto mt-5 p-4">
    <div class="card-header bg-transparent border-0">
      <h4 class="text-center">Product List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th class="fw-bold">Product Name</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <DisplayProductRow :product="product" />
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex justify-content-center p-3 text-center bg-transparent border-0"
    >
      <RouterLink to="#" class="btn btn-outline-secondary w-50 fw-bold d-flex rounded-5">
        <RiProductHuntLine class="alf" size="20px" /> Product
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
