import { useRouter, useRoute } from 'vue-router';
<template>
  <div class="card mt-5 p-4 wth mx-auto">
    <table class="table table-striped table-responsive table-bordered">
      <thead>
        <tr>
          <th>Order. No.</th>
          <th>Order By</th>
          <th>Total Price</th>
          <th>Quantities</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!!order">
          <td class="alf">{{ order.id.substring(0, 9) }}</td>
          <td class="alf">{{ order?.customer?.name }}</td>
          <td class="alf">{{ order.totalPrice }}</td>
          <td class="alf">{{ order.totalQuantity }}</td>
          <td class="alf">{{ order.status }}</td>
          <td>
            <button
              type="button"
              class="stretch-link text-secondary m-2 fw-bold border-0"
              @click="backToListHandler"
            >
              Back
            </button>
            <button
              type="button"
              class="stretch-link text-primary m-2 fw-bold border-0"
              @click="shippedHandler"
            >
              Shipped
            </button>
            <button
              type="button"
              class="stretch-link text-info m-2 fw-bold border-0"
              @click="deliveredHandler"
            >
              Delivered
            </button>
            <button
              type="button"
              class="stretch-link text-danger m-2 fw-bold border-0"
              @click="deleteClickHandler"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <DeleteModal
    v-if="showModal"
    deleteTitle="Delete Order Confirmation!"
    :deleteMessage="`Do you really want to delete this order by : ${order?.customer?.name}?`"
    @onDeleteResource="deleteOrderHandler"
  />
</template>

<script lang="ts" setup>
import { useFetchOrder } from "@/composable/orders/useFetchOrder";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import DeleteModal from "@/utils/DeleteModal.vue";
import { ref } from "vue";
import { useDeleteOrderById } from "@/composable/orders/useDeleteOrderById";

const showModal = ref(false);

const router = useRouter();
const id = useRoute()?.params?.id as string;

const { data: order } = useFetchOrder(id);

console.log("In detail-order : ", { order });

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
  router.push("/admin-orders");
};

const shippedHandler = () => {
  console.log("Shipped!!!!!!!");
};

const deliveredHandler = () => {
  console.log("delivered!!!!!!!");
};
</script>

<style scoped>
.wth {
  width: 80%;
}

.alf {
  vertical-align: middle;
}
</style>
