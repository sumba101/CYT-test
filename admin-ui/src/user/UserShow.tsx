import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TOTALSTAT_TITLE_FIELD } from "../totalStat/TotalStatTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Pickup" target="UserId" label="Pickups">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
