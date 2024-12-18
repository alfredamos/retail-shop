<template>
  <DisplayOrderOrCheckout
    orderOrCheckoutName="Checkout"
    :cartItems="cartItems"
    :orderBy="name"
    :quantities="quantities"
    :totalPrice="totalCost"
  >
    <button
      class="btn btn-outline-secondary fw-bold w-30 btn-sm rounded-3"
      type="button"
      @click="backToCartHandler"
    >
      <FaArrowLeft size="15px" class="mgr" /> Cart
    </button>
    <button
      class="btn btn-outline-danger fw-bold w-30 btn-sm rounded-3"
      type="button"
      @click="clearCheckOutHandler"
    >
      <FaDeleteLeft size="15px" class="mgr" />Clear
    </button>
    <button
      class="btn btn-outline-primary fw-bold w-30 btn-sm rounded-3"
      @click="submitOrderHandler"
    >
      Pay <FaArrowRight size="15px" class="mgr" />
    </button>
  </DisplayOrderOrCheckout>
</template>

<script lang="ts" setup>
import { FaDeleteLeft, FaArrowLeft, FaArrowRight } from "vue3-icons/fa6";
import { useRouter } from "vue-router";
import DisplayOrderOrCheckout from "@/UI/orders/DisplayOrderOrCheckout.vue";
import { useOrderStore } from "@/stores/useOrderStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useCreateOrder } from "@/composable/orders/useCreateOrder";
import type { OrderModel } from "@/models/orderModel";

const { name, userId } = storeToRefs(useAuthStore());
const orderStore = useOrderStore();
const { quantities, totalCost, cartItems, order } = storeToRefs(orderStore);

const router = useRouter();

const { mutateAsync } = useCreateOrder();

const clearCheckOutHandler = () => {
  //toast.success("The checkout has been cleared!");
  console.log("Clear-checkout clicked!");
  orderStore.clearOrder();
  orderStore.clearTotalCostAndQuantities();
  router.push("/products");
};

const submitOrderHandler = () => {
  console.log("At point 1, orderToCreate : ", order);
  console.log("submit-order clicked!");
  mutateAsync(order.value as OrderModel)
    .then((newOrder) => {
      console.log("Order created, newOrder : ", newOrder);
      /* toast.success(
          `The order is submitted  for payment!`
        );  */

      orderStore.clearTotalCostAndQuantities();
      orderStore.clearOrder();
      router.push(`/profiles/${userId}`);
    })
    .catch((error) => console.log(error));
};

const backToCartHandler = () => {
  router.push("/cart");
};
</script>

<style scoped>
.mgr {
  margin-right: 2px;
}
</style>
