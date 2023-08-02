import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

// TODO: Complete this formula
export const zRule = {
  formulaName: powerRulesList.ZYGAPOPHYTIC,
  name: ["Zygapofítico", "Zygapophytic"],
  description: [
    "Todas las Palabras del hechizo tienen una Palabra correspondiente que es analoga a su dominio opuesto",
    "Whose constituent Words have a corresponding Word that is analogous to its diametric domain",
  ],
  rewardText: ["(+1/pareja)", "(+1/pair)"],
  ready: false, // TODO: not ready yet.
  evalFunction: (): number => {
    return 0;
  },
};
