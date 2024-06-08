<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/useAuthStore";

import { BiLogOut } from "vue3-icons/bi";
import { BsBasket } from "vue3-icons/bs";
import { CgProfile } from "vue3-icons/cg";
import { FaProductHunt } from "vue3-icons/fa";
import { RiLockPasswordFill } from "vue3-icons/ri";
import { RiAdminFill } from "vue3-icons/ri";
import { ImProfile } from "vue3-icons/im";

import NavBar from "../src/utils/NavigationBar.vue";
import { storeToRefs } from "pinia";

const { authUser, isLoggedIn } = storeToRefs(useAuthStore());
</script>

<template>
  <div class="row">
    <div class="col-12">
      <NavBar />
    </div>
  </div>

  <div class="row">
    <div v-if="isLoggedIn" class="col-2 col-sm-2 col-container sidebar">
      <h4 class="text-start mb-5 mx-3">Sidebar</h4>
      <div class="text-start mb-5 fw-bold">
        <RouterLink to="/change-password" class="stretch-routerRouterLink text-secondary">
          <RiLockPasswordFill class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink to="/edit-profile" class="stretch-routerRouterLink text-secondary">
          <CgProfile class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink to="/logout" class="stretch-routerRouterLink text-secondary">
          <BiLogOut class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink to="/orders" class="stretch-routerRouterLink text-secondary">
          <BsBasket class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink to="/products" class="stretch-routerRouterLink text-secondary">
          <FaProductHunt class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink
          :to="`/profiles/${authUser?.currentUser?.id}`"
          class="stretch-routerRouterLink text-secondary"
        >
          <ImProfile class="mx-3" color="whitesmoke" size="30px" />
        </RouterLink>
      </div>
      <div class="text-start mb-5 fw-bold">
        <RouterLink
          to="/admin-main-panel"
          class="stretch-routerRouterLink text-secondary"
        >
          <!-- <GrUserAdmin class="mx-3 text-white" color="white" size="30px" /> -->
          <RiAdminFill class="mx-3" size="30px" color="whitesmoke" />
        </RouterLink>
      </div>
    </div>
    <div class="col-10">
      <RouterView />
    </div>
  </div>
</template>
