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

export const TotalStatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
