import { powerRulesList } from "@apptypes/PowerRules";

// TODO: Complete this formula
export const tRule = {
  formulaName: powerRulesList.TRIVECTANT,
  name: ["Trivectante", "Trivectant"],
  description: [
    "El numero de dominios 'vacio' entre cada Palabra suman hasta 5 y no hay Palabras analogas",
    "For which the number of domains between the domains of each Word sum to 5, and for which no two Words are analogous",
  ],
  rewardText: ["(+3)", "(+3)"],
  ready: false, // TODO: not ready yet.
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    return 0;
  },
};
