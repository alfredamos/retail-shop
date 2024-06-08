<script lang="ts" setup>
import { ref} from 'vue';
import type CategoryDto from '../../models/categories/category.model';

interface Props{
  initialValue: CategoryDto;
  
}

const props = defineProps<Props>()
const category = ref<CategoryDto>(props.initialValue)

const emit = defineEmits(['onBackToList', 'onSubmitCategory'])

const submitCategory = () => {
  console.log("in category form, category : ", category.value)
  emit('onSubmitCategory', category.value)
}

const backToList = () => {
  emit('onBackToList')
}
</script>

<template>
  <div class="row mt-5">
  <div class="col col-sm-8 col-md-8 offset-2">
    <div class="card">
      <form @submit.prevent="submitCategory">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">Category Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              name="name"
              required
              v-model.trim="category.name"
              type="text"
              class="form-control"
            />            
          </div>          
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control fw-bold">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary form-control fw-bold"
            @click="backToList"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>