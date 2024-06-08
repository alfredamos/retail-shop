import Axios from  "@/interceptors/axios.interceptor"

export class APIAuthService<U,T> {
  constructor(public url: string) {}

  //----> This is used for both login and signup.
  loginAndSignup = async (resource: T) => {
    console.log("In login", {resource, url: this.url});
    const response = await Axios.post<U>(this.url, resource);

    return response?.data;
  };

  //----> This is used for both password-change and profile-update.
  passwordAndProfileUpdate = async (resource: T) => {
    console.log({url: this.url, resource})
    const data = await Axios.patch<U>(this.url, resource);

    return data;
  };
}