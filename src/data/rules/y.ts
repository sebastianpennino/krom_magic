import { powerRulesList } from "@apptypes/PowerRules";

export const yRule = {
  formulaName: powerRulesList.YEALING,
  name: ["Yealito", "Yealing"],
  description: [
    "Todas las Palabras del hechizo tienen el mismo numero de letras",
    "Whose contituent Words each have the same number of letters",
  ],
  rewardText: ["(+1 por letra de una Palabra)", "(+1 each letter in a word)"],
  ready: true,
  evalFunction: (
    words: string[],
    _domainWords: string[],
    _spellLength: number
  ): number => {
    if (words.length < 1) {
      return 0;
    }
    const len = words[0].length;
    const check = words.every((word) => word.length === len);
    return check ? len : 0;
  },
};
