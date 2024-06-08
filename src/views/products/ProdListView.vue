<template>
  <div class="container">
    <div class="row" v-if="!!products">
      <div
        v-for="product in products"
        class="col col-lg-4 mb-4 mt-5"
        :key="product.id"
      >
        <ProductDisplay :product="(product as Product)">
          <button
            type="button"
            @click="addToCartHandler(product)"
            class="btn btn-outline-secondary fw-bold w-100 font-small rounded-3"
          >
            Add to Cart
          </button>
          <button
            type="button"
            @click="viewDetailHandler(product.id as string)"
            class="btn btn-outline-dark fw-bold w-100 font-sm rounded-3"
          >
            Detail
          </button>
        </ProductDisplay>
      </div>
    </div>
  </div>
  <CartItemsDisplay
    v-if="showCartItems"
    :cart-items="cartItems"
    @go-to-cart="goToCartHandler"
    @to-detail-product="detailViewHandler"
    @back-to-products="backToProductsHandler"
  />
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useOrderStore } from "@/stores/useOrderStore";
import { useGetCustomerByUserId } from "@/composable/customers/useGetCustomerId";
import { useAuthStore } from "@/stores/useAuthStore";
import { useGetOrderAndCartItems } from "@/composable/orders/useGetOrderAndCartItems";

import ProductDisplay from "@/components/UI/products/ProductDisplay.vue";
import CartItemsDisplay from "@/UI/orders/CartItemsDisplay.vue";
import type { CartItem } from "@/validations/cartItemValidation";
import type { Product } from "@/validations/productValidation";
import { useFetchAllProducts } from "@/composable/products/useFetchAllProducts";
import { findCartItem } from "@/components/view-util/cartItems/findCartItem";
import { addCartItems } from "@/components/view-util/cartItems/addCartItems";
import { cartAndCheckoutMaker } from "@/components/view-util/cartItems/cartAndCheckoutMaker";
import { storeToRefs } from "pinia";
import type { OrderProduct } from "@/models/OrderProduct";

const authStore = useAuthStore(); //----> Get the auth state.
const userId = authStore?.userId;

const router = useRouter();

const orderStore = useOrderStore();
const { order: orderTemp, cartItems: carts } = storeToRefs(orderStore); //----> Get orderStore state.

const cartItems = ref<CartItem[]>(carts.value);
const order = ref<OrderProduct>(orderTemp.value);

const { data: products } = useFetchAllProducts();

const { data: customer } = useGetCustomerByUserId(userId); //----> Get the customer of interest.

const customerId = computed(() => customer.value?.id as string); //----> Compute the customerId from customer.

const showCartItems = ref(false);
const cart = ref<CartItem>({
  id: "",
  name: "",
  price: 0,
  productId: "",
  quantity: 0,
});

const goToCartHandler = (carts: CartItem[]) => {
  cartAndCheckoutMaker(customerId.value, carts);

  router.push("/cart");
};

const detailViewHandler = ({
  carts,
  productId,
}: {
  carts: CartItem[];
  productId: string;
}) => {
  if (!productId) return;
  cartAndCheckoutMaker(customerId.value, carts);

  router.push(`/product-details/${productId}`);
};

const backToProductsHandler = (carts: CartItem[]) => {
  cartAndCheckoutMaker(customerId.value, carts);
  console.log("In-back-to-product, carts : ", cartItems.value);
  showCartItems.value = !showCartItems.value;
};

const viewDetailHandler = (productId: string) => {
  cartAndCheckoutMaker(customerId.value, cartItems.value);

  router.push(`/product-details/${productId}`);
};

const addToCartHandler = (product: Product) => {
  if (!product) return;
  console.log("In add-to-cart : ", { product });
  //----> Check if cart-item already exist.
  cart.value = { ...(findCartItem(cartItems.value, product) as CartItem) };
  console.log("cart : ", cart.value);
  //----> Call addCartItems to update cart-items.
  const { carts, tempOrder } = addCartItems(
    customerId.value,
    product,
    cart.value,
    cartItems.value
  );

  //----> Updated value of cart-items.
  cartItems.value = carts;
  order.value = tempOrder;

  showCartItems.value = !showCartItems.value;
};
</script>

<style lang="scss" scoped></style>
