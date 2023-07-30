export enum PowerWordDomain {
  UNKNOWN = "UNKNOWN",
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILUSION = "ILUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
}

export type ValidPowerWordDomain =
  (typeof PowerWordDomain)[keyof typeof PowerWordDomain];

export const domainList = [
  {
    name: ["-Ninguna-", "-None-"],
    formulaName: PowerWordDomain.UNKNOWN,
  },
  {
    name: ["Abjuración", "Abjuration"],
    formulaName: PowerWordDomain.ABJURATION,
  },
  {
    name: ["Conjuración", "Conjuration"],
    formulaName: PowerWordDomain.CONJURATION,
  },
  {
    name: ["Divinación", "Divination"],
    formulaName: PowerWordDomain.DIVINATION,
  },
  {
    name: ["Encantamiento", "Enchantment"],
    formulaName: PowerWordDomain.ENCHANTMENT,
  },
  {
    name: ["Evocación", "Evocation"],
    formulaName: PowerWordDomain.EVOCATION,
  },
  {
    name: ["Ilusión", "Ilusion"],
    formulaName: PowerWordDomain.ILUSION,
  },
  {
    name: ["Necromancia", "Necromancy"],
    formulaName: PowerWordDomain.NECROMANCY,
  },
  {
    name: ["Transmutación", "Transmutation"],
    formulaName: PowerWordDomain.TRANSMUTATION,
  },
];
