<template>
  <div
    class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4"
  >
    <div class="col col-sm-8 col-md-8 offset-2">
      <div class="card">
        <form @submit.prevent="submitCustomer">
          <div class="card-header bg-primary text-white">
            <h4 class="text-center">Customer Form</h4>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="name" class="form-label"> Name </label>
              <input
                id="name"
                required
                v-model.trim="customer.name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="street" class="form-label">Street</label>
              <input
                id="street"
                v-model.trim="customer.street"
                type="text"
                required
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="city" class="form-label">City</label>
              <input
                id="city"
                v-model.trim="customer.city"
                type="text"
                required
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="state" class="form-label">State</label>
              <input
                id="state"
                v-model.trim="customer.state"
                type="text"
                required
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="postCode" class="form-label">Postcode</label>
              <input
                id="postCode"
                v-model.trim="customer.postCode"
                type="text"
                class="form-control"
              />
            </div>

            <div class="mb-3">
              <label for="country" class="form-label">Country</label>
              <input
                id="country"
                name="country"
                type="text"
                v-model.trim="customer.country"
                class="form-control"
              />
            </div>
          </div>
          <div class="card-footer">
            <button
              type="submit"
              class="btn btn-outline-primary form-control fw-bold"
            >
              Submit
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary form-control fw-bold"
              @click="backToList"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Customer } from "@/validations/customerValidation";
import { ref } from "vue";

const props = defineProps<{
  customer: Customer;
}>();
const customer = ref<Customer>(props.customer);

const emit = defineEmits(["onBackToList", "onSubmitCustomer"]);

const submitCustomer = () => {
  emit("onSubmitCustomer", customer.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<style scoped></style>
