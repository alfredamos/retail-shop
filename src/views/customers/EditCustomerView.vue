<template>
  <CustomerForm
    v-if="customer"
    formName="Edit"
    :initialCustomer="customer"
    @onSubmitCustomer="submitCustomerHandler"
    @onBackToList="backToList"
  />
</template>

<script lang="ts" setup>
import CustomerForm from "@/components/forms/customers/CustomerForm.vue";
import { useUpdateCustomer } from "@/composable/customers/useUpdateCustomer";
import type { Customer } from "@/validations/customerValidation";
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useFetchCustomer } from "@/composable/customers/useFetchCustomer";

const id = useRoute()?.params?.id as string;

const { data: initialCustomer } = useFetchCustomer(id);

const customerInitial = computed(() => initialCustomer.value);
console.log({ customerInitial: initialCustomer.value });

const customer = ref<Customer>(customerInitial.value!);

const router = useRouter();

//const customer = ref<Customer>(customerInitial.value!);

const { mutateAsync } = useUpdateCustomer();

const submitCustomerHandler = (customerToUpdate: Customer) => {
  mutateAsync({ customer: customerToUpdate, id })
    .then(() => {
      router.push("/admin-customers");
    })
    .catch((error: any) => console.log(error));
};

const backToList = () => {
  router.push("/admin-customers");
};
</script>
