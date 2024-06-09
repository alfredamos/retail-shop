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
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="changePasswordSubmit">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">Password Change Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <Input
            id="email"
            name="email"
            labelName=""
            v-model="changePassword.email"
            type="email"
            hidden
            placeholder="Email"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="oldPassword"
            name="oldPassword"
            labelName="Old Password"
            v-model.trim="changePassword.oldPassword"
            type="password"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="newPassword"
            name="newPassword"
            labelName="New Password"
            v-model.trim="changePassword.newPassword"
            type="password"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
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
      </div>
      <div class="card-footer d-flex justify-content-between bg-transparent border-0">
        <Button
          type="button"
          class="btn btn-outline-secondary w-50 fw-bold rounded-5"
          @click="backToList"
        >
          Back
        </Button>
        <Button type="submit" class="btn btn-outline-primary w-50 fw-bold rounded-5">
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>
