import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

// TODO: complete this
export const qRule = {
  formulaName: powerRulesList.QUINESSCENT,
  name: ["Quiescente", "Quinesscent"],
  description: [
    "Usando el diagrama como referencia, una linea recta puede dibujarse entre los dominios de cada Palabra en orden, nunca conectando dos dominios analogos o cruzando sobre la lineas anteriores",
    "For which a straight line can be drawn between the domains of each Word in order without connecting two analogous domains or crossing over the line",
  ],
  rewardText: ["(+4, minimo 3 Palabras)", "(+4, minimum 3 words)"],
  evalFunction: (
    words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const uniqueSize = new Set(domainWords).size;
    if (spellLength < 3 || uniqueSize < 3) {
      // Avoid calculations if not a at least 3 words / 3 different domains
      return 0;
    }
    return 0;
  },
};
