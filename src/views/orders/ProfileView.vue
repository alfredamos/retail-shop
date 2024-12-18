<template>
  <div class="row mt-5 p-4">
    <div class="col-12 col-sm-12 col-container">
      <div class="row">
        <template v-if="orders?.length! > 0">
          <div v-for="order in orders" class="col-4" key="{order.id}">
            <DisplayOrderList
              :order="order"
              @onDelete="deleteClickHandler"
              @onView="viewHandler"
            />
          </div>
        </template>

        <template v-else>
          <div class="col-10 mx-auto p-4">
            <div class="card m-auto">
              <hr />
              <h4 class="text-start p-4">
                <RouterLink to="/products" class="stretch-link primary">
                  <FaArrowLeft class="alfSM" size="15px" />
                  You don't have any available order, go back to products to make others!
                </RouterLink>
              </h4>
              <hr />
            </div>
          </div>
        </template>
      </div>
      <div
        v-if="orders?.length"
        class="d-flex justify-content-between bg-white p-3 rounded-3"
      >
        <button
          class="btn btn-outline-primary w-50 rounded-5 btn-lg fw-bold"
          @click="backToProductsHandler"
        >
          To Products
        </button>
        <button
          class="btn btn-outline-danger w-50 rounded-5 btn-lg fw-bold"
          @click="deleteAllOrdersHandler"
        >
          Clear Orders
        </button>
      </div>
      <AlertModal
        v-if="showModal"
        modalButtonClose="Back"
        modalButtonSave="Delete"
        modalTitle="Delete Order Confirmation!"
        modalMessage="Do you really want to delete this order!"
        @modalButtonHandler="deleteHandler"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FaArrowLeft } from "vue3-icons/fa6";
import { useRouter, RouterLink } from "vue-router";
import { ref } from "vue";
import AlertModal from "@/utils/AlertModal.vue";
import DisplayOrderList from "@/UI/orders/DisplayOrderList.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useOrderStore } from "@/stores/useOrderStore";
import { storeToRefs } from "pinia";
import { useDeleteAllOrdersByUserId } from "@/composable/orders/useDeleteAllOrdersByUserId";
import { useGetOrdersByCustomerUserId } from "@/composable/orders/useGetOrdersByCustomerUserId";
import { useDeleteOneOrder } from "@/composable/orders/useDeleteOneOrder";

const showModal = ref(false);
const orderId = ref("");

const router = useRouter();

const { userId } = storeToRefs(useAuthStore());
const { data: orders } = useGetOrdersByCustomerUserId(userId.value);

const orderStore = useOrderStore();

const { mutateAsync: deleteManyOrders } = useDeleteAllOrdersByUserId(userId.value);

const { mutateAsync: deleteOneOrder } = useDeleteOneOrder();

const backToProductsHandler = () => {
  router.push("/");
};

const deleteClickHandler = (id: string) => {
  orderId.value = id;
  showModal.value = true;
};

const deleteHandler = (value: boolean) => {
  if (value) {
    console.log({ orderId: orderId.value });
    orderStore.deleteOrder(orderId.value);

    deleteOneOrder(orderId.value)
      .then(() => {
        showModal.value = !showModal.value;
      })
      .catch((error: any) => console.log(error));
  } else {
    showModal.value = !showModal.value;
  }
};

const viewHandler = async (id: string) => {
  console.log(id);
  router.push(`/orders/detail/${id}`);
};

const deleteAllOrdersHandler = () => {
  deleteManyOrders()
    .then(() => {
      console.log("I have deleted all orders!!!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped>
.alfSM {
  margin-right: "5px";
  align-self: "center";
}
</style>
