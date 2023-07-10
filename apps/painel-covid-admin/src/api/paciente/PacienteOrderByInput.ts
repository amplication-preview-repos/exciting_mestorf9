import { SortOrder } from "../../util/SortOrder";

export type PacienteOrderByInput = {
  createdAt?: SortOrder;
  dataDeNascimento?: SortOrder;
  id?: SortOrder;
  nomeCompleto?: SortOrder;
  nomeDaMae?: SortOrder;
  updatedAt?: SortOrder;
};
