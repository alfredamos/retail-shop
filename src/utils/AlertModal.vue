<script lang="ts" setup>
interface Props {
  modalMessage: string;
  modalTitle: string;
  modalButtonClose: string;
  modalButtonSave: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["onDeleteResource"]);

const modalButtonSubmit = (value: boolean) => {
  emit("onDeleteResource", value);
};
</script>
<template>
  <div
    class="modal"
    id="exampleModal"
    tab-index="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ props.modalTitle }}
          </h5>
          <button
            type="button"
            class="btn-close btn-light"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="modalButtonSubmit(false)"
          ></button>
        </div>
        <div class="modal-body">{{ props.modalMessage }}</div>
        <div class="modal-footer d-flex justify-content-start">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click="modalButtonSubmit(false)"
          >
            {{ props.modalButtonClose }}
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-dismiss="modal"
            @click="modalButtonSubmit(true)"
          >
            {{ props.modalButtonSave }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
