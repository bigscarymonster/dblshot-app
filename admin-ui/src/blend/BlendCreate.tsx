import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { CoffeeBrandTitle } from "../coffeeBrand/CoffeeBrandTitle";

export const BlendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="coffeeBrands"
          reference="CoffeeBrand"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CoffeeBrandTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="origin"
          label="Origin"
          choices={[
            { label: "Africa", value: "Africa" },
            { label: "Brazil", value: "Brazil" },
            { label: "India", value: "India" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="roast"
          label="Roast"
          choices={[
            { label: "Light", value: "Light" },
            { label: "Medium", value: "Medium" },
            { label: "Dark", value: "Dark" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
