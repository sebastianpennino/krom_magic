import * as wordList from "@data/words";
import { PowerWordDomain, ValidPowerWordDomain } from "@apptypes/Domains";

export const powerWordList: Record<ValidPowerWordDomain, string[][]> = {
  [PowerWordDomain.UNKNOWN]: [["."], ["."]],
  [PowerWordDomain.ILUSION]: [
    wordList.ilusionismWordsSpanish,
    wordList.ilusionismWordsEnglish,
  ],
  [PowerWordDomain.DIVINATION]: [
    wordList.divinationWordsSpanish,
    wordList.divinationWordsEnglish,
  ],
  [PowerWordDomain.ABJURATION]: [
    wordList.abjurationWordsSpanish,
    wordList.abjurationWordsEnglish,
  ],
  [PowerWordDomain.ENCHANTMENT]: [
    wordList.enchantmentWordsSpanish,
    wordList.enchantmentWordsEnglish,
  ],
  [PowerWordDomain.TRANSMUTATION]: [
    wordList.transmutationWordsSpanish,
    wordList.transmutationWordsEnglish,
  ],
  [PowerWordDomain.NECROMANCY]: [
    wordList.necromancyWordsSpanish,
    wordList.necromancyWordsEnglish,
  ],
  [PowerWordDomain.CONJURATION]: [
    wordList.conjurationWordsSpanish,
    wordList.conjurationWordsEnglish,
  ],
  [PowerWordDomain.EVOCATION]: [
    wordList.evocationWordsSpanish,
    wordList.evocationWordsEnglish,
  ],
};
