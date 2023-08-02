import { powerRulesList } from "@apptypes/PowerRules";

export const bRule = {
  formulaName: powerRulesList.BABELOUS,
  name: ["Babelinosa", "Babelous"],
  description: [
    "Cada Palabra del hechizo comienza con la misma letra del alfabeto",
    "For which every Word begins with the same letter of the alphabet",
  ],
  rewardText: ["(+1/Palabra)", "(+1/Word)"],
  version: 1.1,
  ready: true,
  evalFunction: (
    words: string[],
    _domainWords: string[],
    spellLength: number
  ): number => {
    const firstLetter = words[0].charAt(0);
    if (firstLetter.length <= 1) {
      return 0;
    }
    const allWordsStartWithFirstLetter = words.every((chosenWord) => {
      return firstLetter === chosenWord.charAt(0);
    });
    return allWordsStartWithFirstLetter ? spellLength : 0;
  },
};
