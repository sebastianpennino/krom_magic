import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

// !IMPORTANT: Complete this formula
export const pRule = {
  formulaName: powerRulesList.PENTARCHIAL,
  name: ["Pentarquial", "Pentarchial"],
  description: [
    "Donde usando el diagrama como referencia, un pentagrama puede ser dibujando conectando cada Palabra en orden",
    "For which, on the Octad Cyclogram, a uniform pentagram can be drawn by connecting with a straight line the domain of each Word in order",
  ],
  rewardText: ["(+5)", "(+5)"],
  evalFunction: (
    words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const uniqueSize = new Set(domainWords).size;
    if (spellLength !== 5 || uniqueSize !== 5) {
      // Avoid calculations if not a 5 words / 5 different domains case
      return 0;
    }
    // !IMPORTANT: Complete this formula
    return 0;
  },
};
