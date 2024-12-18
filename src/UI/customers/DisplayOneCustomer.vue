<template>
  <div class="card w-50 mx-auto mt-5 p-4">
    <div class="col-md-10 offset-1">
      <h4 class="text-center text-success">{{ customer.name }}'s Details</h4>
      <hr />
      <article class="d-flex justify-content-between">
        <span>{{ firstName }}</span>
        <span> Photo <img src="" alt="" /> </span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Street</span>
        <span>{{ customer.street }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>City</span>
        <span>{{ customer.city }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>State</span>
        <span>{{ customer.state }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>PostCode</span>
        <span>{{ customer.postCode }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Country</span>
        <span>{{ customer.country }}</span>
      </article>
      <hr />
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-outline-secondary w-50 fw-bold rounded-5"
          @click="backToList"
        >
          Back
        </button>
        <button
          type="button"
          class="btn btn-outline-danger w-50 fw-bold rounded-5"
          @click="deleteClick"
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type Customer } from "../../validations/customerValidation";

const firstName = computed(() => props.customer.name.split(" ")[0]);
const props = defineProps<{
  customer: Customer;
}>();

const emits = defineEmits(["onDeleteClick", "onBackToList"]);

const deleteClick = () => {
  emits("onDeleteClick");
};

const backToList = () => {
  emits("onBackToList");
};
</script>

<style lang="scss" scoped></style>
