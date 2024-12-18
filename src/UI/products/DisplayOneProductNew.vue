<template>
  <div class="card w-50 mx-auto mt-5 p-4">
    <div class="col-md-10 offset-md-1">
      <h4 class="text-center text-success">{{ name }} Details</h4>
      <hr />
      <article class="d-flex justify-content-between">
        <span>{{ name }}</span>
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
import type { Product } from "@/validations/productValidation";

const props = defineProps<{
  product: Product;
}>();

const name = props?.product?.name;
</script>

<style lang="scss" scoped></style>
