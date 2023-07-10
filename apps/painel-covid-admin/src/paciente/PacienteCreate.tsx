import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const PacienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Data De Nascimento" source="dataDeNascimento" />
        <TextInput label="Nome Completo" source="nomeCompleto" />
        <TextInput label="Nome Da Mae" source="nomeDaMae" />
      </SimpleForm>
    </Create>
  );
};
