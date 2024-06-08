<script lang="ts" setup>
import EditProfileForm from "@/components/forms/auth/EditProfileForm.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from '../../stores/useAuthStore';
import { useEditProfile } from "@/composable/auth/useEditProfile";
import type { Gender } from "@/models/gender";
import type { EditProfile } from "@/validations/editProfileValidation";

const router = useRouter();
const authStore = useAuthStore();
const user = authStore?.authUser?.currentUser;

const { mutateAsync: userUpdateProfile } = useEditProfile();

const editProfileSubmit = (editProfileDto: EditProfile) => {
  userUpdateProfile(editProfileDto).then(() => {
    router.push("/");
  });
};

const backToList = () => {
  router.push('/');
};
</script>
<template>
  <EditProfileForm
    v-if="user"
    form-name="Edit Profile"
    :initial-value="{ ...user, password: '', gender: user.gender as Gender }"
    @on-back-to-list="backToList"
    @on-edit-profile="editProfileSubmit"
  />
</template>
