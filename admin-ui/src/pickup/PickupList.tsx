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

export const PickupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pickups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Agent ID" source="agentId" />
        <TextField label="Cash Status" source="cashStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Pickup Status" source="pickupStatus" />
        <TextField label="Rate for Scrap" source="rateForScrap" />
        <TextField label="Remuneration" source="remuneration" />
        <TextField label="ScrapType" source="scrapType" />
        <TextField label="Scrap Weight" source="scrapWeight" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UUID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
