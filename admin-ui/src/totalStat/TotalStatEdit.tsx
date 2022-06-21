import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const TotalStatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="CO2 saved" source="co2Saved" />
        <NumberInput step={1} label="Eco Coins" source="ecoCoins" />
        <NumberInput label="Kgs recycled" source="kgsRecycle" />
        <NumberInput label="Money Earned" source="moneyEarned" />
        <NumberInput
          step={1}
          label="Number of pickups"
          source="numberOfPickups"
        />
        <NumberInput label="Trees saved" source="treesSaved" />
        <ReferenceInput source="user.id" reference="User" label="UUID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="Water saved" source="waterSaved" />
      </SimpleForm>
    </Edit>
  );
};
