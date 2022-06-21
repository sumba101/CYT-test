import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PickupUpdateInput = {
  agentId?: string | null;
  cashStatus?: "Pending" | "Payed";
  pickupStatus?: "Pending" | "Cancelled" | "Filled";
  rateForScrap?: number;
  remuneration?: number;
  scrapType?: "Paper" | "Metal" | "Plastic" | "Glass";
  scrapWeight?: number;
  uuid?: UserWhereUniqueInput;
};
