import { AxiosResponse } from "axios";

export type AuthUser = {
  id: number;
  name: string;
  lastname: string;
  username: string;
  phone: string;
  active: boolean;
  rol: string;
  imsp: {
    id: number;
    createdAt: string;
    name: string;
    code: number;
  };
  iat: number;
  exp: number;
};

export type UserResponse = AxiosResponse<{
  user: AuthUser;
  access_token: string;
}>;

export type CurrentUserResponse = AxiosResponse<AuthUser>;

export type UpdateResponse = AxiosResponse<{
  success: boolean;
}>;
