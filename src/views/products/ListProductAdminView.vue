<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <ProductsTable baseUrl="admin-products" :products="products!" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductsTable from "@/UI/products/ProductsTable.vue";
import { useFetchAllProducts } from "@/composable/products/useFetchAllProducts";

const { data: products } = useFetchAllProducts();
</script>

<style lang="scss" scoped></style>
