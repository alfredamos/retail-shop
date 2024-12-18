<script lang="ts" setup>
import { GrUserAdmin } from "vue3-icons/gr";
import { RiUserShared2Line } from "vue3-icons/ri";

import { RouterLink } from "vue-router";
import DisplayUserRow from "./DisplayUserRow.vue";
import type { User } from "@/validations/userValidation";

interface Props {
  users: User[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black mx-auto mt-5 p-4">
    <div class="card-header bg-transparent border-0">
      <h4 class="text-center">User List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th class="fw-bold">User Name</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <DisplayUserRow :user="user!" />
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex justify-content-center p-3 text-center bg-transparent border-0"
    >
      <RouterLink to="#" class="btn btn-outline-secondary w-50 fw-bold d-flex rounded-5">
        <RiUserShared2Line size="20px" /> User
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary w-50 fw-bold rounded-5"
      >
        <GrUserAdmin size="20px" />
        Admin
      </RouterLink>
    </div>
  </div>
</template>
