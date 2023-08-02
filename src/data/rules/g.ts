import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const gRule = {
  formulaName: powerRulesList.GRACIOUS,
  name: ["Graciado", "Gracious"],
  description: [
    "No contiene Palabras que impliquen daño a ninguna criatura viviente",
    "Which contain no Words that imply harm to any living creature.",
  ],
  rewardText: ["(+4)", "(+4)"],
  evalFunction: (
    _words: string[],
    _domainWords: string[],
    _spellLength: number,
    _invertedWords?: boolean[],
    _assonanceWords?: boolean[],
    _rhymingWords?: boolean[],
    isGracious?: boolean
  ): number => {
    const reward = 4;
    return isGracious ? reward : 0;
  },
};
