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
import ListOrderView from "@/views/orders/ListOrderView.vue";
import CustomerAllOrdersView from "@/views/orders/CustomerAllOrdersView.vue";
import ProfileView from "@/views/orders/ProfileView.vue";
import ListOrderAdminView from "@/views/orders/ListOrderAdminView.vue";
import ListCustomerAdminView from "@/views/customers/ListCustomerAdminView.vue";
import ListProductAdminView from "@/views/products/ListProductAdminView.vue";
import ListUserAdminView from "@/views/users/ListUserAdminView.vue";
import AdminPanelView from "@/views/admin/AdminPanelView.vue";
import { privateRoute } from "@/components/view-util/routes-protector/private-route";
import CreateCustomerView from "@/views/customers/CreateCustomerView.vue";
import EditCustomerView from "@/views/customers/EditCustomerView.vue";
import DeleteCustomerView from "@/views/customers/DeleteCustomerView.vue";
import DetailCustomerView from "@/views/customers/DetailCustomerView.vue";
import DetailOrderAdminView from "@/views/orders/DetailOrderAdminView.vue";
import DetailOrderView from "@/views/orders/DetailOrderView.vue";
import CreateProductView from "@/views/products/CreateProductView.vue";
import DeleteProductView from "@/views/products/DeleteProductView.vue";
import EditProductView from "@/views/products/EditProductView.vue";
import SingleOrderView from "@/views/orders/SingleOrderView.vue";

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
      path: "/admin-panel",
      name: "admin-panel",
      beforeEnter: adminRoute,
      component: AdminPanelView,
    },
    {
      path: "/admin-customers",
      name: "admin-customers",
      beforeEnter: adminRoute,
      component: ListCustomerAdminView,
    },
    {
      path: "/admin-customers/create",
      name: "admin-customers-create",
      beforeEnter: adminRoute,
      component: CreateCustomerView,
    },
    {
      path: "/admin-customers/detail/:id",
      name: "admin-customers-detail",
      beforeEnter: adminRoute,
      component: DetailCustomerView,
    },
    {
      path: "/admin-customers/delete/:id",
      name: "admin-customers-delete",
      beforeEnter: adminRoute,
      component: DeleteCustomerView,
    },
    {
      path: "/admin-customers/edit/:id",
      name: "admin-customers-edit",
      beforeEnter: adminRoute,
      component: EditCustomerView,
    },
    {
      path: "/customers/create",
      name: "customers-create",
      beforeEnter: protectedRoute,
      component: CreateCustomerView,
    },
    {
      path: "/customers/detail/:id",
      name: "customers-detail",
      beforeEnter: protectedRoute,
      component: ListCustomerAdminView,
    },
    {
      path: "/customers/delete/:id",
      name: "customers-delete",
      beforeEnter: protectedRoute,
      component: ListCustomerAdminView,
    },
    {
      path: "/customers/edit/:id",
      name: "customers-edit",
      beforeEnter: protectedRoute,
      component: ListCustomerAdminView,
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
    {
      path: "/admin-orders",
      name: "admin-orders",
      beforeEnter: adminRoute,
      component: ListOrderView,
    },
    {
      path: "/admin-orders/create",
      name: "admin-orders-create",
      beforeEnter: adminRoute,
      component: ListOrderAdminView,
    },
    {
      path: "/admin-orders/detail/:id",
      name: "admin-orders-detail",
      beforeEnter: adminRoute,
      component: DetailOrderAdminView,
    },
    {
      path: "/admin-orders/delete/:id",
      name: "admin-orders-delete",
      beforeEnter: adminRoute,
      component: ListOrderAdminView,
    },
    {
      path: "/admin-orders/edit/:id",
      name: "admin-orders-edit",
      beforeEnter: adminRoute,
      component: ListOrderAdminView,
    },

    {
      path: "/orders",
      name: "orders",
      beforeEnter: protectedRoute,
      component: ListOrderView,
    },
    {
      path: "/orders/detail/:id",
      name: "orders-detail",
      beforeEnter: protectedRoute,
      component: DetailOrderView,
    },
    {
      path: "/orders/users/:userId",
      name: "orders-by-user",
      beforeEnter: protectedRoute,
      component: CustomerAllOrdersView,
    },
    {
      path: "/products",
      name: "products",
      beforeEnter: protectedRoute,
      component: ProductListView,
    },
    {
      path: "/single-product/:id",
      name: "single-product",
      beforeEnter: protectedRoute,
      component: SingleOrderView,
    },
    {
      path: "/product-details/:id",
      name: "product-details",
      beforeEnter: protectedRoute,
      component: DetailProductView,
    },
    {
      path: "/profiles/:userId",
      name: "user-profile",
      beforeEnter: protectedRoute,
      component: ProfileView,
    },
    {
      path: "/admin-products",
      name: "admin-products",
      beforeEnter: adminRoute,
      component: ListProductAdminView,
    },
    {
      path: "/admin-products/create",
      name: "admin-products-create",
      beforeEnter: adminRoute,
      component: CreateProductView,
    },
    {
      path: "/admin-products/detail/:id",
      name: "admin-products-detail",
      beforeEnter: adminRoute,
      component: DetailProductView,
    },
    {
      path: "/admin-products/delete/:id",
      name: "admin-products-delete",
      beforeEnter: adminRoute,
      component: DeleteProductView,
    },
    {
      path: "/admin-products/edit/:id",
      name: "admin-products-edit",
      beforeEnter: adminRoute,
      component: EditProductView,
    },
    {
      path: "/admin-users",
      name: "admin-users",
      beforeEnter: adminRoute,
      component: ListUserAdminView,
    },
    {
      path: "/admin-users/create",
      name: "admin-users-create",
      beforeEnter: adminRoute,
      component: SignupView,
    },
    {
      path: "/admin-users/detail/:id",
      name: "admin-users-detail",
      beforeEnter: protectedRoute,
      component: ListUserAdminView,
    },
    {
      path: "/admin-users/delete/:id",
      name: "admin-users-delete",
      beforeEnter: protectedRoute,
      component: ListUserAdminView,
    },
    {
      path: "/admin-users/edit/:id",
      name: "admin-users-edit",
      beforeEnter: adminRoute,
      component: EditProfileView,
    },
  ],
});

export default router;
