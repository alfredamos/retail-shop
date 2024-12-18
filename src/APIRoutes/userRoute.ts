import type { User } from "@/validations/userValidation";
import { APIService } from "../services/dataService";

export const userService = new APIService<User>("/users");
