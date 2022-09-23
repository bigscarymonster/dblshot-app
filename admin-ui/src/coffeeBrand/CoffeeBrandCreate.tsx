import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BlendTitle } from "../blend/BlendTitle";
import { UserTitle } from "../user/UserTitle";

export const CoffeeBrandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="blend.id" reference="Blend" label="Blend">
          <SelectInput optionText={BlendTitle} />
        </ReferenceInput>
        <TextInput label="Label" source="label" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
