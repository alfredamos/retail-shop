<template>
  <div class="row mt-5">
    <div class="col-10 text-start mx-auto">
      <div class="card shadow-lg p-5 border-2 border-primary">
        <div class="card-body p-lg-5">
          <h1 class="text-primary">Admin Panel</h1>
          <table class="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th class="fw-bolder">Customers</th>
                <th class="fw-bolder">Orders</th>
                <th class="fw-bolder">Products</th>
                <th class="fw-bolder">Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <RouterLink
                    class="text-primary fw-bold"
                    to="/admin-customers"
                  >
                    List Customers &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-primary fw-bold" to="/admin-orders">
                    List Orders &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-primary fw-bold" to="/admin-products">
                    List Product &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-primary fw-bold" to="/admin-users">
                    List User &#10148;
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink
                    class="text-secondary fw-bold"
                    to="/admin-customers/create"
                  >
                    Create Customers &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-secondary fw-bold" to="/products">
                    Create Order &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink
                    class="text-secondary fw-bold"
                    to="/admin-products/create"
                  >
                    Create Product &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink
                    class="text-secondary fw-bold"
                    to="/admin-users/create"
                  >
                    Create User &#10148;
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink
                    class="text-success fw-bold"
                    to="/admin-customers"
                  >
                    View Customers &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-success fw-bold" to="/admin-orders">
                    View Order &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-success fw-bold" to="/admin-products">
                    View Product &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-success fw-bold" to="/admin-users">
                    View User &#10146;
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink
                    class="text-warning fw-bold"
                    to="/admin-customers"
                  >
                    Update Customer &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-warning fw-bold" to="/admin-orders">
                    Update Order &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-warning fw-bold" to="/admin-products">
                    Update Product &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-warning fw-bold" to="/admin-users">
                    Update User &#10146;
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink class="text-danger fw-bold" to="/admin-customers">
                    Delete Customers &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-danger fw-bold" to="/admin-orders">
                    Delete Order &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-danger fw-bold" to="/admin-products">
                    Delete Product &#10148;
                  </RouterLink>
                </td>
                <td>
                  <RouterLink class="text-danger fw-bold" to="/admin-users">
                    Delete User &#10146;
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
