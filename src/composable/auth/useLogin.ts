import { loginService } from "@/APIRoutes/authRoutes";
import type { AuthResponse } from "@/models/authResponse";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Login } from "@/validations/loginValidation";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useLogin() {
  const queryClient = useQueryClient();
  const authStore = useAuthStore();

  return useMutation({
    mutationFn: (login: Login) => loginService.loginAndSignup(login),
    onSuccess: (data: AuthResponse) => {
      console.log("In use-login, user : ", data);
      queryClient.invalidateQueries({ queryKey: [""] });
      authStore.login(data);
    },
  });
}
