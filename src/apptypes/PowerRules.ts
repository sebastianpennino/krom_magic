
export enum PowerRules {
  ACCOMMODANT = "ACCOMMODANT",
  BABELOUS = "BABELOUS",
  COMPOUND = "COMPOUND",
  DEFRACTIVE = "DEFRACTIVE",
  EUPHONIC = "EUPHONIC",
  FORMAL = "FORMAL",
  GRACIOUS = "GRACIOUS",
  HYPOVECTIVE = "HYPOVECTIVE",
  INTRAVERSIVE = "INTRAVERSIVE",
  JUSTIFIED = "JUSTIFIED",
  KYMOIAMBIC = "KYMOIAMBIC",
  LEXICAL = "LEXICAL",
  MULTIVARIATE = "MULTIVARIATE",
  NONDIVERGENT = "NONDIVERGENT",
  ORBITAL = "ORBITAL",
  PENTARCHIAL = "PENTARCHIAL",
  QUINESSCENT = "QUINESSCENT",
  REFRACTIVE = "REFRACTIVE",
  SKEW = "SKEW",
  TRIVECTANT = "TRIVECTANT",
  UNDULANT = "UNDULANT",
  VERTEXTUAL = "VERTEXTUAL",
  WENDING = "WENDING",
  XENOETHICAL = "XENOETHICAL",
  YEALING = "YEALING",
  ZYGAPOPHYTIC = "ZYGAPOPHYTIC",
}

export const powerRulesList: typeof PowerRules = {
  ACCOMMODANT: PowerRules.ACCOMMODANT,
  BABELOUS: PowerRules.BABELOUS,
  COMPOUND: PowerRules.COMPOUND,
  DEFRACTIVE: PowerRules.DEFRACTIVE,
  EUPHONIC: PowerRules.EUPHONIC,
  FORMAL: PowerRules.FORMAL,
  GRACIOUS: PowerRules.GRACIOUS,
  HYPOVECTIVE: PowerRules.HYPOVECTIVE,
  INTRAVERSIVE: PowerRules.INTRAVERSIVE,
  JUSTIFIED: PowerRules.JUSTIFIED,
  KYMOIAMBIC: PowerRules.KYMOIAMBIC,
  LEXICAL: PowerRules.LEXICAL,
  MULTIVARIATE: PowerRules.MULTIVARIATE,
  NONDIVERGENT: PowerRules.NONDIVERGENT,
  ORBITAL: PowerRules.ORBITAL,
  PENTARCHIAL: PowerRules.PENTARCHIAL,
  QUINESSCENT: PowerRules.QUINESSCENT,
  REFRACTIVE: PowerRules.REFRACTIVE,
  SKEW: PowerRules.SKEW,
  TRIVECTANT: PowerRules.TRIVECTANT,
  UNDULANT: PowerRules.UNDULANT,
  VERTEXTUAL: PowerRules.VERTEXTUAL,
  WENDING: PowerRules.WENDING,
  XENOETHICAL: PowerRules.XENOETHICAL,
  YEALING: PowerRules.YEALING,
  ZYGAPOPHYTIC: PowerRules.ZYGAPOPHYTIC,
};

export type ValidPowerRules = (typeof PowerRules)[keyof typeof PowerRules];