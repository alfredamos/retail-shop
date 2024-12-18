<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <UsersTable baseUrl="admin-users" v-if="!!users" :users="users" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UsersTable from "@/UI/users/UsersTable.vue";
import { useFetchAllUsers } from "@/composable/users/useFetchAllUsers";

const { data: users } = useFetchAllUsers();
</script>

<style scoped></style>
