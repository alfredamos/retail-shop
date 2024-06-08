import { profileUpdateService } from "@/APIRoutes/authRoutes";
import type { AuthResponse } from "@/models/authResponse";
import type { EditProfile } from "@/validations/editProfileValidation";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useEditProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (editProfile: EditProfile) =>
      profileUpdateService.passwordAndProfileUpdate(editProfile),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
}
