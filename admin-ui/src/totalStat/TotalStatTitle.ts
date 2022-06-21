import { TotalStat as TTotalStat } from "../api/totalStat/TotalStat";

export const TOTALSTAT_TITLE_FIELD = "id";

export const TotalStatTitle = (record: TTotalStat): string => {
  return record.id || record.id;
};
