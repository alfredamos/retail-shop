import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { userService } from "../../APIRoutes/userRoute";

export function useDeleteUser(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => userService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });
}
