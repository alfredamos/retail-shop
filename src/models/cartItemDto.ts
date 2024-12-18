import { type Order } from "../validations/orderValidation";
import { type Product } from "../validations/productValidation";

export default class CartItemDto {
  id?: string = ""; 
  orderId?: string = "";
  productId: string = "";
  price: number = 0;
  quantity: number = 0;
  order?: Order;
  product?: Product;
}
