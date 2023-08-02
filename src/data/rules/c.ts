import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const cRule = {
  formulaName: powerRulesList.COMPOUND,
  name: ["Compuesta", "Compound"],
  description: [
    "Cada Palabra es analoga a otra Palabra en el hechizo",
    "Whose Words are each analogous to one other Word in the spell",
  ],
  rewardText: ["(+1/Palabra)", "(+1/Word)"],
  version: 1.2,
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const toFind = domainWords.map((domain) => {
      const clean = domain as unknown as ValidPowerWordDomain;
      return {
        left: cyclogram[clean]?.analogousAntiClockWise,
        right: cyclogram[clean]?.analogousClockWise,
      };
    });
    const allFound = toFind.every((item) => {
      const found = domainWords.some(
        (word) => word === item.left || word === item.right
      );
      return found;
    });
    return allFound ? spellLength : 0;
  },
};
