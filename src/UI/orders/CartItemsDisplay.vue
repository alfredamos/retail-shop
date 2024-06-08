<template>
  <Modal>
    <div class="border border-1 p-4">
      <ul v-for="cart in carts" class="list-group" :key="cart.productId">
        <li class="list-group-item">Name : {{ cart.name }}</li>
        <li class="list-group-item">Price: {{ cart.price }}</li>
        <li class="list-group-item">
          {{ cart.quantity > 1 ? "quantities" : "quantity" }}
          <div class="d-flex justify-content-center align-content-md-center">
            <select name="quantity" class="form-select" v-model="cart.quantity">
              <option v-for="i in selectedQuantities" :value="i" :key="i">
                {{ i }}
              </option>
            </select>
            <FaPlusMinus
              class="align-icon"
              @click="quantitySelector(cart.quantity, cart.productId)"
              size="1rem"
              color="gray"
            />
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-between mt-4 mb-2">
        <span class="fs-6 fw-bold">
          {{ quantities > 1 ? "Quantities" : "Value" }}
        </span>
        <span class="fw-bold">{{ quantities }}</span>
      </div>
      <div class="d-flex justify-content-between mt-2 mb-2">
        <span class="fs-6 fw-bold">Total Cost </span>
        <span class="fw-bold">{{ totalCost }}</span>
      </div>
      <hr />
      <div class="d-flex w-100 mx-auto justify-content-between">
        <button
          type="button"
          class="btn btn-outline-dark w-30 btn-sm rounded-3 fw-bold"
          @click="goBackToProductsHandler"
        >
          Products
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary w-30 btn-sm rounded-3 fw-bold"
          @click="goToCartHandler"
        >
          Cart
        </button>

        <button
          type="button"
          class="btn btn-outline-primary w-30 btn-sm fw-bold rounded-3"
          @click="singleOrderHandler(cartItems[cartItems.length - 1].productId)"
        >
          Detail
        </button>
        <slot></slot>
      </div>
      <hr />
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { useOrderStore } from "@/stores/useOrderStore";
import type { CartItem } from "@/validations/cartItemValidation";
import { ref } from "vue";
import Modal from "@/utils/Modal.vue";
import { FaPlusMinus } from "vue3-icons/fa6";
import { storeToRefs } from "pinia";

const orderStore = useOrderStore();
const { quantities, totalCost } = storeToRefs(orderStore);

console.log("In-cart-items-display", quantities.value, totalCost.value);

const selectedQuantities: number[] = [];
[...Array(20).keys()].forEach((i) => selectedQuantities.push(i + 1));
const props = defineProps<{
  cartItems: CartItem[];
}>();

const carts = ref<CartItem[]>(props.cartItems);

const emits = defineEmits(["toDetailProduct", "backToProducts", "goToCart"]);

const quantitySelector = (quantity: number, productId: string) => {
  carts.value.forEach((cart, index, _) => {
    if (cart.productId === productId) {
      const cartTemp = { ...cart, quantity };

      carts.value[index] = cartTemp;
      orderStore.totalCostAndQuantities(carts.value);
    }
  });
};

const singleOrderHandler = (productId: string) => {
  emits("toDetailProduct", { carts: carts.value, productId });
};
const goBackToProductsHandler = () => {
  emits("backToProducts", carts.value);
};

const goToCartHandler = () => {
  emits("goToCart", carts.value);
};
</script>

<style lang="scss" scoped>
.align-icon {
  margin-left: 10px;
  align-self: center;
  cursor: pointer;
}
</style>
