import { powerRulesList } from "@apptypes/PowerRules";

export const sRule = {
  formulaName: powerRulesList.SKEW,
  name: ["Sesgado", "Skew"],
  description: [
    "Contiene una unica palabra invertida",
    "Which contains only a single inverted word",
  ],
  rewardText: ["(+1)", "(+1)"],
  version: 1.1,
  ready: true,
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    _spellLength: number,
    invertedWords?: boolean[]
  ): number => {
    const invertedWordsOnly =
      invertedWords && invertedWords.filter((w) => w === true);
    return invertedWordsOnly?.length === 1 ? 1 : 0;
  },
};
