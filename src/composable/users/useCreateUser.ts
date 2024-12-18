import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { userService } from "../../APIRoutes/userRoute";
import { useUserStore } from "@/stores/useUserStore";
import type { User } from "@/validations/userValidation";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const userState = useUserStore();

  return useMutation({
    // mutationFn: (user) => axios.post(`${baseUrl}/users`, user),
    mutationFn: (user: User) => userService.create(user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      userState.addUser(data);
    },
  });
};
