import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { userService } from "../../APIRoutes/userRoute";
import type { User } from "@/validations/userValidation";

export function useEditUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, user }: { id: string; user: User }) =>
      userService.update(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
