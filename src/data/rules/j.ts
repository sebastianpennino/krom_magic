import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const jRule = {
  formulaName: powerRulesList.JUSTIFIED,
  name: ["Justificado", "Justified"],
  description: [
    "Donde todas las Palabras del hechizo son exclusivamente del 'Norte' o 'Sur'",
    "Whose Words come from either the upper or lower domains exclusively",
  ],
  rewardText: ["(+1)", "(+1)"],
  evalFunction: (
    _words: string[],
    domainWords: string[],
    _spellLength: number
  ): number => {
    const allNorth = domainWords.every((word) => {
      const cleanWord = word as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.north;
    });
    const allSouth = domainWords.every((word) => {
      const cleanWord = word as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.south;
    });
    const reward = 1;
    return allNorth || allSouth ? reward : 0;
  },
};
