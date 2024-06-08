<script lang="ts" setup>
import OrderDto from "../../models/orders/order.model";

interface Props {
  orders: OrderDto[];
}

const props = defineProps<Props>();

</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">Order List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead class="bg-primary">
          <tr>
            <th class="fw-bold">Order No.</th>
            <th class="fw-bold">Buyer</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in props.orders">
            <td>{{ order?.id }}</td>
            <td>{{ order?.user?.name }}</td>
            <td>
              <router-link  class="btn btn-outline-primary m-1 btn-sm fw-bold" :to="`/orders/detail/${order.id}`">View</router-link>
              <router-link  class="btn btn-outline-danger m-1 btn-sm fw-bold" :to="`/orders/delete/${order.id}`">Delete</router-link>
              <router-link  class="btn btn-outline-secondary m-1 btn-sm fw-bold" :to="`/orders/edit/${order.id}`">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex flex-column align-items-center justify-content-center p-3"
    >
      <RouterLink
        to="/orders/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create Order
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary btn-lg form-control fw-bold"
      >
        Back To Admin Panel
      </RouterLink>
    </div>
  </div>
</template>
