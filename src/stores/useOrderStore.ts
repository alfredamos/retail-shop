import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import type { OrderState } from "@/states/orderState";
import type { OrderProduct } from "@/models/OrderProduct";
import type { OrderModel } from "@/models/orderModel";
import { computed, type RefSymbol } from "@vue/reactivity";
import type { CartItem } from "@/validations/cartItemValidation";

const initialState: OrderState = {
  customerId: "",
  cartItems: [],
  orders: [],
  ordersFromDb: [],
  order: { customerId: "", cartItems: [] },
  totalCost: 0,
  quantities: 0,
};

export const useOrderStore = defineStore("order", () => {
  let orderState = ref<OrderState>(initialState);
  let quantities = ref<number>(1);
  let totalCost = ref<number>(1);

  function addOrder(order: OrderModel) {
    orderState.value.cartItems = order?.cartItems;
    orderState.value.orders.push(order);
    orderState.value.order = { ...order };
    orderState.value.customerId = order?.customerId;
    totalCostAndQuantities(order?.cartItems);

    localStorage.setItem("order", JSON.stringify(orderState.value));
  }

  function addOrderDb(order: OrderModel) {
    orderState.value.ordersFromDb.push(order);
  }

  function clearOrder() {
    orderState.value = { ...initialState };
    localStorage.removeItem("order");
  }

  function clearCartItems() {
    orderState.value.cartItems = initialState.cartItems;
  }

  function clearTotalCostAndQuantities() {
    orderState.value.quantities = initialState.quantities;
    orderState.value.totalCost = initialState.totalCost;
    localStorage.removeItem("order");
  }

  function deleteOrder(id: string) {
    const filteredOrders = orderState.value.orders.filter(
      (order) => order.id === id
    );

    orderState.value.orders = [...filteredOrders];
  }

  function editOrder(order: OrderModel) {
    orderState.value.orders.forEach((ord, index, _) => {
      if (ord.customerId === order.customerId) {
        orderState.value.cartItems = order.cartItems;
        orderState.value.customerId = order.customerId;
        orderState.value.orders[index] = order;
      }
    });

    totalCostAndQuantities(order.cartItems);
  }

  function getAllOrders(ordersToAdd: OrderModel[]) {
    const allOrders = [...orderState.value.orders, ...ordersToAdd];
    orderState.value.orders = [...allOrders];
  }

  function getAllOrdersFromDb(ordersToAdd: OrderModel[]) {
    const allOrders = [...orderState.value.ordersFromDb, ...ordersToAdd];
    orderState.value.ordersFromDb = [...allOrders];
  }

  function findOrderByCustomerId(customerId: string) {
    orderState.value.order = orderState.value.orders?.find(
      (order) => order.customerId === customerId
    ) as OrderProduct;

    orderState.value.cartItems = orderState.value.order.cartItems;
    orderState.value.customerId = orderState.value.order.customerId;
  }

  function totalCostAndQuantities(cartItems: CartItem[]) {
    console.log("In use-order-store, cartItems : ", cartItems);

    orderState.value.totalCost = cartItems?.reduce(
      (accum, current) => accum + current.price * current.quantity,
      0
    );
    orderState.value.quantities = cartItems?.reduce(
      (accum, current) => accum + current.quantity,
      0
    );
  }

  const currentOrderState = computed(() => orderState.value);
  const order = computed(() => orderState.value.order);
  const cartItems = computed(() => orderState.value.cartItems);

  watchEffect(() => {
    quantities.value = orderState.value.quantities;
    totalCost.value = orderState.value.totalCost;
  });

  return {
    addOrder,
    addOrderDb,
    cartItems,
    clearCartItems,
    clearOrder,
    currentOrderState,
    clearTotalCostAndQuantities,
    deleteOrder,
    editOrder,
    findOrderByCustomerId,
    getAllOrders,
    getAllOrdersFromDb,
    order,
    quantities,
    totalCost,
    totalCostAndQuantities,
  };
});
