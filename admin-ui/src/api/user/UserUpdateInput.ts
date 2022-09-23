import { CoffeeBrandUpdateManyWithoutUsersInput } from "./CoffeeBrandUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  coffeeBrands?: CoffeeBrandUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
