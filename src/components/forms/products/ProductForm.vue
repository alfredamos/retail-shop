<script lang="ts" setup>
import type { Product } from "@/validations/productValidation";
import { reactive } from "vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialProduct: Product;
  formName: string;
}

const props = defineProps<Props>();

const product = reactive<Product>(props.initialProduct);

const emit = defineEmits(["onBackToList", "onSubmitProduct"]);

const submitProduct = () => {
  emit("onSubmitProduct", product);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="submitProduct">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">{{ formName }} Product Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <input
            id="name"
            name="name"
            placeholder="Enter Name"
            v-model.trim="product.name"
            required
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="brand"
            name="brand"
            placeholder="Enter Brand"
            v-model.trim="product.brand"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="image"
            name="image"
            placeholder="Enter Image"
            v-model.trim="product.image"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="price"
            name="price"
            placeholder="Enter Price"
            v-model.trim="product.price"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            id="quantity"
            name="quantity"
            placeholder="Enter Quantity"
            v-model.trim="product.quantity"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <textarea
            id="description"
            name="description"
            placeholder="Enter Description"
            v-model.trim="product.description"
            type="text"
            required
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
