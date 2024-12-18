<script lang="ts" setup>
import OrderDto from "../../models/orders/order.model";
import AlertModal from "../../util/AlertModal.vue";

interface Props {
  order: OrderDto;
}
const props = defineProps<Props>(); 

const emit = defineEmits(["onBackToList", "onDeleteHandler"]);

const backToList = () => {
  emit("onBackToList");
};

const onCloseOrOPenModal = (value: boolean) => {
  console.log("Right or wrong : ", value);
  emit("onDeleteHandler", value);
};
</script>
<template>
  <div class="col col-sm-8 col-8 offset-2 mt-5" v-if="props.order">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h4 class="text-center">Order Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Order No. : {{ props.order.id }}</li>
          <li class="list-group-item">Buyer : {{ props.order?.user?.name }}</li>
          <li class="list-group-item">Items No. : {{ props.order?.items }}</li>
          <li class="list-group-item">Total : {{ props.order?.total }}</li>
          <li class="list-group-item">Status : {{ props.order?.status }}</li>
          <li class="list-group-item">
            <ul class="list-group" v-for="cartItem in props.order?.cartItems">
              <li class="list-group-item">
                Cart No.. : {{ cartItem?.id }}
              </li>              
              <li class="list-group-item">
                Product : {{ cartItem?.product?.name }}
              </li>
              <li class="list-group-item">
                Price : {{ cartItem?.price }}
              </li>
              <li class="list-group-item mb-3">
                Quantity : {{ cartItem?.quantity }}
              </li>             
            </ul>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <button
          type="button"
          @click="backToList"
          class="btn btn-outline-secondary form-control text-center m-1 fw-bold"
        >
          Back
        </button>
        <button
          type="button"
          class="btn btn-outline-danger form-control fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Delete
        </button>
      </div>
    </div>
    <AlertModal
      :modal-message="'Do you really want to delete order?'"
      :modal-title="'Delete Order Confirmation!'"
      :modal-button-close="'Cancel'"
      :modal-button-save="'Delete'"
      @on-open-or-close-modal="onCloseOrOPenModal"
    />
  </div>
</template>
