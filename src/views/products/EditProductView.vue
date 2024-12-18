<template>
  <FormProduct
    v-if="product"
    formName="Edit"
    :initialProduct="product"
    @onSubmitProduct="submitProductHandler"
    @onBackToList="backToList"
  />
</template>

<script lang="ts" setup>
//import ProductForm from "@/components/forms/products/ProductForm.vue";
import FormProduct from "@/components/forms/products/FormProduct.vue";
import { useUpdateProduct } from "@/composable/products/useUpdateProduct";
import type { Product } from "@/validations/productValidation";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useFetchProduct } from "@/composable/products/useFetchProduct";

const id = useRoute()?.params?.id as string;

const { data: productInitial } = useFetchProduct(id);

const router = useRouter();

const product = ref<Product>(productInitial.value!);

const { mutateAsync } = useUpdateProduct();

const submitProductHandler = (product: Product) => {
  mutateAsync({ product, id })
    .then(() => {
      router.push("/admin-products");
    })
    .catch((error: any) => console.log(error));
};

const backToList = () => {
  router.push("/admin-products");
};
</script>

<style lang="scss" scoped></style>
