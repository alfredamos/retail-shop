
<script lang="ts" setup>
import LoginForm from '@/components/forms/auth/LoginForm.vue';
import { useLogin } from '@/composable/auth/useLogin';
import type { Login } from '@/validations/loginValidation';
import {useRouter} from "vue-router";

const initialValue : Login ={
  email: "",
  password: ""
}

const router = useRouter()

const {mutateAsync: userLogin} = useLogin()

const loginSubmit = (login: Login) => {
  console.log({login});
  userLogin(login).then(() => router.push("/"));
  
}

const backToList = () => {
  router.push("/")
}
</script>
<template>
  <LoginForm
  :initial-value="initialValue"
  @on-back-to-list="backToList"
  @on-login="loginSubmit"
  />
</template>