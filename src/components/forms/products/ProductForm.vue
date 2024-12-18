<script lang="ts" setup>
import type { Product } from "@/validations/productValidation";
import { reactive } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Textarea from "@/components/form-utils/Textarea.vue";
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
  <div
    class="card card-border-primary shadow-lg text-black w-50 mx-auto mt-5 p-4"
  >
    <form @submit.prevent="submitProduct">
      <div class="card-header bg-transparent border-0">
        <h4 class="text-center">{{ formName }} Product Form</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <Input
            id="name"
            name="name"
            labelName="Name"
            v-model.trim="product.name"
            required
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="brand"
            name="brand"
            labelName="Brand"
            v-model.trim="product.brand"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="image"
            name="image"
            labelName="Image"
            v-model.trim="product.image"
            type="text"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="price"
            name="price"
            labelName="Price"
            v-model.trim="product.price"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Input
            id="quantity"
            name="quantity"
            labelName="Quantity"
            v-model.trim="product.quantity"
            type="number"
            required
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <Textarea
            id="description"
            name="description"
            labelName="Description"
            v-model.trim="product.description"
            type="text"
            required
            class="form-control"
          />
        </div>
      </div>
      <div
        class="card-footer d-flex justify-content-between bg-transparent border-0"
      >
        <Button
          type="button"
          class="btn btn-outline-secondary w-50 rounded-5 fw-bold"
          @click="backToList"
        >
          Back
        </Button>
        <Button
          type="submit"
          class="btn btn-outline-primary w-50 rounded-5 fw-bold"
        >
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>
