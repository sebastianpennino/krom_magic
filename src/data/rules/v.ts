import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const vRule = {
  formulaName: powerRulesList.VERTEXTUAL,
  name: ["Vertextual", "Vertextual"],
  description: [
    "Todas las Palabras pertencen al mismo cuarto en el diagrama",
    "Whose Words all belong to the same quaternant",
  ],
  rewardText: ["(+1/Palabra, maximo +4)", "(+1/Word, up to +4)"],
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const reward = spellLength > 4 ? 4 : spellLength;
    const uniqueDomains = new Set(domainWords);
    if (uniqueDomains.size > 2) {
      // Avoid calculate if the spread will be more than 2 domains
      return 0;
    }
    const arr = Array.from(uniqueDomains);
    const cleanWord = arr[0] as unknown as ValidPowerWordDomain;
    const compareTo = cyclogram[cleanWord]?.quarter;
    const allSameQuarter = domainWords.every((word) => {
      const clean = word as unknown as ValidPowerWordDomain;
      return cyclogram[clean]?.quarter === compareTo;
    });
    return allSameQuarter ? reward : 0;
  },
};
