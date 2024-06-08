import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import ChangePasswordView from "@/views/auth/ChangePasswordView.vue";
import LogoutView from "@/views/auth/LogoutView.vue";
import SignupView from "@/views/auth/SignupView.vue";
import EditProfileView from "@/views/auth/EditProfileView.vue";
import MustLoginView from "@/views/auth/MustLoginView.vue";
import NotAllowedView from "@/views/auth/NotAllowedView.vue";
import { adminRoute } from "@/components/view-util/routes-protector/admin-route";
import { protectedRoute } from "@/components/view-util/routes-protector/protected-route";
import ProductListView from "@/views/products/ProdListView.vue";
import DetailProductView from "@/views/products/DetailProductView.vue";
import CartView from "@/views/orders/CartView.vue";
import CheckoutView from "@/views/orders/CheckOutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: protectedRoute,
      component: ProductListView,
    },
    {
      path: "/change-password",
      name: "change-password",
      beforeEnter: protectedRoute,
      component: ChangePasswordView,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      beforeEnter: protectedRoute,
      component: EditProfileView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },
    {
      path: "/must-login",
      name: "must-login",
      component: MustLoginView,
    },
    {
      path: "/not-allowed",
      name: "not-allowed",
      component: NotAllowedView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/products",
      name: "products",
      beforeEnter: protectedRoute,
      component: ProductListView,
    },
    {
      path: "/product-details/:id",
      name: "product-details",
      beforeEnter: protectedRoute,
      component: DetailProductView,
    },
    {
      path: "/cart",
      name: "cart",
      beforeEnter: protectedRoute,
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      beforeEnter: protectedRoute,
      component: CheckoutView,
    },

    /* {
      path: "/admin-panel",
      name: "admin-panel",
      beforeEnter: adminRoute,
      component: AdminPanelView,
    }, */
  ],
});

export default router;
