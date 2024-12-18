<template>
  <DisplayOneCustomer
    v-if="!!customer"
    :customer="customer"
    @onBackToList="backToListHandler"
    @onDeleteClick="deleteClickHandler"
  />

  <DeleteModal
    v-if="showModal"
    deleteTitle="Customer Delete Confirmation!"
    :deleteMessage="`Do you really want to delete this customer : ${customer?.name}?`"
    @onDeleteResource="deleteHandler"
  />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import DisplayOneCustomer from "@/UI/customers/DisplayOneCustomer.vue";
import DeleteModal from "@/utils/DeleteModal.vue";
import { useDeleteCustomer } from "@/composable/customers/useDeleteCustomer";
import { ref } from "vue";
import { useFetchCustomer } from "@/composable/customers/useFetchCustomer";

const showModal = ref(false);
const id = useRoute()?.params?.id as string;

const { data: customer } = useFetchCustomer(id);

const { mutateAsync } = useDeleteCustomer(id!);

const router = useRouter();

const backToListHandler = () => {
  router.push("/admin-customers");
};

const deleteClickHandler = () => {
  showModal.value = true;
};

const deleteHandler = (value: boolean) => {
  if (value) {
    mutateAsync()
      .then(() => {
        router.push("/admin-customers");
      })
      .catch((error: any) => console.log(error));
  } else {
    router.push("/admin-customers");
  }
};
</script>

<style scoped></style>
