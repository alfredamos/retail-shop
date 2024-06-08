<script lang="ts" setup>
import { ref } from 'vue';
import type CartItemDto from '../../models/cartItems/cartItem.model';
import type ProductDto from '../../models/products/product.model';

interface Props{
  initialValue: CartItemDto;
  products: ProductDto[];
  
}

const props = defineProps<Props>()
const cartItem = ref<CartItemDto>(props.initialValue)

const emit = defineEmits(['onBackToList', 'onSubmitCartItem'])

const submitCartItem = () => {
  emit('onSubmitCartItem', cartItem.value)
}

const backToList = () => {
  emit('onBackToList')
}
</script>

<template>
  <div class="row mt-5">
  <div class="col col-sm-8 col-md-8 offset-2">
    <div class="card">
      <form @submit.prevent="submitCartItem">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">CartItem Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="price" class="form-label"> Price </label>
            <input
              id="price"
              required
              v-model.number="cartItem.price"
              type="number"
              class="form-control"
            />            
          </div>          
          <div class="mb-3">
            <label for="quantity" class="form-label"> Quantity </label>
            <input
              id="quantity"
              required
              v-model.number="cartItem.quantity"
              type="number"
              class="form-control"
            />            
          </div>  
          <div class="mb-3">
            <label for="productId" class="form-label">Product</label>
            <select id="productId" v-model.trim="cartItem.productId" class="form-select">
              <option>Please select product</option>
              <option
                v-for="product in products"
                :value="product.id"
                :id="product.id"
              >
                {{ product.name }}
              </option>
            </select>
          </div>        
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control fw-bold">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary form-control fw-bold"
            @click="backToList"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>