import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const PacienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Data De Nascimento" source="dataDeNascimento" />
        <TextInput label="Nome Completo" source="nomeCompleto" />
        <TextInput label="Nome Da Mae" source="nomeDaMae" />
      </SimpleForm>
    </Edit>
  );
};
