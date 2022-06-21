import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TotalStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Total Stats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="CO2 saved" source="co2Saved" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Eco Coins" source="ecoCoins" />
        <TextField label="ID" source="id" />
        <TextField label="Kgs recycled" source="kgsRecycle" />
        <TextField label="Money Earned" source="moneyEarned" />
        <TextField label="Number of pickups" source="numberOfPickups" />
        <TextField label="Trees saved" source="treesSaved" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UUID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Water saved" source="waterSaved" />
      </Datagrid>
    </List>
  );
};
