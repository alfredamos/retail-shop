<template>
  <div class="card w-50 mx-auto mt-5 p-4">
    <div class="col-md-10 offset-md-1">
      <h4 class="text-center text-success">{{ firstName }}'s Details</h4>
      <hr />
      <article class="d-flex justify-content-between">
        <span>{{ firstName }}</span>
        <span> Photo <img src="" alt="" /> </span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Name</span>
        <span>{{ product.name }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Brand</span>
        <span>{{ product.brand }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Price</span>
        <span>{{ product.price }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>{{ product.quantity > 1 ? "Quantities" : "Quantity" }}</span>
        <span>{{ product.quantity }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Description</span>
        <span>{{ product.description }}</span>
      </article>
      <hr />
      <div class="d-flex justify-content-between"><slot></slot></div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Product } from "../../validations/productValidation";
import { computed } from "vue";

const props = defineProps<{
  product: Product;
}>();

const firstName = computed(() => props.product?.name.split(" ")[0]);

const emits = defineEmits(["onDeleteClick", "onBackToList"]);

const deleteClick = () => {
  emits("onDeleteClick");
};

const backToList = () => {
  emits("onBackToList");
};
</script>

<style scoped></style>
