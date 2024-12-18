import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { User } from "@/validations/userValidation";

export const useUserStore = defineStore("user", () => {
  let users = ref<User[]>([]);

  function addUser(user: User) {
    users.value.push(user);
  }

  function deleteUser(id: string) {
    users.value.filter((user) => user.id === id);
  }

  function editUser(user: User) {
    const index = users.value.findIndex((cust) => cust.id === user?.id);
    users.value[index] = user;
  }

  function getAllUsers(usersToAdd: User[]) {
    const allUsers = [...users.value, ...usersToAdd];
    users.value = [...allUsers];
  }

  const currentUsers = computed(() => users);

  return { currentUsers, addUser, deleteUser, editUser, getAllUsers };
});
