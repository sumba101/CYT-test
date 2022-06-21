import { TotalStatWhereInput } from "./TotalStatWhereInput";
import { TotalStatOrderByInput } from "./TotalStatOrderByInput";

export type TotalStatFindManyArgs = {
  where?: TotalStatWhereInput;
  orderBy?: Array<TotalStatOrderByInput>;
  skip?: number;
  take?: number;
};
