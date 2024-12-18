<template>
  <td class="text-start">{{ user.name }}</td>
  <td>
    <RouterLink
      :to="`/admin-users/view/${user?.id}`"
      class="stretch-routerLink text-primary fw-bold m-3"
    >
      View
    </RouterLink>
    <RouterLink
      :to="`/admin-users/delete/${user?.id}`"
      class="stretch-routerLink text-danger fw-bold m-3"
    >
      Delete
    </RouterLink>
    <RouterLink
      :to="`/admin-users/detail/${user?.id}`"
      class="stretch-routerLink text-secondary fw-bold m-3"
    >
      Detail
    </RouterLink>
  </td>
</template>

<script lang="ts" setup>
import type { User } from "@/validations/userValidation";

const props = defineProps<{
  user: User;
}>();
</script>

<style lang="scss" scoped></style>
