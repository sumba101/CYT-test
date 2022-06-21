import { Pickup as TPickup } from "../api/pickup/Pickup";

export const PICKUP_TITLE_FIELD = "agentId";

export const PickupTitle = (record: TPickup): string => {
  return record.agentId || record.id;
};
