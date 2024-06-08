<script lang="ts" setup>
import { useAuthStore } from "@/stores/useAuthStore";
import {storeToRefs} from "pinia"

const {isAdmin, isLoggedIn} = storeToRefs(useAuthStore());


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link type="button" class="navbar-brand mx-xxl-5" to="/products"
        >Home</router-link
      >
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
                <router-link
                  type="button"
                  class="dropdown-item"
                  to="/change-password"
                  >Change Password</router-link
                >
              </li>
              <li>
                <router-link
                  type="button"
                  class="dropdown-item"
                  to="/edit-profile"
                  >Edit Profile</router-link
                >
              </li>
            </ul>
          </li>
          <li v-if="!isLoggedIn" class="nav-item mx-5">
            <router-link type="button" class="nav-link" to="/login"
              >login</router-link
            >
          </li>
          <li class="nav-item mx-5" v-if="!isLoggedIn">
            <router-link type="button" class="nav-link" to="/signup"
              >Signup</router-link
            >
          </li>
          <li v-if="isLoggedIn" class="nav-item mx-5">
            <router-link
              type="button"
              class="nav-link align-self-auto"
              to="/logout"
              >logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
