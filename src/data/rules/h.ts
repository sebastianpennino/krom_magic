import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const hRule = {
  formulaName: powerRulesList.HYPOVECTIVE,
  name: ["Hipovectivo", "Hypovective"],
  description: [
    "Donde todas las Palabras son de distintos dominios",
    "Whose Words are all from different domains",
  ],
  rewardText: ["(+1/Palabra)", "(+1/Word)"],
  version: 1.1,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const spellUniqueDomains = new Set(domainWords);
    return spellUniqueDomains.size === spellLength &&
      spellUniqueDomains.size > 1
      ? spellLength
      : 0;
  },
};
