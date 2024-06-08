<template>
 <div class="mb-3">
  <label :for="id" class="form-label">{{ labelName }}</label>
    <select :id="id" v-bind="{...$attrs}" v-model="model">
      <slot></slot>
    </select>
 </div>
</template>

<script setup lang="ts">
  const model = defineModel();

const props = defineProps<{
  id: string;
  labelName: string;
}>();
  

</script>

