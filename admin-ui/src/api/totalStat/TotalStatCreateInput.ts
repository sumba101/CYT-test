import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TotalStatCreateInput = {
  co2Saved?: number | null;
  ecoCoins: number;
  kgsRecycle: number;
  moneyEarned: number;
  numberOfPickups: number;
  treesSaved?: number | null;
  uuid: UserWhereUniqueInput;
  waterSaved?: number | null;
};
