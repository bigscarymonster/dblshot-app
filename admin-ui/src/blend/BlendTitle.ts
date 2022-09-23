import { Blend as TBlend } from "../api/blend/Blend";

export const BLEND_TITLE_FIELD = "name";

export const BlendTitle = (record: TBlend): string => {
  return record.name || record.id;
};
