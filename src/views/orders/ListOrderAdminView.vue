<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <ordersTable baseUrl="admin-orders" :orders="orders!" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ordersTable from "@/UI/orders/ordersTable.vue";
import { useFetchAllOrders } from "@/composable/orders/useFetchAllOrders";

const { data: orders } = useFetchAllOrders();
</script>

<style lang="scss" scoped></style>
