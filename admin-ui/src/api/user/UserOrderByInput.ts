import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  emailId?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  totalStatsId?: SortOrder;
  updatedAt?: SortOrder;
  upiId?: SortOrder;
  username?: SortOrder;
};
