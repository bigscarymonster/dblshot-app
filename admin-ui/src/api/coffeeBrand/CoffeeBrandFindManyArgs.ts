import { CoffeeBrandWhereInput } from "./CoffeeBrandWhereInput";
import { CoffeeBrandOrderByInput } from "./CoffeeBrandOrderByInput";

export type CoffeeBrandFindManyArgs = {
  where?: CoffeeBrandWhereInput;
  orderBy?: Array<CoffeeBrandOrderByInput>;
  skip?: number;
  take?: number;
};
