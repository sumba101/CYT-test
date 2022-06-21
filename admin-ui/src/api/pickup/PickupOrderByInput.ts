import { SortOrder } from "../../util/SortOrder";

export type PickupOrderByInput = {
  agentId?: SortOrder;
  cashStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pickupStatus?: SortOrder;
  rateForScrap?: SortOrder;
  remuneration?: SortOrder;
  scrapType?: SortOrder;
  scrapWeight?: SortOrder;
  updatedAt?: SortOrder;
  uuidId?: SortOrder;
};
