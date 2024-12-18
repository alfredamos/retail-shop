<template>
  <ProductForm
    v-if="!!product"
    formName="Create"
    :initialProduct="product"
    @onSubmitProduct="submitProductHandler"
    @onBackToList="backToList"
  />
</template>

<script lang="ts" setup>
import ProductForm from "@/components/forms/products/ProductForm.vue";
import { useCreateProduct } from "@/composable/products/useCreateProduct";
import type { Product } from "@/validations/productValidation";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { initialProduct } from "./initialProduct";

const router = useRouter();

const product = ref<Product>(initialProduct);

const { mutateAsync } = useCreateProduct();

const submitProductHandler = (product: Product) => {
  mutateAsync(product)
    .then(() => {
      router.push("/admin-products");
    })
    .catch((error: any) => console.log(error));
};

const backToList = () => {
  router.push("/admin-products");
};
</script>

<style scoped></style>
