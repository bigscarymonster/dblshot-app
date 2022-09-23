import { BlendWhereUniqueInput } from "../blend/BlendWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CoffeeBrandUpdateInput = {
  blend?: BlendWhereUniqueInput | null;
  label?: string | null;
  name?: string;
  user?: UserWhereUniqueInput | null;
};
