import { CoffeeBrandCreateNestedManyWithoutBlendsInput } from "./CoffeeBrandCreateNestedManyWithoutBlendsInput";

export type BlendCreateInput = {
  coffeeBrands?: CoffeeBrandCreateNestedManyWithoutBlendsInput;
  name: string;
  origin: "Africa" | "Brazil" | "India";
  roast?: "Light" | "Medium" | "Dark" | null;
};
