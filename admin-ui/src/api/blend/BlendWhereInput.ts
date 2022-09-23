import { CoffeeBrandListRelationFilter } from "../coffeeBrand/CoffeeBrandListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlendWhereInput = {
  coffeeBrands?: CoffeeBrandListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  origin?: "Africa" | "Brazil" | "India";
  roast?: "Light" | "Medium" | "Dark";
};
