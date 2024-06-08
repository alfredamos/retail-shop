<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ labelName }}</label>
    <input :id="id" v-bind="{ ...$attrs }" v-model="model" />
  </div>
</template>

<script setup lang="ts">

const model = defineModel();

const props = defineProps<{
  id: string;
  labelName: string;
}>();
</script>
