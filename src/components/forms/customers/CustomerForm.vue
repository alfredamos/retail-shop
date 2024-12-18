<template>
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="submitCustomer">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">{{ formName }} Customer Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <Input
            id="name"
            name="name"
            labelName="Name"
            v-model.trim="customer.name"
            required
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="street"
            name="street"
            labelName="Street"
            v-model.trim="customer.street"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="city"
            name="city"
            labelName="City"
            v-model.trim="customer.city"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="postCode"
            name="postCode"
            labelName="Post Code"
            v-model.trim="customer.postCode"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="state"
            name="state"
            labelName="State"
            v-model.trim="customer.state"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="country"
            name="country"
            labelName="Country"
            v-model.trim="customer.country"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="userId"
            name="userId"
            labelName=""
            v-model.trim="customer.userId"
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

<script lang="ts" setup>
import type { Customer } from "@/validations/customerValidation";
import { ref } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Button from "@/components/form-utils/Button.vue";
import { initialCustomer } from "@/views/customers/initialCustomer";

const props = defineProps<{
  initialCustomer: Customer;
  formName: string;
}>();
const customer = ref<Customer>(props.initialCustomer || initialCustomer);

const emit = defineEmits(["onBackToList", "onSubmitCustomer"]);

const submitCustomer = () => {
  emit("onSubmitCustomer", customer.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<style scoped></style>
