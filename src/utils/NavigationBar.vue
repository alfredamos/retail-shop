<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { useOrderStore } from "@/stores/useOrderStore";
import { storeToRefs } from "pinia";
import { FaShoppingCart } from "vue3-icons/fa";

const { quantities } = storeToRefs(useOrderStore());
const { isLoggedIn, authUser, name } = storeToRefs(useAuthStore());

console.log({
  quantities: quantities.value,
  isLoggedIn: isLoggedIn.value,
  authUser: authUser.value,
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3">
    <div class="container">
      <router-link type="button" class="navbar-brand mx-xxl-5" to="/products">
        <span
          v-if="isLoggedIn"
          class="fst-italic fs-6 fw-bold d-flex align-content-center justify-content-center"
        >
          Retail-Shop
        </span></router-link
      >
      <div class="d-flex justify-content-between align-content-center" v-if="isLoggedIn">
        Welcome {{ name }}
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item" v-if="isAdmin">
            <router-link type="button" class="nav-link mx-xxl-5" to="/users"
              >Users</router-link
            >
          </li> -->
        </ul>
        <ul class="d-flex navbar-nav">
          <li v-if="isLoggedIn" class="nav-item dropdown mx-5">
            <router-link
              type="button"
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Settings
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link type="button" class="dropdown-item" to="/change-password"
                  >Change Password</router-link
                >
              </li>
              <li>
                <router-link type="button" class="dropdown-item" to="/edit-profile"
                  >Edit Profile</router-link
                >
              </li>
            </ul>
          </li>
          <li v-if="!isLoggedIn" class="nav-item mx-5">
            <router-link type="button" class="nav-link" to="/login">login</router-link>
          </li>
          <li class="nav-item mx-5" v-if="!isLoggedIn">
            <router-link type="button" class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li
            v-if="isLoggedIn"
            class="nav-item mx-5 d-flex justify-content-center align-content-center"
          >
            <router-link type="button" class="nav-link align-self-auto" to="/logout">
              logout
            </router-link>
            <router-link
              v-if="quantities"
              type="button"
              class="nav-link align-self-auto mx-5"
              to="/cart"
            >
              <div className="position-relative">
                <FaShoppingCart
                  class="alf"
                  size="1.8rem"
                  color="gray"
                  style="align-self: center"
                />
                <span
                  class="position-absolute top-0 bg-secondary p-1 start-100 translate-middle text-white border border-light fs-6 fw-bold px-2"
                  style="display: inline-block; border-radius: 100%"
                >
                  {{ quantities ? quantities : "" }}
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.alf {
  vertical-align: middle;
}
</style>
