<template>
  <div class="card d-flex flex-column wth mx-auto mt-5 p-5 pt-4">
    <div>
      <h4 class="text-center fw-bold al-self">Order Details</h4>
    </div>
    <hr />
    <div class="row justify-content-center" v-if="carts?.length">
      <template v-for="cart in carts" :key="cart.productId">
        <div class="col-4">
          <div class="d-flex flex-column text-start">
            <span class="mb-2">Product</span>
            <span class="mb-2">Price</span>
            <span class="mb-2">
              {{ cart.quantity > 1 ? "Quantities" : "Quantity" }}
            </span>
          </div>
          <hr />
        </div>

        <div class="col-4 align-self-auto">
          <div class="d-flex flex-column text-center">
            <span class="mb-2 text-start">{{ cart.name }}</span>
            <span class="mb-2 text-start">${{ cart.price }}</span>
            <span class="mb-2 text-start">{{ cart.quantity }}</span>
          </div>
          <hr />
        </div>

        <div class="col-4 align-self-auto">
          <div class="d-flex flex-column text-end">
            <span class="mb-2">
              <FaDeleteLeft
                class="stretch-link text-danger curs-pointer"
                size="20px"
                @click="removeItem(cart.productId)"
              />
            </span>
            <span class="mb-2">
              <FaPlus
                class="stretch-link text-success curs-pointer"
                size="20px"
                @click="increaseQuantity(cart.productId)"
              />
            </span>
            <span class="mb-2">
              <FaMinus
                class="stretch-link text-secondary curs-pointer"
                size="20px"
                @click="decreaseQuantity(cart.productId)"
              />
            </span>
            <hr />
          </div>
        </div>
      </template>
    </div>
    <template v-if="carts?.length">
      <div v-if="carts?.length" class="row justify-content-center">
        <div class="col align-self-start">
          <div class="d-flex flex-column text-start fw-bold">
            <span class="mb-2">Total Cost</span>
            <span class="mb-2">
              {{ quantities > 1 ? "Quantities" : "Quantity" }}
            </span>
            <span class="mb-2">Order By</span>
          </div>
        </div>
        <div class="col align-self-start">
          <div class="d-flex flex-column text-end fw-bold">
            <span class="mb-2 align-content-auto">{{ totalCost }}</span>
            <span class="mb-2 align-content-auto">{{ quantities }}</span>
            <span class="mb-2 align-content-auto">{{ name }}</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="col d-flex justify-content-between">
        <slot default></slot>
      </div>
      <hr />
    </template>

    <slot v-else name="noCart"></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CartItem } from "@/validations/cartItemValidation";
import { FaMinus, FaPlus, FaDeleteLeft } from "vue3-icons/fa6";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";

const { name } = storeToRefs(useAuthStore());

const props = defineProps<{
  quantities: number;
  totalCost: number;
  carts: CartItem[];
}>();

const emits = defineEmits(["onIncreaseQuantity", "onDecreaseQuantity", "onRemoveItem"]);

const decreaseQuantity = (productId: string) => {
  emits("onDecreaseQuantity", productId);
};
const increaseQuantity = (productId: string) => {
  emits("onIncreaseQuantity", productId);
};
const removeItem = (productId: string) => {
  emits("onRemoveItem", productId);
};
</script>

<style lang="scss" scoped>
.curs-pointer {
  cursor: pointer;
}
.wth {
  width: 80%;
}
.al-self {
  align-self: center;
}
</style>
