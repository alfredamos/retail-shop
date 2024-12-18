import { storeToRefs } from "pinia";
import type { AdminUser } from "@/models/adminUser";
import { Role } from "@/models/role";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Signup } from "@/validations/signupValidation";

export function adminSignupNewUser(initialSignup: Signup) {
  const { authUser } = storeToRefs(useAuthStore());

  if (!authUser.value?.currentUser) return initialSignup;

  if (authUser.value?.currentUser?.role?.includes(Role.Admin)) {
    console.log("At point 1, am in!");
    const adminUser: AdminUser = {
      id: authUser?.value?.currentUser.id as string,
      name: authUser?.value?.currentUser.name,
      email: authUser?.value?.currentUser.email,
      phone: authUser?.value?.currentUser.phone,
      role: authUser?.value?.currentUser?.role,
      token: authUser?.value?.token,
    };
    console.log("At point 2, am out!", adminUser);
    const newSignupByAdmin = {
      ...initialSignup,
      adminUser: authUser?.value?.currentUser ? adminUser : {},
    };
    console.log({ newSignupByAdmin });
    return newSignupByAdmin;
  }
}
