import * as Rules from "../data/rules";

type validRule = {
  formulaName: string;
  name: string[];
  description: string[];
  rewardText: string[];
  version?: any;
  evalFunction: (
    words: string[],
    domainWords: string[],
    spellLength: number,
    invertedWords?: boolean[],
    assonanceWords?: boolean[],
    rhymingWords?: boolean[],
    isGracious?: boolean
  ) => number;
};

export const ruleList: validRule[] = [
  Rules.aRule,
  Rules.bRule,
  Rules.cRule,
  Rules.dRule,
  Rules.eRule,
  Rules.fRule,
  Rules.gRule,
  Rules.hRule,
  Rules.iRule,
  Rules.jRule,
  Rules.kRule,
  Rules.lRule,
  Rules.mRule,
  Rules.nRule,
  Rules.oRule,
  Rules.pRule,
  Rules.qRule,
  Rules.rRule,
  Rules.sRule,
  Rules.tRule,
  Rules.uRule,
  Rules.vRule,
  Rules.wRule,
  Rules.xRule,
  Rules.yRule,
  Rules.zRule,
];
