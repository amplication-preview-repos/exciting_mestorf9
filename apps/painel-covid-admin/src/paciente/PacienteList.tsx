import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PacienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pacientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data De Nascimento" source="dataDeNascimento" />
        <TextField label="ID" source="id" />
        <TextField label="Nome Completo" source="nomeCompleto" />
        <TextField label="Nome Da Mae" source="nomeDaMae" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
