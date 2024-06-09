<template>
  <label :for="id" class="form-label">{{ labelName }}</label>
  <select :id="id" v-bind="{ ...$attrs }" v-model="model">
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
const model = defineModel();

const props = defineProps<{
  id: string;
  labelName: string;
}>();
</script>
