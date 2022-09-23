import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BlendTitle } from "../blend/BlendTitle";
import { UserTitle } from "../user/UserTitle";

export const CoffeeBrandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
