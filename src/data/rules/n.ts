import { powerRulesList } from "@apptypes/PowerRules";

export const nRule = {
  formulaName: powerRulesList.NONDIVERGENT,
  name: ["No-divergente", "Nondivergent"],
  description: [
    "Todas las Palabras son del mismo dominio",
    "whose Words are all of the same domain",
  ],
  rewardText: ["(+1/Palabra, maximo +4)", "(+1/Word, up to +4)"],
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const uniqueSize = new Set(domainWords).size;
    const reward = spellLength > 4 ? 4 : spellLength;
    return uniqueSize === 1 ? reward : 0;
  },
};
