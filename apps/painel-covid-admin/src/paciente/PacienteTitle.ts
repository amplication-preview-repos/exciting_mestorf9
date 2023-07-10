import { Paciente as TPaciente } from "../api/paciente/Paciente";

export const PACIENTE_TITLE_FIELD = "nomeCompleto";

export const PacienteTitle = (record: TPaciente): string => {
  return record.nomeCompleto || String(record.id);
};
