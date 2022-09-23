import { CoffeeBrand } from "../coffeeBrand/CoffeeBrand";
import { JsonValue } from "type-fest";

export type User = {
  coffeeBrands?: Array<CoffeeBrand>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
