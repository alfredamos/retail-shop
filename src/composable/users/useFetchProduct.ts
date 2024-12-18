import { userService } from "@/APIRoutes/userRoute";
import { useQuery } from "@tanstack/vue-query";

export const useFetchUser = (id: string) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => userService.getOne(id),
  });
};
