<script lang="ts" setup>
import { ref } from 'vue';
import type OrderDto from '../../models/orders/order.model';
import UserDto from '../../models/auth/user.model';

interface Props{
  initialValue: OrderDto;
  users: UserDto[];
  
}

const props = defineProps<Props>()
const order = ref<OrderDto>(props.initialValue)

const emit = defineEmits(['onBackToList', 'onSubmitOrder'])

const submitOrder = () => {
  emit('onSubmitOrder', order.value)
}

const backToList = () => {
  emit('onBackToList')
}
</script>

<template>
  <div class="row mt-5">
  <div class="col col-sm-8 col-md-8 offset-2">
    <div class="card">
      <form @submit.prevent="submitOrder">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">Order Form</h4>
        </div>
        <div class="card-body">            
          <div class="mb-3">
            <label for="userId" class="form-label">User</label>
            <select id="userId" v-model.trim="order.userId" class="form-select">
              <option>Please select user</option>
              <option
                v-for="user in users"
                :value="user.id"
                :id="user.id"
              >
                {{ user.name }}
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