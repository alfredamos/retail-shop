<template>
  <td class="text-start">{{ customer.name }}</td>
  <td>
    <RouterLink
      :to="`/admin-customers/detail/${customer?.id}`"
      class="stretch-routerLink text-primary fw-bold m-3"
    >
      View
    </RouterLink>
    <RouterLink
      :to="`/admin-customers/delete/${customer?.id}`"
      class="stretch-routerLink text-danger fw-bold m-3"
    >
      Delete
    </RouterLink>
    <RouterLink
      :to="`/admin-customers/edit/${customer?.id}`"
      class="stretch-routerLink text-secondary fw-bold m-3"
    >
      Edit
    </RouterLink>
  </td>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import type { Customer } from "@/validations/customerValidation";

const props = defineProps<{
  customer: Customer;
}>();
</script>

<style lang="scss" scoped></style>
