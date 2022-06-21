import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PickupListRelationFilter } from "../pickup/PickupListRelationFilter";
import { TotalStatWhereUniqueInput } from "../totalStat/TotalStatWhereUniqueInput";

export type UserWhereInput = {
  emailId?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringFilter;
  pickups?: PickupListRelationFilter;
  totalStats?: TotalStatWhereUniqueInput;
  upiId?: StringFilter;
  username?: StringFilter;
};
