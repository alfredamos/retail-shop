import { signupService } from "@/APIRoutes/authRoutes";
import type { AuthResponse } from "@/models/authResponse";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Signup } from "@/validations/signupValidation";
import {useMutation, useQueryClient} from "@tanstack/vue-query"



export function useSignup(){
  const queryClient = useQueryClient();
  const authStore = useAuthStore();

  return useMutation({
    mutationFn: (signup: Signup) => signupService.loginAndSignup(signup),
    onSuccess: (data: AuthResponse) => {
      queryClient.invalidateQueries({queryKey: ['auth']});
      authStore.signUp(data)
    }
  });
}