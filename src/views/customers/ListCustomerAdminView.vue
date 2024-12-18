<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <CustomersTable
          v-if="!!customers?.length"
          baseUrl="admin-customers"
          :customers="customers"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomersTable from "@/UI/customers/CustomersTable.vue";
import { useFetchAllCustomers } from "@/composable/customers/useFetchAllCustomers";

const { data: customers } = useFetchAllCustomers();
</script>

<style lang="scss" scoped></style>
