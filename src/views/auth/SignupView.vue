<script lang="ts" setup>
import {useRouter} from "vue-router";
import SignupForm from '@/components/forms/auth/SignupForm.vue';
import type { Signup } from "@/validations/signupValidation";
import { Gender } from "@/models/gender";
import { signupService } from "@/APIRoutes/authRoutes";
import { useSignup } from "@/composable/auth/useSignup";

const initialValue : Signup ={
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: Gender.Female
}

const router = useRouter();

const {mutateAsync: userSignup} = useSignup()

const signupSubmit = (signup: Signup) => {
  userSignup(signup)
  .then(() => router.push('/'))
  .catch((error) => console.log(error))
  
}

const backToList = () => {
  router.push("/")
}
</script>
<template>
  <SignupForm
  form-name="Signup"
  :initial-value="initialValue"
  @on-back-to-list="backToList"
  @on-signup="signupSubmit"
  />
</template>import { Gender } from "@/models/gender";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Signup } from "@/validations/signupValidation";
