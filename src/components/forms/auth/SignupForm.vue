<script lang="ts" setup>
import type { Signup } from "@/validations/signupValidation";
import { ref } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Select from "@/components/form-utils/Select.vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialValue: Signup;
  formName: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["onSignup", "onBackToList"]);

const signup = ref<Signup>(props.initialValue);

const signupSubmit = () => {
  emit("onSignup", signup.value);
};

const backToList = () => {
  console.log("in signup, I'm clicked");
  emit("onBackToList");
};
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="signupSubmit">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">Signup Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <Input
            id="name"
            name="name"
            labelName="Name"
            v-model.trim="signup.name"
            required
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="email"
            name="email"
            labelName="Email"
            v-model.trim="signup.email"
            type="email"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="phone"
            name="phone"
            labelName="Phone"
            v-model.trim="signup.phone"
            type="tel"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="password"
            name="password"
            labelName="Password"
            v-model.trim="signup.password"
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
            v-model.trim="signup.confirmPassword"
            type="password"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Select
            id="gender"
            name="gender"
            labelName="Gender"
            v-model.trim="signup.gender"
            class="form-select"
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </Select>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-transparent border-0">
        <Button
          type="button"
          class="btn btn-outline-secondary w-50 rounded-5 fw-bold"
          @click="backToList"
        >
          Back
        </Button>
        <Button type="submit" class="btn btn-outline-primary w-50 rounded-5 fw-bold">
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>
