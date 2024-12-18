import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";

export function protectedRoute(
  to: any,
  from: any,
  next: (name?: string) => void
) {
  const { isLoggedIn, authUser } = storeToRefs(useAuthStore());
  console.log(
    "In protected-route, isLoggedIn : ",
    isLoggedIn.value,
    authUser.value
  );

  if (isLoggedIn.value) {
    next();
  } else {
    next("/must-login");
  }
}
