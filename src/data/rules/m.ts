import { powerRulesList } from "@apptypes/PowerRules";

export const mRule = {
  formulaName: powerRulesList.MULTIVARIATE,
  name: ["Multivariante", "Multivariate"],
  description: [
    "Donde todas las Palabras fueron invertidas",
    "whose Words have been all been inverted",
  ],
  rewardText: ["(+1/Palabra)", "(+1/Word)"],
  ready: true,
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    spellLength: number,
    invertedWords?: boolean[]
  ): number => {
    const allInverted =
      (invertedWords && invertedWords.every((w) => w === true)) ?? false;
    return allInverted ? spellLength : 0;
  },
};
