import { User } from "../user/User";

export type TotalStat = {
  co2Saved: number | null;
  createdAt: Date;
  ecoCoins: number;
  id: string;
  kgsRecycle: number;
  moneyEarned: number;
  numberOfPickups: number;
  treesSaved: number | null;
  updatedAt: Date;
  uuid?: User;
  waterSaved: number | null;
};
