import { BlendWhereUniqueInput } from "../blend/BlendWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CoffeeBrandWhereInput = {
  blend?: BlendWhereUniqueInput;
  id?: StringFilter;
  label?: StringNullableFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
