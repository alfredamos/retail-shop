import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { AuthState } from "@/states/authState";
import type { AuthResponse } from "@/models/authResponse";
import type { UserResponse } from "@/models/userResponse";
import { Role } from "@/models/role";

const initialAuthUser: AuthState = {
  currentUser: null!,
  signIn: null!,
  token: "",
  isAdmin: false,
  isLoggedIn: false,
  userId: "",
};

export const useAuthStore = defineStore("authUser", () => {
  let authUser = ref<AuthState>(initialAuthUser);

  function login(authResponse: AuthResponse) {
    authUser.value.signIn = authResponse?.signIn!;
    authUser.value.isAdmin = authResponse?.user?.role === Role.Admin;
    authUser.value.isLoggedIn = authResponse?.isLoggedIn!;
    authUser.value.currentUser = authResponse?.user!;
    authUser.value.token = authResponse?.token!;
    authUser.value.userId = authResponse?.user?.id!;

    localStorage.setItem("auth", JSON.stringify(authUser.value));
  }

  function getLocalAuth() {
    const auth = JSON.parse(localStorage.getItem("auth")!) as AuthState;
    return auth;
  }

  const isAdmin = computed(
    () => authUser.value?.isAdmin || getLocalAuth()?.isAdmin
  );

  const name = computed(() => {
    return (
      authUser.value?.currentUser?.name || getLocalAuth()?.currentUser?.name
    );
  });

  const isLoggedIn = computed(
    () => authUser.value?.isLoggedIn || getLocalAuth()?.isLoggedIn
  );

  const userId = computed(
    () => authUser.value?.userId || getLocalAuth()?.userId
  );

  const token = computed(() => authUser.value?.token || getLocalAuth()?.token);

  function logOut() {
    authUser.value = { ...initialAuthUser };
    localStorage.setItem("auth", JSON.stringify(authUser.value));
  }

  function signUp(authUserResponse: AuthResponse) {
    login(authUserResponse);
  }

  function getSignupInfo(signIn: UserResponse) {
    authUser.value.signIn = signIn;
  }

  return {
    authUser,
    logOut,
    login,
    name,
    signUp,
    getSignupInfo,
    isAdmin,
    isLoggedIn,
    userId,
    token,
  };
});
