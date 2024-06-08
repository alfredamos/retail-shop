import {
  passwordChangeService,
} from "@/APIRoutes/authRoutes";
import type { ChangePassword } from "@/validations/changePasswordValidation";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useChangePassword() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (changePassword: ChangePassword) => passwordChangeService.passwordAndProfileUpdate(changePassword),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
}
