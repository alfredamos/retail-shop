<script lang="ts" setup>
import type ProductDto from "@/models/products/product.model";

interface Props {
  products: ProductDto[];
}

const props = defineProps<Props>();


</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">Product List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead class="bg-primary">
          <tr>
            <th class="fw-bold">Name</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in props.products">
            <td>{{ product.name }}</td>
            <td>
              <router-link  class="btn btn-outline-primary m-1 btn-sm fw-bold" :to="`/list-product/detail/${product.id}`">View</router-link>
              <router-link  class="btn btn-outline-danger m-1 btn-sm fw-bold" :to="`/list-product/delete/${product.id}`">Delete</router-link>
              <router-link  class="btn btn-outline-secondary m-1 btn-sm fw-bold" :to="`/list-product/edit/${product.id}`">Edit</router-link>              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex flex-column align-items-center justify-content-center p-3"
    >
      <RouterLink
        to="/list-product/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create Product
      </RouterLink>      
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary btn-lg form-control fw-bold"
      >
        Back to Admin Panel
      </RouterLink>
    </div>
  </div>
</template>
