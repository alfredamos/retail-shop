<script lang="ts" setup>
import type { ChangePassword } from "@/validations/changePasswordValidation";
import { ref } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialValue: ChangePassword;
}

const props = defineProps<Props>();

const emit = defineEmits(["backToList", "onChangePassword"]);

console.log("In change-password-form, change-password : ", props.initialValue);

const changePassword = ref<ChangePassword>(props.initialValue);

const changePasswordSubmit = () => {
  console.log("in form, value : ", changePassword);
  emit("onChangePassword", changePassword.value);
};

const backToList = () => {
  emit("backToList");
};
</script>
<template>
  <div class="card w-50 mx-auto mt-5">
    <form @submit.prevent="changePasswordSubmit">
      <div class="card-header">
        <h4 class="text-center">Password Change Form</h4>
      </div>
      <div class="card-body">
        <Input
          id="email"
          name="email"
          labelName="Email"
          v-model="changePassword.email"
          type="email"
          hidden
          placeholder="Email"
          class="form-control"
        />
        <Input
          id="oldPassword"
          name="oldPassword"
          labelName="Old Password"
          v-model.trim="changePassword.oldPassword"
          type="password"
          required
          class="form-control"
        />
        <Input
          id="newPassword"
          name="newPassword"
          labelName="New Password"
          v-model.trim="changePassword.newPassword"
          type="password"
          required
          class="form-control"
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          labelName="Confirm Password"
          v-model.trim="changePassword.confirmPassword"
          type="password"
          required
          class="form-control"
        />
      </div>
      <div class="card-footer d-flex justify-content-between">
        <Button
          type="button"
          class="btn btn-outline-secondary w-50 fw-bold rounded-3"
          @click="backToList"
        >
          Back
        </Button>
        <Button
          type="submit"
          class="btn btn-outline-primary w-50 fw-bold rounded-3"
        >
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>
