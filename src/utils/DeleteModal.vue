<template>
  <Modal>
    <div
      class="card-header bg-transparent d-flex justify-content-center align-content-center"
    >
      <h4 class="pb-4 fw-bold">{{ deleteTitle }}</h4>
    </div>

    <div class="card-body p-3 d-flex align-content-center justify-content-between p-5">
      <p class="text-muted text-start fts">
        {{ deleteMessage }}
      </p>
    </div>

    <div class="card-footer bg-white p-4 text-center d-flex">
      <button
        type="button"
        class="btn btn-outline-secondary w-50 fw-bold rounded-5"
        @click="deleteResource(false)"
      >
        Back
      </button>
      <button
        type="button"
        class="btn btn-outline-danger w-50 fw-bold rounded-5"
        @click="deleteResource(true)"
      >
        Delete
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";

const props = defineProps<{
  deleteMessage: string;
  deleteTitle: string;
}>();

const emit = defineEmits(["onDeleteResource"]);

const deleteResource = (value: boolean) => {
  emit("onDeleteResource", value);
};
</script>

<style scoped>
.fts {
  font-weight: 200;
  font-size: 1.2rem;
}
</style>
