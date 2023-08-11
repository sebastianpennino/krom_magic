import * as wordList from "@data/words";
import { PowerWordDomain, ValidPowerWordDomain } from "@apptypes/Domains";

export const powerWordList: Record<ValidPowerWordDomain, string[][]> = {
  [PowerWordDomain.MAIN]: [
    wordList.mainWordsSpanish,
    wordList.mainWordsEnglish,
  ],
  [PowerWordDomain.AUXILIAR]: [
    wordList.auxWordsSpanish,
    wordList.auxWordsEnglish,
  ],
};
