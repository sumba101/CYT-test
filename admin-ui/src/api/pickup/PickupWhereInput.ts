import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PickupWhereInput = {
  agentId?: StringNullableFilter;
  cashStatus?: "Pending" | "Payed";
  id?: StringFilter;
  pickupStatus?: "Pending" | "Cancelled" | "Filled";
  scrapType?: "Paper" | "Metal" | "Plastic" | "Glass";
  uuid?: UserWhereUniqueInput;
};
