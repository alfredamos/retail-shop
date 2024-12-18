<template>
  <DisplayOneProduct v-if="!!product" :product="product">
    <button
      type="button"
      class="btn btn-outline-secondary w-50 fw-bold rounded-5"
      @click="backToListHandler"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-outline-danger w-50 fw-bold rounded-5"
      @click="deleteClickHandler"
    >
      Delete
    </button>
  </DisplayOneProduct>

  <DeleteModal
    v-if="showModal"
    deleteTitle="Delete Product Confirmation!"
    :deleteMessage="`Do you really want to delete this product : ${product?.name}?`"
    @onDeleteResource="deleteHandler"
  />
</template>

<script lang="ts" setup>
import { useFetchProduct } from "@/composable/products/useFetchProduct";
import { ref } from "vue";
import DisplayOneProduct from "@/UI/products/DisplayOneProduct.vue";
import { useRoute, useRouter } from "vue-router";
import { useDeleteProduct } from "@/composable/products/useDeleteProduct";
import DeleteModal from "@/utils/DeleteModal.vue";

const showModal = ref(false);
const id = useRoute().params?.id as string;
const router = useRouter();

const { data: product } = useFetchProduct(id);

const { mutateAsync } = useDeleteProduct(id);

const backToListHandler = () => {
  router.push("/admin-products");
};

const deleteClickHandler = () => {
  showModal.value = true;
};

const deleteHandler = async (value: boolean) => {
  console.log({ value });
  if (value) {
    mutateAsync()
      .then(() => {
        router.push("/admin-products");
      })
      .catch((error: any) => console.log(error));
  } else {
    router.push("/admin-products");
  }
};
</script>

<style scoped></style>
