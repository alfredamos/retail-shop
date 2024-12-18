<template>
  <div class="card w-50 mx-auto">
    <div class="col-md-10 offset-1">
      <h4 class="text-center text-success">{{ user.name }}'s Details</h4>
      <hr />
      <article class="d-flex justify-content-between">
        <span>{{ firstName }}</span>
        <span> Photo <img src="" alt="" /> </span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Email</span>
        <span>{{ user.email }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Phone</span>
        <span>{{ user.phone }}</span>
      </article>
      <hr />
      <article class="d-flex justify-content-between">
        <span>Gender</span>
        <span>{{ user.gender }}</span>
      </article>
      <hr />
      <div class="d-flex justify-content-between">
        <button
          class="btn btn-outline-secondary w-50 fw-bold rounded-5"
          @click="backToList"
        >
          Back
        </button>
        <button
          class="btn btn-outline-danger w-50 fw-bold rounded-5"
          @click="deleteClick"
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type User } from "../../validations/userValidation";

const props = defineProps<{
  user: User;
}>();

const firstName = computed(() => props.user?.name.split(" ")[0]);

const emits = defineEmits(["onDeleteClick", "onBackToList"]);

const deleteClick = () => {
  emits("onDeleteClick");
};

const backToList = () => {
  emits("onBackToList");
};
</script>

<style scoped></style>
