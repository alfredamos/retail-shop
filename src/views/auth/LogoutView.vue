<script lang="ts" setup>
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
//import Modal from "@/utils/Modal.vue"
import Modal from "@/utils/Modal.vue"

const router = useRouter();

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logOut();
  router.push("/login");
};

const backToLastPage = () => {
  router.push("/");
};
</script>

<template>
  <Modal>
    <div
      className="card-header d-flex justify-content-center align-content-center bg-transparent"
    >
      <h4 className="fw-bold">Logout Confirmation!</h4>
    </div>
    <div
      className="card-body p-3 d-flex align-content-center justify-content-between p-5"
    >
      <p className="lead text-start">
        This is the logout page of the product center. PLease click the logout
        button below to log out otherwise click the cancel button to return to
        the previous page.
      </p>
    </div>
    <div
      className="card-footer bg-white p-4 d-flex justify-content-between w-100"
    >
      <button
        @click="backToLastPage"
        className="btn btn-outline-secondary btn-lg w-50 rounded-5 fw-bold p-2"
      >
        Back
      </button>
      <button
        className="btn btn-outline-primary btn-lg w-50 rounded-5 fw-bold p-2"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </Modal>
</template>
