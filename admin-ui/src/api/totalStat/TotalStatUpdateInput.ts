import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TotalStatUpdateInput = {
  co2Saved?: number | null;
  ecoCoins?: number;
  kgsRecycle?: number;
  moneyEarned?: number;
  numberOfPickups?: number;
  treesSaved?: number | null;
  uuid?: UserWhereUniqueInput;
  waterSaved?: number | null;
};
