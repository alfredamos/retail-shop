<script lang="ts" setup>
import { useRouter } from "vue-router";
import SignupForm from "@/components/forms/auth/SignupForm.vue";
import type { Signup } from "@/validations/signupValidation";
import { Gender } from "@/models/gender";
import { useSignup } from "@/composable/auth/useSignup";
import { adminSignupNewUser } from "@/components/view-util/customers/adminSignupNewUser";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const initialValue: Signup = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: Gender.Female,
};

const router = useRouter();
const { isAdmin } = storeToRefs(useAuthStore());

console.log({ isAdmin: isAdmin.value });

const routeToGo = computed(() => {
  return isAdmin.value ? "/admin-customers/create" : "/customers/create";
});

console.log({ ToGoRoute: routeToGo.value });

const routeToReturn = computed(() => {
  return isAdmin.value ? "/admin-customers" : "/signup";
});

const { mutateAsync: userSignup } = useSignup();

const signupSubmit = (signup: Signup) => {
  const signupDataWithAdmin = adminSignupNewUser(signup) as unknown as Signup;
  console.log({ signupDataWithAdmin });
  userSignup(signupDataWithAdmin)
    .then((response) => {
      console.log("After signup, response : ", response);
      router.push(routeToGo.value);
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push(routeToReturn.value);
};
</script>
<template>
  <SignupForm
    form-name="Signup"
    :initial-value="initialValue"
    @on-back-to-list="backToList"
    @on-signup="signupSubmit"
  />
</template>
