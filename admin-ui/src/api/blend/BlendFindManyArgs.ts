import { BlendWhereInput } from "./BlendWhereInput";
import { BlendOrderByInput } from "./BlendOrderByInput";

export type BlendFindManyArgs = {
  where?: BlendWhereInput;
  orderBy?: Array<BlendOrderByInput>;
  skip?: number;
  take?: number;
};
