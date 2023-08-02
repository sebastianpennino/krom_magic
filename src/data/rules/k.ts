import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

// !IMPORTANT: This rule has been changed to a totally different new thing
export const kRule = {
  formulaName: powerRulesList.KYMOIAMBIC,
  name: ["Kymonabico", "Kymoiambic"],
  description: [
    "Todas las Palabras pertenencen a dominios pares o impares",
    "for which all the Words belong to either even or odd domains",
  ],
  rewardText: ["(+1/Palabra), max 4", "(+1/Word), max 4"],
  version: 1.5,
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const reward = spellLength > 4 ? 4 : spellLength;
    const domainIds = domainWords.map((w) => {
      const cleanWord = w as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.id;
    });
    const allEven = domainIds.every((num) => num % 2 === 0);
    const allOdd = domainIds.every((num) => num % 2 !== 0);

    return allEven || allOdd ? reward : 0;
  },
};
