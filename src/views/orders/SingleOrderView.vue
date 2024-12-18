<template>
  <DisplayOneProductNew v-if="!!product" :product="product">
    <button
      type="button"
      class="btn btn-outline-secondary w-30 fw-bold btn-sm rounded-3"
      @click="backToListHandler"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-outline-primary w-30 fw-bold btn-sm rounded-3"
      @click="addToCartHandler(product!)"
    >
      <FaPlus size="10px" style="align-self: center" />Cart
    </button>
    <button
      type="button"
      class="btn btn-outline-dark w-30 fw-bold btn-sm rounded-3"
      @click="viewCartHandler(cartItems)"
    >
      View Cart
    </button>
  </DisplayOneProductNew>
  <CartItemsDisplay
    v-if="showCartItems"
    @back-to-products="backToProductsHandler"
    :cartItems="cartItems"
    @to-detail-product="detailCartHandler"
    @go-to-cart="goToCartHandler"
  />
</template>

<script lang="ts" setup>
import DisplayOneProductNew from "@/UI/products/DisplayOneProductNew.vue";
import CartItemsDisplay from "@/UI/orders/CartItemsDisplay.vue";
import { FaPlus } from "vue3-icons/fa";
import type { CartItem } from "@/validations/cartItemValidation";
import { cartAndCheckoutMaker } from "@/components/view-util/cartItems/cartAndCheckoutMaker";
import { computed, ref } from "vue";
import type { OrderProduct } from "@/models/OrderProduct";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useGetCustomerByUserId } from "@/composable/customers/useGetCustomerByUserId";
import { useRoute, useRouter } from "vue-router";
import { useOrderStore } from "@/stores/useOrderStore";
import type { Product } from "@/validations/productValidation";
import { findCartItem } from "@/components/view-util/cartItems/findCartItem";
import { addCartItems } from "@/components/view-util/cartItems/addCartItems";
import { useFetchProduct } from "@/composable/products/useFetchProduct";
import type { OrderModel } from "@/models/orderModel";

const id = useRoute()?.params?.id as string;
const authStore = useAuthStore(); //----> Get the auth state.
const { userId } = storeToRefs(authStore);

const { data: customer } = useGetCustomerByUserId(userId.value);

const customerId = computed(() => customer.value?.id);

const router = useRouter();

const orderStore = useOrderStore();
const { order: orderTemp, cartItems: carts } = storeToRefs(orderStore); //----> Get orderStore state.

const cartItems = ref<CartItem[]>(carts.value);
const order = ref<OrderProduct>(orderTemp.value);

const { data: product } = useFetchProduct(id);

const showCartItems = ref(false);
const cart = ref<CartItem>({
  id: "",
  name: "",
  price: 0,
  productId: "",
  quantity: 0,
});

const backToProductsHandler = (carts: CartItem[]) => {
  cartAndCheckoutMaker(customerId.value!, carts);
  console.log("In-back-to-product, carts : ", cartItems.value);
  //showCartItems.value = !showCartItems.value;
  router.push("/products");
};
const backToListHandler = () => {
  cartAndCheckoutMaker(customerId.value!, cartItems.value);
  console.log("In-back-to-product, carts : ", cartItems.value);
  router.push("/products");
};

/* const viewDetailHandler = (productId: string) => {
  cartAndCheckoutMaker(customerId.value!, cartItems.value);

  router.push(`/single-product/${productId}`);
}; */

const addToCartHandler = (product: Product) => {
  if (!product) return;
  console.log("In add-to-cart : ", { product });
  //----> Check if cart-item already exist.
  cart.value = { ...(findCartItem(cartItems.value, product) as CartItem) };
  console.log("cart : ", cart.value);
  //----> Call addCartItems to update cart-items.
  const { carts, tempOrder } = addCartItems(
    customerId.value!,
    product,
    cart.value,
    cartItems.value
  );

  //----> Updated value of cart-items.
  cartItems.value = carts;
  order.value = tempOrder;

  showCartItems.value = !showCartItems.value;
};

const goToCartHandler = (carts: CartItem[]) => {
  cartAndCheckoutMaker(customerId.value!, carts);

  router.push("/cart");
};

const viewCartHandler = (carts: CartItem[]) => {
  orderStore.addOrder({
    cartItems: carts,
    customerId: customerId.value as string,
  } as OrderModel);
  showCartItems.value = !showCartItems.value;
};

const detailCartHandler = (carts: CartItem[]) => {
  orderStore.addOrder({
    cartItems: carts,
    customerId: customerId.value as string,
  } as OrderModel);
  showCartItems.value = !showCartItems.value;
};
</script>

<style scoped></style>
