import { OrderModel } from "../models/orderModel";
import { OrderProduct } from "../models/OrderProduct";
import { type CartItem } from "@/validations/cartItemValidation";

export class OrderState {
  customerId: string = "";
  cartItems: CartItem[] = [];
  orders: OrderModel[] = [];
  ordersFromDb: OrderModel[] = [];
  order: OrderProduct = null!;
  totalCost: number = 0;
  quantities: number = 0;
}
