<script lang="ts" setup>
import type { Customer } from "@/validations/customerValidation";
import { ref, reactive } from "vue";
//import input from "@/components/form-utils/input.vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialCustomer: Customer;
  formName: string;
}

const props = defineProps<Props>();

console.log("In customer-form ", props.initialCustomer);

const customer = reactive<Customer>(props.initialCustomer);

console.log({ customer, initCustomer: props.initialCustomer });

const emit = defineEmits(["onBackToList", "onSubmitCustomer"]);

const submitCustomer = () => {
  console.log("In submit-customer : ", customer);
  emit("onSubmitCustomer", customer);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="submitCustomer">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">{{ `${formName} Customer Form` }}</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <input
            id="name"
            name="name"
            labelName="Name"
            v-model="customer.name"
            required
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="street"
            name="street"
            labelName="Street"
            v-model="customer.street"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="city"
            name="city"
            labelName="City"
            v-model="customer.city"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="postCode"
            name="postCode"
            labelName="Post Code"
            v-model="customer.postCode"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="state"
            name="state"
            labelName="State"
            v-model="customer.state"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="country"
            name="country"
            labelName="Country"
            v-model="customer.country"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="userId"
            name="userId"
            labelName=""
            v-model="customer.userId"
            type="text"
            hidden
            class="form-control"
          />
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

<style scoped></style>
