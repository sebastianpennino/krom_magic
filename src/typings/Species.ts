
export enum PlayerSpecies {
  TANQUE = "TANQUE",
  ORCO = "ORCO",
  FERAL = "FERAL",
  HUMANO = "HUMANO",
  TRENO = "TRENO",
  ELFO = "ELFO",
  FEY = "FEY",
}

export type ValidPlayerSpecies =
  (typeof PlayerSpecies)[keyof typeof PlayerSpecies];

export const species = [
  {
    name: ["Rocosos", "Rocky"],
    formulaName: PlayerSpecies.TANQUE,
  },
  {
    name: ["Orco", "Orc"],
    formulaName: PlayerSpecies.ORCO,
  },
  {
    name: ["Feral", "Feral"],
    formulaName: PlayerSpecies.FERAL,
  },
  {
    name: ["Humano", "Human"],
    formulaName: PlayerSpecies.HUMANO,
  },
  {
    name: ["Treno", "Treno"],
    formulaName: PlayerSpecies.TRENO,
  },
  {
    name: ["Elfo", "Elf"],
    formulaName: PlayerSpecies.ELFO,
  },
  {
    name: ["Draconido", "Draconid"],
    formulaName: PlayerSpecies.FEY,
  },
];

export const translateSpecies = (formulaName: ValidPlayerSpecies, idx: number) => {
  return species.find(c => c.formulaName === formulaName)?.name[idx]
}
