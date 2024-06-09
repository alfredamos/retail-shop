<template>
  <div class="card w-50 mx-auto mt-5 pt-4 pb-4">
    <div class="row">
      <h4 class="text-center">{{ orderOrCheckoutName }} Details</h4>

      <div class="col-md-10 offset-md-1">
        <hr />
        <article class="d-flex mb-2 mr-4">
          <span
            class="text-start text-wrap fw-bold"
            style="display: inline-block; width: 100%"
          >
            Product
          </span>
          <span class="text-end fw-bold ml-2" style="display: inline-block; width: 100%">
            Price
          </span>
          <span class="text-end fw-bold" style="display: inline-block; width: 100%">
            Quantity
          </span>
        </article>
        <hr />
        <template v-for="cart in cartItems" :key="cart.productId">
          <article class="d-flex mb-2 mt-2">
            <span class="text-start mr-2" style="display: inline-block; width: 100%">
              {{ cart.name }}
            </span>
            <span class="text-end ml-2" style="display: inline-block; width: 100%">
              {{ cart.price }}
            </span>
            <span class="text-end" style="display: inline-block; width: 100%">
              {{ cart.quantity }}
            </span>
            <hr />
          </article>
        </template>
        <hr />
        <div class="d-flex flex-column mt-2">
          <span class="d-flex justify-content-between mb-2">
            <span class="fw-bold">Total</span>
            <span class="fw-bold">{{ totalPrice }}</span>
          </span>
          <span class="d-flex justify-content-between mb-2">
            <span class="fw-bold">Quantities</span>
            <span class="fw-bold">{{ quantities }}</span>
          </span>
          <span class="d-flex justify-content-between mb-2">
            <span class="fw-bold">Order By</span>
            <span class="fw-bold">{{ orderBy }}</span>
          </span>
        </div>
        <hr />
        <div class="d-flex justify-content-around align-content-center">
          <slot></slot>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CartItem } from "@/validations/cartItemValidation";

const props = defineProps<{
  cartItems: CartItem[];
  orderBy: string;
  orderOrCheckoutName: string;
  totalPrice: number;
  quantities: number;
}>();
</script>

<style lang="css" scoped>
.wth-in-block {
  display: "inline-block";
  width: "100%";
}
</style>
