import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PickupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
