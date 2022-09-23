import { CoffeeBrand } from "../coffeeBrand/CoffeeBrand";

export type Blend = {
  coffeeBrands?: Array<CoffeeBrand>;
  createdAt: Date;
  id: string;
  name: string;
  origin?: "Africa" | "Brazil" | "India";
  roast?: "Light" | "Medium" | "Dark" | null;
  updatedAt: Date;
};
