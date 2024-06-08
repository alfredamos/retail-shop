<script lang="ts" setup>
import type UserDto from "@/models/auth/user.model";
import AlertModal from "../../util/AlertModal.vue";

interface Props {
  user: UserDto;
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
  <div class="col col-sm-8 col-8 offset-2 mt-5" v-if="props.user">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h4 class="text-center">User Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name : {{ props.user.name }}</li>
          <li class="list-group-item">Email : {{ props.user.email }}</li>
          <li class="list-group-item">Phone : {{ props.user.phone }}</li>
          <li class="list-group-item">Gender : {{ props.user.gender }}</li>
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
      :modal-message="'Do you really want to delete user?'"
      :modal-title="'Delete User Confirmation!'"
      :modal-button-close="'Cancel'"
      :modal-button-save="'Delete'"
      @on-open-or-close-modal="onCloseOrOPenModal"
    />
  </div>
</template>
