import { PickupWhereInput } from "./PickupWhereInput";
import { PickupOrderByInput } from "./PickupOrderByInput";

export type PickupFindManyArgs = {
  where?: PickupWhereInput;
  orderBy?: Array<PickupOrderByInput>;
  skip?: number;
  take?: number;
};
