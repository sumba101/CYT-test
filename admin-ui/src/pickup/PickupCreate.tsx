import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const PickupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Agent ID" source="agentId" />
        <SelectInput
          source="cashStatus"
          label="Cash Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "Payed", value: "Payed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="pickupStatus"
          label="Pickup Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "Cancelled", value: "Cancelled" },
            { label: "Filled", value: "Filled" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Rate for Scrap" source="rateForScrap" />
        <NumberInput label="Remuneration" source="remuneration" />
        <SelectInput
          source="scrapType"
          label="ScrapType"
          choices={[
            { label: "Paper", value: "Paper" },
            { label: "Metal", value: "Metal" },
            { label: "Plastic", value: "Plastic" },
            { label: "Glass", value: "Glass" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Scrap Weight" source="scrapWeight" />
        <ReferenceInput source="user.id" reference="User" label="UUID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
