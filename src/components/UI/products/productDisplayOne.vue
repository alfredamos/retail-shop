<script lang="ts" setup>
import AlertModal from '@/util/AlertModal.vue';
import ProductDto from '../../models/products/product.model';

interface Props{
  product: ProductDto;
}

const props = defineProps<Props>()
const emit = defineEmits(['onBackToList', 'onDeleteProduct'])

const onCloseOrOPenModal = (value: boolean) => {
  emit('onDeleteProduct', value)
}

const backToList = () => {
  emit('onBackToList')
}

</script>
<template>
  <div class="col col-sm-8 col-8 offset-2 mt-5" v-if="product">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">Product Detail</h4>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">Name : {{props.product.name}}</li>
            <li class="list-group-item">Brand : {{props.product.brand}}</li>
            <li class="list-group-item">Price : {{props.product.price}}</li>
            <li class="list-group-item">Quantity : {{props.product.quantity}}</li>
            <li class="list-group-item">Category : {{props.product?.category?.name}}</li>
          </ul>
        </div>
        <div class="card-footer">
          <button
          type="button"
            @click="backToList()"
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
  :modal-message="'Do you really want to delete product?'"
  :modal-title="'Delete Product Confirmation!'"
  :modal-button-close="'Cancel'"
  :modal-button-save="'Delete'"
  @on-open-or-close-modal="onCloseOrOPenModal"
  />
    </div>


</template>