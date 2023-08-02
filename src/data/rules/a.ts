import { powerRulesList } from "@apptypes/PowerRules";

export const aRule = {
  formulaName: powerRulesList.ACCOMMODANT,
  name: ["Acomodada", "Accommodant"],
  description: [
    "La primera y última Palabra son del mismo dominio (y ninguna otra Palabra es de ese dominio)",
    "Whose first and last Word are from the same domain, and no other Words share that domain",
  ],
  rewardText: ["(+2)", "(+2)"],
  version: 1.2,
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const reward = 2;
    const firstWord = domainWords[0];
    const lastWord = domainWords[spellLength - 1];
    const same = firstWord === lastWord;
    if (spellLength > 2) {
      const rest = domainWords.slice(1, -1);
      return same && rest.every((word) => word !== firstWord) ? reward : 0;
    }
    return same ? reward : 0;
  },
};
