<script lang="ts" setup>
import { ref } from "vue";
import { ChangeUserRoleDto } from '../../models/auth/change-user-role.model';

interface Props {
  initialValue: ChangeUserRoleDto;
}

const props = defineProps<Props>();
const user = ref<ChangeUserRoleDto>(props.initialValue);

const emit = defineEmits(["onBackToList", "onSubmitUser"]);

const submitUser = () => {
  emit("onSubmitUser", user.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="row mt-5">
    <div class="col col-sm-8 col-md-8 offset-2">
      <div class="card">
        <form @submit.prevent="submitUser">
          <div class="card-header bg-primary text-white">
            <h4 class="text-center">User Role Update Form</h4>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="name" class="form-label"> Name </label>
              <input
                id="name"
                v-model="user.name"
                type="text"
                class="form-control"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="user.email"
                type="email"
                class="form-control"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input
                id="phone"
                :value="user.phone"
                type="tel"
                disabled
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender</label>
              <select
                id="gender"
                v-model.trim="user.gender"
                class="form-select"
                disabled
              >
                <option>User Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="role" class="form-label">User Role</label>
              <select id="role" v-model.trim="user.role" class="form-select">
                <option>User Role</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
          <div class="card-footer">
            <button
              type="submit"
              class="btn btn-outline-primary form-control fw-bold"
            >
              Submit
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary form-control fw-bold"
              @click="backToList"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
