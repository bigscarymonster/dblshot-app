import { Blend } from "../blend/Blend";
import { User } from "../user/User";

export type CoffeeBrand = {
  blend?: Blend | null;
  createdAt: Date;
  id: string;
  label: string | null;
  name: string;
  updatedAt: Date;
  user?: User | null;
};
