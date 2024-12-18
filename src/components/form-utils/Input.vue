<template>
  <!-- <div class="mb-3"> -->
  <label :for="$props.id" class="form-label">{{ $props.labelName }}</label>
  <input :id="$props.id" v-bind="{ ...$attrs }" v-model="model" />
  <!-- </div> -->
</template>

<script setup lang="ts">
const model = defineModel();

const props = defineProps<{
  id: string;
  labelName: string;
}>();
</script>
