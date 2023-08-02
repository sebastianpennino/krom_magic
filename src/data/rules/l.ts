import { powerRulesList } from "@apptypes/PowerRules";

export const lRule = {
  formulaName: powerRulesList.LEXICAL,
  name: ["Lexico", "Lexical"],
  description: [
    "Las Palabras del hechizo estan en orden alfabetico",
    "whose constituent Words are in alphabetical order",
  ],
  rewardText: ["(+1/Palabra)", "(+1/Word)"],
  version: 1.1,
  ready: true,
  evalFunction: (
    words: string[],
    _domainWords: string[],
    spellLength: number
  ): number => {
    if (words.length < 2 || words[0].length <= 1) {
      return 0;
    }
    const wordsSorted = [...words].sort();
    const areWordsInOrder = wordsSorted.every((w, idx) => w === words[idx]);
    return words.length > 2 && areWordsInOrder ? spellLength : 0;
  },
};