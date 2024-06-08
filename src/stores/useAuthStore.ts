import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { AuthState } from "@/states/authState";
import type { AuthResponse } from "@/models/authResponse";
import type { UserResponse } from "@/models/userResponse";

const initialAuthUser: AuthState = {
  currentUser: null!,
  signIn: null!,
  token: "",
  isAdmin: false,
  isLoggedIn: false,
};

export const useAuthStore = defineStore("authUser", () => {
  let authUser = ref<AuthState>(initialAuthUser);

  function login(authResponse: AuthResponse) {
    const { user, ...rest } = authResponse;
    authUser.value = { ...rest, currentUser: user } as AuthState;

    localStorage.setItem("auth", JSON.stringify(authUser.value));
  }

  function getLocalAuth() {
    const auth = JSON.parse(localStorage.getItem("auth")!) as AuthState;
    return auth;
  }

  const isAdmin = computed(
    () => authUser.value?.isAdmin || getLocalAuth()?.isAdmin
  );
  const isLoggedIn = computed(
    () => authUser.value?.isLoggedIn || getLocalAuth()?.isLoggedIn
  );
  const userId = computed(
    () => authUser.value?.currentUser?.id || getLocalAuth()?.currentUser?.id
  );
  const token = computed(() => authUser.value?.token || getLocalAuth()?.token);

  function logOut() {
    authUser.value = { ...initialAuthUser };
    localStorage.setItem("auth", JSON.stringify(authUser.value));
  }

  function signUp(authUserResponse: AuthResponse) {
    login(authUserResponse);
  }

  function getSignupInfo(user: UserResponse) {
    authUser.value.signIn = user;
  }

  return {
    authUser,
    logOut,
    login,
    signUp,
    getSignupInfo,
    isAdmin,
    isLoggedIn,
    userId,
    token,
  };
});
