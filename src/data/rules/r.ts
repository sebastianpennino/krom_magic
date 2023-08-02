import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const rRule = {
  formulaName: powerRulesList.REFRACTIVE,
  name: ["Refractivo", "Refractive"],
  description: [
    "Contiene una Palabra y una opuesta que le corresponde",
    "Which contains a Word with a corresponding diametric Word",
  ],
  rewardText: ["(+1/pareja)", "(+1/pair)"],
  evalFunction: (
    _words: string[],
    domainWords: string[],
    _spellLength: number
  ): number => {
    let hits = 0;
    domainWords.forEach((domain) => {
      const clean = domain as unknown as ValidPowerWordDomain;
      const opposite = cyclogram[clean]?.opposite;
      const foundIdx = domainWords.findIndex((w) => {
        return w === opposite;
      });
      if (foundIdx > -1) {
        hits++;
      }
    });
    const reward = Math.floor(hits / 2);
    return hits > 0 ? reward : 0;
  },
};
