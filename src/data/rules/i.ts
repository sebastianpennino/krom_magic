import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const iRule = {
  formulaName: powerRulesList.INTRAVERSIVE,
  name: ["Intreversivo", "Intraversive"],
  description: [
    "Donde al menos dos Palabras del hechizo riman",
    "For which at least two Words in the spell rhyme.",
  ],
  rewardText: ["(+2/Palabra con rima)", "(+2/rhyming Word)"],
  version: 1.2,
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    _spellLength: number,
    _invertedWords?: boolean[],
    _assonanceWords?: boolean[],
    rhymingWords?: boolean[]
  ): number => {
    const rhymingWordsOnly =
      (rhymingWords && rhymingWords.filter((w) => w === true)) ?? [];
    const reward = rhymingWordsOnly.length * 2;
    return rhymingWordsOnly.length >= 2 ? reward : 0;
  },
};
