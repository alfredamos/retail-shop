<script lang="ts" setup>
import type { Login } from "@/validations/loginValidation";
import { reactive } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialValue: Login;
}

const props = defineProps<Props>();
const emit = defineEmits(["onLogin", "onBackToList"]);

const login = reactive<Login>({ email: "", password: "" });

const loginSubmit = () => {
  console.log("In form, login", login);
  emit("onLogin", login);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black wth mx-auto mt-5 p-4">
    <form @submit.prevent="loginSubmit">
      <div class="card-header border-light bg-transparent border-0">
        <h4 class="text-center">Login Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <Input
            id="email"
            labelName="Email"
            type="email"
            v-model.trim="login.email"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="password"
            labelName="Password"
            type="password"
            v-model.trim="login.password"
            required
            class="form-control"
          />
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-transparent border-0">
        <Button
          type="button"
          class="btn btn-outline-secondary w-50 fw-bold rounded-3"
          @click="backToList"
        >
          Back
        </Button>
        <Button type="submit" class="btn btn-outline-primary w-50 fw-bold rounded-3">
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wth {
  width: 35%;
}
</style>
