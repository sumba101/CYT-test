import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TOTALSTAT_TITLE_FIELD } from "../totalStat/TotalStatTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email Id" source="emailId" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Roles" source="roles" />
        <ReferenceField
          label="Total Stats"
          source="totalstat.id"
          reference="TotalStat"
        >
          <TextField source={TOTALSTAT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UPI ID" source="upiId" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
