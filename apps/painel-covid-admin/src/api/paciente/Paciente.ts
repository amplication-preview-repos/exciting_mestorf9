export type Paciente = {
  createdAt: Date;
  dataDeNascimento: Date | null;
  id: string;
  nomeCompleto: string;
  nomeDaMae: string | null;
  updatedAt: Date;
};
