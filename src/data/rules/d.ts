import { powerRulesList } from "@apptypes/PowerRules";

export const dRule = {
  formulaName: powerRulesList.DEFRACTIVE,
  name: ["Defractivo", "Defractive"],
  description: [
    "Contiene al menos dos Palabras con asonancia notable",
    "Which contain at least two Words that exhibit significant assonance",
  ],
  rewardText: ["(+2/Palabra Asonante)", "(+2/Assonat Word)"],
  ready: true,
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    _spellLength: number,
    _invertedWords?: boolean[],
    assonanceWords?: boolean[]
  ): number => {
    const assonanceVal =
      (assonanceWords && assonanceWords.filter((w) => w).length) || 0;
    const reward = assonanceVal * 2;
    return assonanceVal >= 2 ? reward : 0;
  },
};
