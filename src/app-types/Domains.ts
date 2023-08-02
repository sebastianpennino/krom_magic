export enum PowerWordDomain {
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILUSION = "ILUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
  UNKNOWN = "_",
}

export type ValidPowerWordDomain =
  (typeof PowerWordDomain)[keyof typeof PowerWordDomain];

export const domainList = [
  {
    name: ["...", "..."],
    formulaName: PowerWordDomain.UNKNOWN,
  },
  {
    name: ["Ilusión (1)", "Ilusion (1)"],
    formulaName: PowerWordDomain.ILUSION,
  },
  {
    name: ["Divinación (2)", "Divination (2)"],
    formulaName: PowerWordDomain.DIVINATION,
  },
  {
    name: ["Abjuración (3)", "Abjuration (3)"],
    formulaName: PowerWordDomain.ABJURATION,
  },
  {
    name: ["Encantamiento (4)", "Enchantment (4)"],
    formulaName: PowerWordDomain.ENCHANTMENT,
  },
  {
    name: ["Transmutación (5)", "Transmutation (5)"],
    formulaName: PowerWordDomain.TRANSMUTATION,
  },
  {
    name: ["Necromancia (6)", "Necromancy (6)"],
    formulaName: PowerWordDomain.NECROMANCY,
  },
  {
    name: ["Conjuración (7)", "Conjuration (7)"],
    formulaName: PowerWordDomain.CONJURATION,
  },
  {
    name: ["Evocación (8)", "Evocation"],
    formulaName: PowerWordDomain.EVOCATION,
  },
];

export type PowerWordRelationship = {
  id: number;
  quarter: number;
  north: boolean;
  south: boolean;
  west: boolean;
  east: boolean;
  formulaName: ValidPowerWordDomain;
  analogousClockWise: ValidPowerWordDomain;
  analogousAntiClockWise: ValidPowerWordDomain;
  opposite: ValidPowerWordDomain;
};

export const cyclogram: Record<ValidPowerWordDomain, PowerWordRelationship> = {
  [PowerWordDomain.UNKNOWN]: {
    id: 0,
    quarter: 0,
    north: false,
    south: false,
    west: false,
    east: false,
    formulaName: PowerWordDomain.UNKNOWN,
    analogousClockWise: PowerWordDomain.UNKNOWN,
    analogousAntiClockWise: PowerWordDomain.UNKNOWN,
    opposite: PowerWordDomain.UNKNOWN,
  },
  [PowerWordDomain.ILUSION]: {
    id: 1,
    quarter: 1,
    north: true,
    south: false,
    west: true,
    east: false,
    formulaName: PowerWordDomain.ILUSION,
    analogousClockWise: PowerWordDomain.DIVINATION,
    analogousAntiClockWise: PowerWordDomain.EVOCATION,
    opposite: PowerWordDomain.TRANSMUTATION,
  },
  [PowerWordDomain.DIVINATION]: {
    id: 2,
    quarter: 1,
    north: true,
    south: false,
    west: true,
    east: false,
    formulaName: PowerWordDomain.DIVINATION,
    analogousClockWise: PowerWordDomain.ABJURATION,
    analogousAntiClockWise: PowerWordDomain.ILUSION,
    opposite: PowerWordDomain.NECROMANCY,
  },
  [PowerWordDomain.ABJURATION]: {
    id: 3,
    quarter: 2,
    north: true,
    south: false,
    west: false,
    east: true,
    formulaName: PowerWordDomain.ABJURATION,
    analogousClockWise: PowerWordDomain.ENCHANTMENT,
    analogousAntiClockWise: PowerWordDomain.DIVINATION,
    opposite: PowerWordDomain.CONJURATION,
  },
  [PowerWordDomain.ENCHANTMENT]: {
    id: 4,
    quarter: 2,
    north: true,
    south: false,
    west: false,
    east: true,
    formulaName: PowerWordDomain.ENCHANTMENT,
    analogousClockWise: PowerWordDomain.TRANSMUTATION,
    analogousAntiClockWise: PowerWordDomain.ABJURATION,
    opposite: PowerWordDomain.EVOCATION,
  },
  [PowerWordDomain.TRANSMUTATION]: {
    id: 5,
    quarter: 3,
    north: false,
    south: true,
    west: false,
    east: true,
    formulaName: PowerWordDomain.TRANSMUTATION,
    analogousClockWise: PowerWordDomain.NECROMANCY,
    analogousAntiClockWise: PowerWordDomain.ENCHANTMENT,
    opposite: PowerWordDomain.ILUSION,
  },
  [PowerWordDomain.NECROMANCY]: {
    id: 6,
    quarter: 3,
    north: false,
    south: true,
    west: false,
    east: true,
    formulaName: PowerWordDomain.NECROMANCY,
    analogousClockWise: PowerWordDomain.CONJURATION,
    analogousAntiClockWise: PowerWordDomain.TRANSMUTATION,
    opposite: PowerWordDomain.DIVINATION,
  },
  [PowerWordDomain.CONJURATION]: {
    id: 7,
    quarter: 4,
    north: false,
    south: true,
    west: true,
    east: false,
    formulaName: PowerWordDomain.CONJURATION,
    analogousClockWise: PowerWordDomain.EVOCATION,
    analogousAntiClockWise: PowerWordDomain.NECROMANCY,
    opposite: PowerWordDomain.ABJURATION,
  },
  [PowerWordDomain.EVOCATION]: {
    id: 8,
    quarter: 4,
    north: false,
    south: true,
    west: true,
    east: false,
    formulaName: PowerWordDomain.EVOCATION,
    analogousClockWise: PowerWordDomain.ILUSION,
    analogousAntiClockWise: PowerWordDomain.CONJURATION,
    opposite: PowerWordDomain.ENCHANTMENT,
  },
};
