<template>
  <CartDisplay
    :carts="carts"
    :name="authUser?.currentUser?.name"
    :quantities="quantities"
    :totalCost="totalCost"
    @onDecreaseQuantity="decreaseQuantityHandler"
    @onIncreaseQuantity="increaseQuantityHandler"
    @onRemoveItem="removeItemHandler"
  >
    <template #default v-if="carts?.length">
      <button
        class="btn btn-outline-secondary fw-bold w-50 rounded-5"
        type="button"
        @click="clearCartHandler"
      >
        Clear Order
      </button>
      <button
        class="btn btn-outline-primary fw-bold w-50 rounded-5"
        type="button"
        @click="checkoutHandler"
      >
        Checkout
      </button>
    </template>
    <template #noCart v-else>
      <h4 className="text-center">
        <router-link to="/products" className="stretch-link primary">
          <FaArrowLeft />
          No cart items, go back to products
          <FaArrowLeft />
        </router-link>
        <hr />
      </h4>
    </template>
  </CartDisplay>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { useOrderStore } from "@/stores/useOrderStore";
import { storeToRefs } from "pinia";
import CartDisplay from "@/UI/orders/CartDisplay.vue";
import type { CartItem } from "@/validations/cartItemValidation";
import { computed, ref } from "vue";
import { quantityAdjustmentOrRemoval } from "@/components/view-util/cartItems/increaseOrRemoveQuantity";
import { useGetCustomerByUserId } from "@/composable/customers/useGetCustomerByUserId";
import { increaseOrDecreaseCartQuantity } from "@/components/view-util/cartItems/increaseOrDecreaseCartQuantity";
import { FaArrowLeft } from "vue3-icons/fa";

const router = useRouter();

const { authUser, userId } = storeToRefs(useAuthStore());

const { data: customer } = useGetCustomerByUserId(userId.value);

const customerId = computed(() => customer.value?.id);

const orderStore = useOrderStore();
const { quantities, totalCost, cartItems } = storeToRefs(orderStore);

const carts = ref<CartItem[]>(cartItems.value);

const clearCartHandler = () => {
  console.log("Cart is cleared successfully!");

  carts.value = []; //----> Cart cleared.

  orderStore.clearCartItems(); //----> Clear cart-items.
  orderStore.clearOrder(); //----> Clear orders;
  orderStore.clearTotalCostAndQuantities(); //----> Clear the total cost and quantities.

  router.push("/");
};

const checkoutHandler = () => {
  orderStore.totalCostAndQuantities(carts.value); //----> Adjust the totalPrice and quantities.
  router.push("/checkout");
};

const decreaseQuantityHandler = (productId: string) => {
  orderStore.clearOrder(); //----> clear the old order
  console.log("Quantity is decreased by one!");
  const operation = "reduceQuantity"; //----> Reduce the quantity by one.
  //----> New cart-item with product id with an increase of 1 in quantity.
  const newCartItems = increaseOrDecreaseCartQuantity(operation, carts.value, productId);
  //----> Decrease the quantity and adjust appropriately all the other state variables.
  const { carts: itemsInCart, sumOfCosts, sumOfQuantities } = quantityAdjustmentOrRemoval(
    newCartItems,
    customerId.value!
  );

  carts.value = itemsInCart;
  totalCost.value = sumOfCosts;
  quantities.value = sumOfQuantities;
};

const increaseQuantityHandler = (productId: string) => {
  orderStore.clearOrder();
  console.log("Quantity is increase by one!");
  const operation = "increaseQuantity"; //----> Reduce the quantity by one.
  //----> New cart-item with product id with an increase of 1 in quantity.
  const newCartItems = increaseOrDecreaseCartQuantity(operation, carts.value, productId);
  //----> Decrease the quantity and adjust appropriately all the other state variables.
  const { carts: cartItems, sumOfCosts, sumOfQuantities } = quantityAdjustmentOrRemoval(
    newCartItems,
    customerId.value!
  );

  carts.value = cartItems;
  totalCost.value = sumOfCosts;
  quantities.value = sumOfQuantities;
};

const removeItemHandler = (productId: string) => {
  orderStore.clearOrder();
  //----> Filter out the cart-item to be removed.
  const filteredCartItems = carts.value?.filter((cart) => cart.productId !== productId);

  //----> Remove the cart-item and adjust appropriately all the other state variables.
  const { carts: cartItems, sumOfCosts, sumOfQuantities } = quantityAdjustmentOrRemoval(
    filteredCartItems,
    customerId.value!
  );

  //----> Assign the new values.
  carts.value = cartItems;
  totalCost.value = sumOfCosts;
  quantities.value = sumOfQuantities;
};
</script>

<style lang="scss" scoped></style>
