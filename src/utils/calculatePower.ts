import { PowerRules } from "../app-types/PowerRules";

type RulesObject = {
  [PowerRules.ACCOMMODANT]: number;
  [PowerRules.BABELOUS]: number;
  [PowerRules.COMPOUND]: number;
  [PowerRules.DEFRACTIVE]: number;
  [PowerRules.EUPHONIC]: number;
  [PowerRules.FORMAL]: number;
  [PowerRules.GRACIOUS]: number;
  [PowerRules.HYPOVECTIVE]: number;
  [PowerRules.INTRAVERSIVE]: number;
  [PowerRules.JUSTIFIED]: number;
  [PowerRules.KYMOIAMBIC]: number;
  [PowerRules.LEXICAL]: number;
  [PowerRules.MULTIVARIATE]: number;
  [PowerRules.NONDIVERGENT]: number;
  [PowerRules.ORBITAL]: number;
  [PowerRules.PENTARCHIAL]: number;
  [PowerRules.QUINESSCENT]: number;
  [PowerRules.REFRACTIVE]: number;
  [PowerRules.SKEW]: number;
  [PowerRules.TRIVECTANT]: number;
  [PowerRules.UNDULANT]: number;
  [PowerRules.VERTEXTUAL]: number;
  [PowerRules.WENDING]: number;
  [PowerRules.XENOETHICAL]: number;
  [PowerRules.YEALING]: number;
  [PowerRules.ZYGAPOPHYTIC]: number;
};

const defaultRulesObject = {
  [PowerRules.ACCOMMODANT]: 0,
  [PowerRules.BABELOUS]: 0,
  [PowerRules.COMPOUND]: 0,
  [PowerRules.DEFRACTIVE]: 0,
  [PowerRules.EUPHONIC]: 0,
  [PowerRules.FORMAL]: 0,
  [PowerRules.GRACIOUS]: 0,
  [PowerRules.HYPOVECTIVE]: 0,
  [PowerRules.INTRAVERSIVE]: 0,
  [PowerRules.JUSTIFIED]: 0,
  [PowerRules.KYMOIAMBIC]: 0,
  [PowerRules.LEXICAL]: 0,
  [PowerRules.MULTIVARIATE]: 0,
  [PowerRules.NONDIVERGENT]: 0,
  [PowerRules.ORBITAL]: 0,
  [PowerRules.PENTARCHIAL]: 0,
  [PowerRules.QUINESSCENT]: 0,
  [PowerRules.REFRACTIVE]: 0,
  [PowerRules.SKEW]: 0,
  [PowerRules.TRIVECTANT]: 0,
  [PowerRules.UNDULANT]: 0,
  [PowerRules.VERTEXTUAL]: 0,
  [PowerRules.WENDING]: 0,
  [PowerRules.XENOETHICAL]: 0,
  [PowerRules.YEALING]: 0,
  [PowerRules.ZYGAPOPHYTIC]: 0,
};

// Given current words returns all the possible rules and points
const calculatePower = (words: string[], spellLength: number): RulesObject => {
  return defaultRulesObject;
};
