import { PickupUpdateManyWithoutUsersInput } from "./PickupUpdateManyWithoutUsersInput";
import { TotalStatWhereUniqueInput } from "../totalStat/TotalStatWhereUniqueInput";

export type UserUpdateInput = {
  emailId?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string;
  pickups?: PickupUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  totalStats?: TotalStatWhereUniqueInput;
  upiId?: string;
  username?: string;
};
