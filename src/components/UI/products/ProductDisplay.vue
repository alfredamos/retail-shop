<script lang="ts" setup>
import type { Product } from "@/validations/productValidation";

const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card card-border-primary shadow-lg h-auto text-black">
    <div class="card-header border-light">
      <h4 class="text-center text-black">{{ product.name }}</h4>
    </div>
    <img :src="product.image" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group item">
          <p>{{ product.brand }}</p>
        </li>
        <li class="list-group item">
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
    <div class="card-footer text-center">
      <slot></slot>
    </div>
  </div>
</template>
