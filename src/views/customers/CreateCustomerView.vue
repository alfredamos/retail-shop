<template>
  <CustomerForm
    v-if="!!customer"
    formName="Create"
    :initialCustomer="customer"
    @onSubmitCustomer="submitCustomerHandler"
    @onBackToList="backToList"
  />
</template>
<script lang="ts" setup>
import CustomerForm from "@/components/forms/customers/CustomerForm.vue";
import { useCreateCustomer } from "@/composable/customers/useCreateCustomer";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Customer } from "@/validations/customerValidation";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { initialCustomer } from "./initialCustomer";

const { authUser, isAdmin } = storeToRefs(useAuthStore());

const newUserId = authUser?.value?.signIn?.id;
initialCustomer.name = authUser?.value?.signIn?.name;
initialCustomer.userId = newUserId;

console.log("In create-customer, newUser : ", initialCustomer);

const router = useRouter();

const customer = ref<Customer>(initialCustomer);

const { mutateAsync } = useCreateCustomer();

const routeToGo = computed(() =>
  isAdmin.value ? "/admin-customers" : `/profiles/${newUserId}`
);

const submitCustomerHandler = (customer: Customer) => {
  console.log({ customer, message: "New Customer" });
  mutateAsync(customer)
    .then(() => {
      router.push(routeToGo.value);
    })
    .catch((error: any) => console.log(error));
};

const backToList = () => {
  router.push(routeToGo.value);
};
</script>

<style lang="scss" scoped></style>
