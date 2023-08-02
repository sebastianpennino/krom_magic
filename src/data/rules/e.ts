import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const eRule = {
  formulaName: powerRulesList.EUPHONIC,
  name: ["Eufonica", "Euphonic"],
  description: [
    "Contiene exactamente una Palabra de cada uno de los ocho dominios",
    "Which contains exactly one word from each of the eight domains.",
  ],
  rewardText: ["(+5)", "(+5)"],
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const uniqueSize = new Set(domainWords).size;
    const reward = 5;
    return uniqueSize === 8 && spellLength === 8 ? reward : 0;
  },
};
