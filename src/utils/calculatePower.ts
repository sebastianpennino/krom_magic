import { ValidPowerWordDomain } from "@apptypes/Domains";

// Given current words returns all the possible rules and points
export const calculatePower = (
  chosenLang: number,
  detailedWords: string[],
  domainWords: string[],
  spellLength: number,
) => {
  const cleanDetailedWords = detailedWords.slice(0, spellLength);
  const cleanDomainWords = domainWords.slice(0, spellLength);
  
  const realScore = spellLength * 3

  return {
    realScore,
  };
};
