<script lang="ts" setup>
import type UserDto from "../../models/auth/user.model";

interface Props {
  users: UserDto[];
}

const props = defineProps<Props>();

</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">User List</h4>
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
          <tr v-for="user in props.users">
            <td>{{ user.name }}</td>
            <td>
              <router-link  class="btn btn-outline-primary m-1 btn-sm fw-bold" :to="`/users/detail/${user.id}`">View</router-link>
              <router-link  class="btn btn-outline-danger m-1 btn-sm fw-bold" :to="`/users/delete/${user.id}`">Delete</router-link>
              <router-link  class="btn btn-outline-secondary m-1 btn-sm fw-bold" :to="`/users/edit/${user.id}`">Edit</router-link>
              <router-link  class="btn btn-outline-secondary m-1 btn-sm fw-bold" :to="`/users/role-change/${user.id}`">Role</router-link>              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex flex-column align-items-center justify-content-center p-3"
    >
      <RouterLink
        to="/users/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create User
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary btn-lg form-control fw-bold"
      >
        Back To Admin Panel
      </RouterLink>
    </div>
  </div>
</template>
