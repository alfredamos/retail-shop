<template>
  <!-- <div class="mb-3"> -->
  <label :for="id" class="form-label">{{ props.labelName }}</label>
  <textarea :id="id" v-bind="{ ...$attrs }" v-model="model"></textarea>
  <!-- </div> -->
</template>

<script setup lang="ts">
const model = defineModel();

const props = defineProps<{
  id: string;
  labelName: string;
}>();
</script>
