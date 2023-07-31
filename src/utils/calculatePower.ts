import { PowerRules, ruleList } from "../app-types/PowerRules";

type RulesObject = {
  [PowerRules.ACCOMMODANT]: number;
  [PowerRules.BABELOUS]: number;
  [PowerRules.COMPOUND]: number;
  [PowerRules.DEFRACTIVE]: number;
  [PowerRules.EUPHONIC]: number;
  [PowerRules.FORMAL]: number;
  [PowerRules.GRACIOUS]: number;
  [PowerRules.HYPOVECTIVE]: number;
  [PowerRules.INTRAVERSIVE]: number;
  [PowerRules.JUSTIFIED]: number;
  [PowerRules.KYMOIAMBIC]: number;
  [PowerRules.LEXICAL]: number;
  [PowerRules.MULTIVARIATE]: number;
  [PowerRules.NONDIVERGENT]: number;
  [PowerRules.ORBITAL]: number;
  [PowerRules.PENTARCHIAL]: number;
  [PowerRules.QUINESSCENT]: number;
  [PowerRules.REFRACTIVE]: number;
  [PowerRules.SKEW]: number;
  [PowerRules.TRIVECTANT]: number;
  [PowerRules.UNDULANT]: number;
  [PowerRules.VERTEXTUAL]: number;
  [PowerRules.WENDING]: number;
  [PowerRules.XENOETHICAL]: number;
  [PowerRules.YEALING]: number;
  [PowerRules.ZYGAPOPHYTIC]: number;
};

const defaultRulesObject = {
  [PowerRules.ACCOMMODANT]: 0,
  [PowerRules.BABELOUS]: 0,
  [PowerRules.COMPOUND]: 0,
  [PowerRules.DEFRACTIVE]: 0,
  [PowerRules.EUPHONIC]: 0,
  [PowerRules.FORMAL]: 0,
  [PowerRules.GRACIOUS]: 0,
  [PowerRules.HYPOVECTIVE]: 0,
  [PowerRules.INTRAVERSIVE]: 0,
  [PowerRules.JUSTIFIED]: 0,
  [PowerRules.KYMOIAMBIC]: 0,
  [PowerRules.LEXICAL]: 0,
  [PowerRules.MULTIVARIATE]: 0,
  [PowerRules.NONDIVERGENT]: 0,
  [PowerRules.ORBITAL]: 0,
  [PowerRules.PENTARCHIAL]: 0,
  [PowerRules.QUINESSCENT]: 0,
  [PowerRules.REFRACTIVE]: 0,
  [PowerRules.SKEW]: 0,
  [PowerRules.TRIVECTANT]: 0,
  [PowerRules.UNDULANT]: 0,
  [PowerRules.VERTEXTUAL]: 0,
  [PowerRules.WENDING]: 0,
  [PowerRules.XENOETHICAL]: 0,
  [PowerRules.YEALING]: 0,
  [PowerRules.ZYGAPOPHYTIC]: 0,
};

// Given current words returns all the possible rules and points
export const calculatePower = (
  chosenLang: number,
  words: string[],
  domainWords: string[],
  spellLength: number
) => {
  const cleanDomainWords = domainWords.slice(0, spellLength);
  const rst = ruleList.map((element) => {
    return {
      name: element.name[chosenLang],
      letter: element.name[chosenLang].charAt(0).toLowerCase(),
      description: element.description[chosenLang],
      rewardText: element.rewardText[chosenLang],
      score: element.evalFunction(words, cleanDomainWords, spellLength),
    };
  });
  const realScore = rst
    .map((r) => r.score)
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, spellLength) // pick same as number words
    .reduce((acc, cur) => acc + cur, 0);
  const totalScore = rst.reduce((rst, cur) => {
    return rst + cur.score;
  }, 0);
  return {
    // total: totalScore,
    realScore,
    pickedRules: rst
      // .filter((l) => l.letter === "q") // for testing
      .filter((rst) => rst.score > 0)
      .sort((a, b) => a.score - b.score)
      .reverse()
      .slice(0, spellLength)
      .map((r) => ({
        name: r.name,
        desc: r.description,
        score: r.score,
      })),
    allPositiveRules: rst.filter((rst) => rst.score > 0),
    allRules: rst.map((r) => ({
      letter: r.letter.toUpperCase(),
      desc: r.description,
      score: r.score,
    })),
  };
};
