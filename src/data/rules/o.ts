import { ValidPowerWordDomain, cyclogram } from "../../apptypes/Domains";
import { powerRulesList } from "@apptypes/PowerRules";

export const oRule = {
  formulaName: powerRulesList.ORBITAL,
  name: ["Orbital", "Orbital"],
  description: [
    "Los dominios de cada Palabra van en una misma direccion (horario u antihorario) (y dentro de una unica rotacion!)",
    "For which the domains of each Word in order flow in one direction (either clockwise or counter-clockwise within one rotation) around the Octad Cyclogram",
  ],
  rewardText: ["(+2)", "(+2)"],
  version: 1.4,
  ready: true,
  evalFunction: (
    _words: string[],
    domainWords: string[],
    spellLength: number
  ): number => {
    const reward = 2;
    const uniqueSize = new Set(domainWords).size;
    if (spellLength === 1 || uniqueSize === 1) {
      return 0;
    } else if (spellLength === 2 && uniqueSize === 2) {
      return reward;
    }
    const domainPositions = domainWords.map((word) => {
      const cleanWord = word as unknown as ValidPowerWordDomain;
      return cyclogram[cleanWord]?.id;
    });

    let totalRotation = 0;
    let extraRotation = 0;
    const directionList = domainPositions.map((current, idx, arr) => {
      const last = idx + 1 === arr.length;
      const nextIdx = last ? 0 : idx + 1;
      const next = arr[nextIdx];
      let diff = next - current;
      if (current > 4 && next <= 4) {
        // is looping!
        diff = 8 - current + next;
      }
      if (diff === 0) {
        return "[-]";
      }
      if (diff === 4) {
        // same distance from everywhere
        extraRotation += diff;
        return "[<->]";
      }
      if (diff > 0 && diff < 4) {
        totalRotation += !last ? diff : 0;
        return "->";
      } else {
        totalRotation -= !last ? diff : 0;
        return "<-";
      }
    });
    const filtered = directionList
      .slice(0, -1) // ignore the last element (we don't care about looping)
      .filter((dir) => dir !== "[<->]"); // no matter their direction!

    const verify = filtered.every((dir) => {
      return dir === filtered[0];
    });

    const singleLoop = Math.abs(totalRotation) + extraRotation <= 8;

    return verify && singleLoop ? reward : 0;
  },
};
