import { PickupCreateNestedManyWithoutUsersInput } from "./PickupCreateNestedManyWithoutUsersInput";
import { TotalStatWhereUniqueInput } from "../totalStat/TotalStatWhereUniqueInput";

export type UserCreateInput = {
  emailId: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber: string;
  pickups?: PickupCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  totalStats?: TotalStatWhereUniqueInput;
  upiId: string;
  username: string;
};
