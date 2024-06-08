import { APIService } from "../services/dataService";
import { type Product } from "../validations/productValidation";

export const productService = new APIService<Product>("/products");
