<template>
  <DisplayOrderOrCheckout
    v-if="!!order"
    orderOrCheckoutName="Order"
    :cartItems="order?.cartItems"
    :orderBy="order?.customer?.name!"
    :quantities="order?.totalQuantity!"
    :totalPrice="order?.totalPrice!"
  >
    <button
      type="button"
      class="btn btn-outline-secondary w-50 fw-bold rounded-5"
      @click="backToListHandler"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-outline-danger w-50 fw-bold rounded-5"
      @click="deleteClickHandler"
    >
      Delete
    </button>
  </DisplayOrderOrCheckout>
  <DeleteModal
    v-if="showModal"
    deleteTitle="Delete Order Confirmation!"
    :deleteMessage="`Do you really want to delete this order by : ${order?.customer?.name}?`"
    @onDeleteResource="deleteOrderHandler"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DeleteModal from "@/utils/DeleteModal.vue";
import { useDeleteOrderById } from "../../composable/orders/useDeleteOrderById";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useFetchOrder } from "@/composable/orders/useFetchOrder";
import DisplayOrderOrCheckout from "@/UI/orders/DisplayOrderOrCheckout.vue";

const showModal = ref(false);

const route = useRoute();
const router = useRouter();

const { userId } = storeToRefs(useAuthStore());

const id = route?.params?.id as string;

const { data: order } = useFetchOrder(id);

const { mutateAsync } = useDeleteOrderById(id);

const deleteClickHandler = () => {
  showModal.value = !showModal.value;
  console.log("In deleteClickHandler", showModal.value);
};

const deleteOrderHandler = (value: boolean) => {
  if (value) {
    mutateAsync()
      .then(() => {
        router.push("/orders");
      })
      .catch((error: any) => console.log(error));
  } else {
    showModal.value = !showModal.value;
  }
};

const backToListHandler = () => {
  router.push(`/orders/users/${userId}`);
};
</script>

<style scoped></style>
