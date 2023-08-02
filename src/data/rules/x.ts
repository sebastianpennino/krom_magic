import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const xRule = {
  formulaName: powerRulesList.XENOETHICAL,
  name: ["Xenoetico", "Xenoethical"],
  description: [
    "Todas las Palabras pertenecen a dominios de orden o caos exclusivamente",
    "Whose Words come from the domains of either order or chaos exclusively",
  ],
  rewardText: ["(+1)", "(+1)"],
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    _spellLength: number
  ): number => {
    const reward = 1;
    const allWest = domainWords.every((word) => {
      const cleanWord = word as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.west;
    });
    const allEast = domainWords.every((word) => {
      const cleanWord = word as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.east;
    });
    return allWest || allEast ? reward : 0;
  },
};
