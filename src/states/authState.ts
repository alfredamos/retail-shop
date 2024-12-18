import { UserResponse } from "../models/userResponse";

export class AuthState {
  currentUser: UserResponse = null!;
  signIn: UserResponse = null!;
  token: string = "";
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userId: string = "";
}
