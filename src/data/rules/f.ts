import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const fRule = {
  formulaName: powerRulesList.FORMAL,
  name: ["Formal", "Formal"],
  description: [
    "Contiene un numero igual de Palabras de cada unico dominio representado en el hechizo y el hechizo abarca al menos dos dominios",
    "Which contain an equal number of Words from each unique domain represented by the spell, and which contains Words from at least 2 domains.",
  ],
  rewardText: ["(+3, minimo 2 Palabras)", "(+3, minimum 2 Words)"],
  version: 1.1,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const spellUniqueDomains = new Set(domainWords);
    if (spellUniqueDomains.size < 2 || spellLength < 2) {
      return 0;
    }
    const uniqueArr = Array.from(spellUniqueDomains);
    const numOfWordsArr = uniqueArr.map((uniqueDomain) => {
      return domainWords.filter((domain) => {
        return domain === uniqueDomain;
      }).length;
    });
    const setOfNum = new Set(numOfWordsArr); // should be reduced to a single element
    const reward = 3;
    return spellUniqueDomains.size >= 2 && setOfNum.size === 1 ? reward : 0;
  },
};
