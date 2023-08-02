import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

// TODO: Complete this formula
export const wRule = {
  formulaName: powerRulesList.WENDING,
  name: ["Wendi", "Wending"],
  description: [
    "Dos o más Palabras son analogas, y exactamente 1 Palabra es opuesta a una de las analogas",
    "For which two or more words are analogous, and exactly one is diametric to one of the analogous words",
  ],
  rewardText: ["(+2)", "(+2)"],
  evalFunction: (): number => {
    return 0;
  },
};
