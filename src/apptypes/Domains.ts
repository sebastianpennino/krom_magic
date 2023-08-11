export enum PowerWordDomain {
  MAIN = "MAIN",
  AUXILIAR = "AUXILIAR",
}

export type ValidPowerWordDomain =
  (typeof PowerWordDomain)[keyof typeof PowerWordDomain];

export const domainList = [
  {
    name: ["Principal", "Main"],
    formulaName: PowerWordDomain.MAIN,
  },
  {
    name: ["Auxiliar", "Auxiliary"],
    formulaName: PowerWordDomain.AUXILIAR,
  },
];

