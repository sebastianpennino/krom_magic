import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const uRule = {
  formulaName: powerRulesList.UNDULANT,
  name: ["Undulante", "Undulant"],
  description: [
    "El numero de Palabras es primo (2, 3, 5, 7, 11...)",
    "With a prime number of words (2, 3, 5, 7, 11...)",
  ],
  rewardText: ["(+3)", "(+3)"],
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    spellLength: number
  ): number => {
    switch (spellLength) {
      case 2:
      case 3:
      case 5:
      case 7:
      case 11:
        return 3;
    }
    return 0;
  },
};
