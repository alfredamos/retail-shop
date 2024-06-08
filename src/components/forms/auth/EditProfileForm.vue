<script lang="ts" setup>
import { type EditProfile } from "@/validations/editProfileValidation";
import { ref, toRefs } from "vue";
import Input from "@/components/form-utils/Input.vue";
import Select from "@/components/form-utils/Select.vue";
import Button from "@/components/form-utils/Button.vue";

interface Props {
  initialValue: EditProfile;
  formName: string;
}

const props = defineProps<Props>();
const { formName, initialValue } = toRefs(props);
const emit = defineEmits(["onEditProfile", "onBackToList"]);

console.log("In edit-profile-form, initialValue : ", initialValue.value)

const editProfile = ref<EditProfile>(initialValue.value);

const editProfileSubmit = () => {
  emit("onEditProfile", editProfile.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="card w-50 mx-auto">
      <form @submit.prevent="editProfileSubmit">
        <div class="card-header">
          <h4 class="text-center">Profile Update Form</h4>
        </div>
        <div class="card-body">
          <Input
            id="name"
            name="name"
            v-model.trim="editProfile.name"
            labelName="Name"
            type="text"
            required
            class="form-control"
          />
          <Input
            id="email"
            name="email"
            v-model.trim="editProfile.email"
            hidden
            labelName="Email"
            type="email"
            class="form-control"
          />
          <Input
            id="phone"
            name="phone"
            v-model.trim="editProfile.phone"
            labelName="Phone"
            type="tel"
            required
            class="form-control"
          />
          <Input
            id="password"
            name="password"
            labelName="Password"
            v-model.trim="editProfile.password"
            type="password"
            required
            class="form-control"
          />
          <Select
            id="gender"
            labelName="Gender"
            name="gender"
            v-model.trim="editProfile.gender"
            class="form-select"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>
        <div class="card-footer d-flex justify-content-between">        
          <Button
            type="button"
            class="btn btn-outline-secondary w-50 fw-bold rounded-3"
            @click="backToList"
          >
            Back
          </Button>
          <Button
            type="submit"
            class="btn btn-outline-primary w-50 fw-bold rounded-3"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
</template>
