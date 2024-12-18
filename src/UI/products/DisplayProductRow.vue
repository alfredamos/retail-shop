<template>
  <td class="text-start">{{ product.name }}</td>
  <td>
    <RouterLink
      :to="`/admin-products/detail/${product?.id}`"
      class="stretch-routerLink text-primary fw-bold m-3"
    >
      View
    </RouterLink>
    <RouterLink
      :to="`/admin-products/delete/${product?.id}`"
      class="stretch-routerLink text-danger fw-bold m-3"
    >
      Delete
    </RouterLink>
    <RouterLink
      :to="`/admin-products/edit/${product?.id}`"
      class="stretch-routerLink text-secondary fw-bold m-3"
    >
      edit
    </RouterLink>
  </td>
</template>

<script lang="ts" setup>
import type { Product } from "@/validations/productValidation";

const props = defineProps<{
  product: Product;
}>();
</script>

<style lang="scss" scoped></style>
