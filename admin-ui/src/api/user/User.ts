import { Pickup } from "../pickup/Pickup";
import { TotalStat } from "../totalStat/TotalStat";

export type User = {
  createdAt: Date;
  emailId: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string;
  pickups?: Array<Pickup>;
  roles: Array<string>;
  totalStats?: TotalStat;
  updatedAt: Date;
  upiId: string;
  username: string;
};
