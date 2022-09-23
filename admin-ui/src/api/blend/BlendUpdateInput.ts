import { CoffeeBrandUpdateManyWithoutBlendsInput } from "./CoffeeBrandUpdateManyWithoutBlendsInput";

export type BlendUpdateInput = {
  coffeeBrands?: CoffeeBrandUpdateManyWithoutBlendsInput;
  name?: string;
  origin?: "Africa" | "Brazil" | "India";
  roast?: "Light" | "Medium" | "Dark" | null;
};
