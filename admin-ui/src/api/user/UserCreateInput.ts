import { CoffeeBrandCreateNestedManyWithoutUsersInput } from "./CoffeeBrandCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  coffeeBrands?: CoffeeBrandCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
