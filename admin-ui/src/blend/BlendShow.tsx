import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLEND_TITLE_FIELD } from "./BlendTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BlendShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Origin" source="origin" />
        <TextField label="Roast" source="roast" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CoffeeBrand"
          target="BlendId"
          label="Coffee Brands"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Blend" source="blend.id" reference="Blend">
              <TextField source={BLEND_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Label" source="label" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
