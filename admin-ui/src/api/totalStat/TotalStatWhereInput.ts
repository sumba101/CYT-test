import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TotalStatWhereInput = {
  co2Saved?: FloatNullableFilter;
  id?: StringFilter;
  treesSaved?: FloatNullableFilter;
  uuid?: UserWhereUniqueInput;
  waterSaved?: FloatNullableFilter;
};
