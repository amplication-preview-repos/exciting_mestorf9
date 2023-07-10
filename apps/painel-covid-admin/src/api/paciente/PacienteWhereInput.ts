import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PacienteWhereInput = {
  dataDeNascimento?: DateTimeNullableFilter;
  id?: StringFilter;
  nomeCompleto?: StringFilter;
  nomeDaMae?: StringNullableFilter;
};
