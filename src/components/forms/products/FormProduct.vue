<script lang="ts" setup>
import type { Product } from "@/validations/productValidation";
import { ref } from "vue";

interface Props {
  initialProduct: Product;
}

const props = defineProps<Props>();
const product = ref<Product>(props.initialProduct);

const emit = defineEmits(["onBackToList", "onSubmitProduct"]);

const submitProduct = () => {
  emit("onSubmitProduct", product.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4">
    <form @submit.prevent="submitProduct">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">Product Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="name" class="form-label"> Name </label>
          <input
            id="name"
            required
            v-model.trim="product.name"
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="brand" class="form-label">Brand</label>
          <input
            id="brand"
            v-model.trim="product.brand"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input
            id="price"
            v-model.number="product.price"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity</label>
          <input
            id="quantity"
            v-model.number="product.quantity"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image</label>
          <input
            id="image"
            v-model.trim="product.image"
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            type="text"
            v-model.trim="product.description"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-transparent border-0">
        <button type="submit" class="btn btn-outline-primary form-control fw-bold">
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
</template>
