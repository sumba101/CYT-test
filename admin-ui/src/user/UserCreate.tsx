import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PickupTitle } from "../pickup/PickupTitle";
import { TotalStatTitle } from "../totalStat/TotalStatTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email Id" source="emailId" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="pickups"
          reference="Pickup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PickupTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="totalstat.id"
          reference="TotalStat"
          label="Total Stats"
        >
          <SelectInput optionText={TotalStatTitle} />
        </ReferenceInput>
        <TextInput label="UPI ID" source="upiId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
