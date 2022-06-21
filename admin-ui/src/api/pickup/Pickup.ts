import { User } from "../user/User";

export type Pickup = {
  agentId: string | null;
  cashStatus?: "Pending" | "Payed";
  createdAt: Date;
  id: string;
  pickupStatus?: "Pending" | "Cancelled" | "Filled";
  rateForScrap: number;
  remuneration: number;
  scrapType?: "Paper" | "Metal" | "Plastic" | "Glass";
  scrapWeight: number;
  updatedAt: Date;
  uuid?: User;
};
