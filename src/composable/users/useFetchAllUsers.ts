import { userService } from "@/APIRoutes/userRoute";
import { useQuery } from "@tanstack/vue-query";

export const useFetchAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => userService.getAll(),
  });
};
