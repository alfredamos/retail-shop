import type { Customer } from "@/validations/customerValidation";
import { APIService } from "../services/dataService";

export const customerService = new APIService<Customer>("/customers");

export const customerByUserIdService = new APIService<Customer>(
  "/customers/customer-by-user-id"
);


