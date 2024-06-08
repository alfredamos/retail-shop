<script setup lang="ts">
import { useRouter } from "vue-router";
import ChangePasswordForm from "@/components/forms/auth/ChangePasswordForm.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useChangePassword } from "@/composable/auth/usePasswordChange";
import type { ChangePassword } from "@/validations/changePasswordValidation";

const router = useRouter();

const authStore = useAuthStore();
const user = authStore?.authUser?.currentUser;

const {mutateAsync: userPasswordChange} = useChangePassword();

const changePasswordSubmit = (changePassword: ChangePassword) => {
  console.log("in view, value: ", changePassword)
  userPasswordChange(changePassword).then(() => {  
    console.log({changePassword})  
      router.push("/");
  })
  
};

const backToList = () => {
  router.push("/");
};

</script>
<template>

  <ChangePasswordForm
    v-if="user"
    :initial-value="{email: user.email, oldPassword: '', newPassword: '', confirmPassword: '' }"
    @back-to-list="backToList"
    @on-change-password="changePasswordSubmit"
  />
</template>
