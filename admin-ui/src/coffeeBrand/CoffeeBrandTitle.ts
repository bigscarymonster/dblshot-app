import { CoffeeBrand as TCoffeeBrand } from "../api/coffeeBrand/CoffeeBrand";

export const COFFEEBRAND_TITLE_FIELD = "name";

export const CoffeeBrandTitle = (record: TCoffeeBrand): string => {
  return record.name || record.id;
};
