import { PowerWordDomain, ValidPowerWordDomain, cyclogram } from "./Domains";

export enum PowerRules {
  ACCOMMODANT = "ACCOMMODANT",
  BABELOUS = "BABELOUS",
  COMPOUND = "COMPOUND",
  DEFRACTIVE = "DEFRACTIVE",
  EUPHONIC = "EUPHONIC",
  FORMAL = "FORMAL",
  GRACIOUS = "GRACIOUS",
  HYPOVECTIVE = "HYPOVECTIVE",
  INTRAVERSIVE = "INTRAVERSIVE",
  JUSTIFIED = "JUSTIFIED",
  KYMOIAMBIC = "KYMOIAMBIC",
  LEXICAL = "LEXICAL",
  MULTIVARIATE = "MULTIVARIATE",
  NONDIVERGENT = "NONDIVERGENT",
  ORBITAL = "ORBITAL",
  PENTARCHIAL = "PENTARCHIAL",
  QUINESSCENT = "QUINESSCENT",
  REFRACTIVE = "REFRACTIVE",
  SKEW = "SKEW",
  TRIVECTANT = "TRIVECTANT",
  UNDULANT = "UNDULANT",
  VERTEXTUAL = "VERTEXTUAL",
  WENDING = "WENDING",
  XENOETHICAL = "XENOETHICAL",
  YEALING = "YEALING",
  ZYGAPOPHYTIC = "ZYGAPOPHYTIC",
}

export type ValidPowerRules = (typeof PowerRules)[keyof typeof PowerRules];

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
  {
    formulaName: PowerRules.ACCOMMODANT,
    name: ["Acomodada", "Accommodant"],
    description: [
      "La primera y última Palabra son del mismo dominio (y ninguna otra Palabra es de ese dominio)",
      "Whose first and last Word are from the same domain, and no other Words share that domain",
    ],
    rewardText: ["(+2)", "(+2)"],
    version: 1.2,
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
  },
  {
    formulaName: PowerRules.BABELOUS,
    name: ["Babelinosa", "Babelous"],
    description: [
      "Cada Palabra del hechizo comienza con la misma letra del alfabeto",
      "For which every Word begins with the same letter of the alphabet",
    ],
    rewardText: ["(+1/Palabra)", "(+1/Word)"],
    version: 1.1,
    evalFunction: (
      words: string[],
      _domainWords: string[],
      spellLength: number
    ): number => {
      const firstLetter = words[0].charAt(0);
      const allWordsStartWithFirstLetter = words.every((chosenWord) => {
        return firstLetter === chosenWord.charAt(0);
      });
      return allWordsStartWithFirstLetter ? spellLength : 0;
    },
  },
  {
    formulaName: PowerRules.COMPOUND,
    name: ["Compuesta", "Compound"],
    description: [
      "Cada Palabra es analoga a otra Palabra en el hechizo",
      "Whose Words are each analogous to one other Word in the spell",
    ],
    rewardText: ["(+1/Palabra)", "(+1/Word)"],
    version: 1.2,
    evalFunction: (
      _words: string[],
      domainWords: string[],
      spellLength: number
    ): number => {
      const toFind = domainWords.map((domain) => {
        const clean = domain as unknown as ValidPowerWordDomain;
        return {
          left: cyclogram[clean]?.analogousAntiClockWise,
          right: cyclogram[clean]?.analogousClockWise,
        };
      });
      const allFound = toFind.every((item) => {
        const found = domainWords.some(
          (word) => word === item.left || word === item.right
        );
        return found;
      });
      return allFound ? spellLength : 0;
    },
  },
  {
    formulaName: PowerRules.DEFRACTIVE,
    name: ["Defractiva", "Defractive"],
    description: [
      "Contiene al menos dos Palabras con asonancia notable",
      "Which contain at least two Words that exhibit significant assonance",
    ],
    rewardText: ["(+2/Palabra Asonante)", "(+2/Assonat Word)"],
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      _spellLength: number,
      _invertedWords?: boolean[],
      assonanceWords?: boolean[]
    ): number => {
      const assonanceVal =
        (assonanceWords && assonanceWords.filter((w) => w).length) || 0;
      const reward = assonanceVal * 2;
      return assonanceVal >= 2 ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.EUPHONIC,
    name: ["Eufonica", "Euphonic"],
    description: [
      "Contiene exactamente una Palabra de cada uno de los ocho dominios",
      "Which contains exactly one word from each of the eight domains.",
    ],
    rewardText: ["(+5)", "(+5)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      spellLength: number
    ): number => {
      const uniqueSize = new Set(domainWords).size;
      const reward = 5;
      return uniqueSize === 8 && spellLength === 8 ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.FORMAL,
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
  },
  {
    formulaName: PowerRules.GRACIOUS,
    name: ["Graciado", "Gracious"],
    description: [
      "No contiene Palabras que impliquen daño a ninguna criatura viviente",
      "Which contain no Words that imply harm to any living creature.",
    ],
    rewardText: ["(+4)", "(+4)"],
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      _spellLength: number,
      _invertedWords?: boolean[],
      _assonanceWords?: boolean[],
      _rhymingWords?: boolean[],
      isGracious?: boolean
    ): number => {
      const reward = 4;
      return isGracious ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.HYPOVECTIVE,
    name: ["Hipovectivo", "Hypovective"],
    description: [
      "Donde todas las Palabras son de distintos dominios",
      "Whose Words are all from different domains",
    ],
    rewardText: ["(+1/Palabra)", "(+1/Word)"],
    version: 1.1,
    evalFunction: (
      _words: string[],
      domainWords: string[],
      spellLength: number
    ): number => {
      const spellUniqueDomains = new Set(domainWords);
      return spellUniqueDomains.size === spellLength &&
        spellUniqueDomains.size > 1
        ? spellLength
        : 0;
    },
  },
  {
    formulaName: PowerRules.INTRAVERSIVE,
    name: ["Intreversivo", "Intraversive"],
    description: [
      "Donde al menos dos Palabras del hechizo riman",
      "For which at least two Words in the spell rhyme.",
    ],
    rewardText: ["(+2/Palabra con rima)", "(+2/rhyming Word)"],
    version: 1.2,
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      _spellLength: number,
      _invertedWords?: boolean[],
      _assonanceWords?: boolean[],
      rhymingWords?: boolean[]
    ): number => {
      const rhymingWordsOnly =
        (rhymingWords && rhymingWords.filter((w) => w === true)) ?? [];
      const reward = rhymingWordsOnly.length * 2;
      return rhymingWordsOnly.length >= 2 ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.JUSTIFIED,
    name: ["Justificado", "Justified"],
    description: [
      "Donde todas las Palabras del hechizo son exclusivamente del 'Norte' o 'Sur'",
      "Whose Words come from either the upper or lower domains exclusively",
    ],
    rewardText: ["(+1)", "(+1)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      _spellLength: number
    ): number => {
      const allNorth = domainWords.every((word) => {
        const cleanWord = word as unknown as ValidPowerWordDomain;
        return cyclogram[cleanWord]?.north;
      });
      const allSouth = domainWords.every((word) => {
        const cleanWord = word as unknown as ValidPowerWordDomain;
        return cyclogram[cleanWord]?.south;
      });
      const reward = 1;
      return allNorth || allSouth ? reward : 0;
    },
  },
  // !IMPORTANT: This rule has been changed to a totally different new thing
  {
    formulaName: PowerRules.KYMOIAMBIC,
    name: ["Kymoiambico", "Kymoiambic"],
    description: [
      "Todas las Palabras pertenencen a dominios pares o impares",
      "for which all the Words belong to either even or odd domains",
    ],
    rewardText: ["(+1/Palabra), max 4", "(+1/Word), max 4"],
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
  },
  {
    formulaName: PowerRules.LEXICAL,
    name: ["Lexico", "Lexical"],
    description: [
      "Las Palabras del hechizo estan en orden alfabetico",
      "whose constituent Words are in alphabetical order",
    ],
    rewardText: ["(+1/Palabra)", "(+1/Word)"],
    version: 1.1,
    evalFunction: (
      words: string[],
      _domainWords: string[],
      spellLength: number
    ): number => {
      if (words.length < 2) {
        return 0;
      }
      const wordsSorted = [...words].sort();
      const areWordsInOrder = wordsSorted.every((w, idx) => w === words[idx]);
      return words.length > 2 && areWordsInOrder ? spellLength : 0;
    },
  },
  {
    formulaName: PowerRules.MULTIVARIATE,
    name: ["Multivariante", "Multivariate"],
    description: [
      "Donde todas las Palabras fueron invertidas",
      "whose Words have been all been inverted",
    ],
    rewardText: ["(+1/Palabra)", "(+1/Word)"],
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      spellLength: number,
      invertedWords?: boolean[]
    ): number => {
      const allInverted =
        (invertedWords && invertedWords.every((w) => w === true)) ?? false;
      return allInverted ? spellLength : 0;
    },
  },
  {
    formulaName: PowerRules.NONDIVERGENT,
    name: ["No-divergente", "Nondivergent"],
    description: [
      "Todas las Palabras son del mismo dominio",
      "whose Words are all of the same domain",
    ],
    rewardText: ["(+1/Palabra, maximo +4)", "(+1/Word, up to +4)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      spellLength: number
    ): number => {
      const uniqueSize = new Set(domainWords).size;
      const reward = spellLength > 4 ? 4 : spellLength;
      return uniqueSize === 1 ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.ORBITAL,
    name: ["Orbital", "Orbital"],
    description: [
      "Los dominios de cada Palabra van en una misma direccion (horario u antihorario) (y dentro de una unica rotacion!)",
      "For which the domains of each Word in order flow in one direction (either clockwise or counter-clockwise within one rotation) around the Octad Cyclogram",
    ],
    rewardText: ["(+2)", "(+2)"],
    version: 1.3,
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
  },
  // {
  //   formulaName: PowerRules.PENTARCHIAL,
  //   name: ["Pentarquial", "Pentarchial"],
  //   description: [
  //     "Donde usando el diagrama como referencia, un pentagrama puede ser dibujando conectando cada Palabra en orden",
  //     "For which, on the Octad Cyclogram, a uniform pentagram can be drawn by connecting with a straight line the domain of each Word in order",
  //   ],
  //   rewardText: ["(+5)", "(+5)"],
  //   evalFunction: (
  //     words: string[],
  //     domainWords: string[],
  //     spellLength: number
  //   ): number => {
  //     const uniqueSize = new Set(domainWords).size;
  //     if (spellLength !== 5 || uniqueSize !== 5) {
  //       // Avoid calculations if not a 5 words / 5 different domains case
  //       return 0;
  //     }
  //     // !IMPORTANT: Complete this formula
  //     return 0;
  //   },
  // },
  // {
  //   formulaName: PowerRules.QUINESSCENT,
  //   name: ["Quiescente", "Quinesscent"],
  //   description: [
  //     "Usando el diagrama como referencia, una linea recta puede dibujarse entre los dominios de cada Palabra en orden, nunca conectando dos dominios analogos o cruzando sobre la lineas anteriores",
  //     "For which a straight line can be drawn between the domains of each Word in order without connecting two analogous domains or crossing over the line",
  //   ],
  //   rewardText: ["(+4, minimo 3 Palabras)", "(+4, minimum 3 words)"],
  //   evalFunction: (
  //     words: string[],
  //     domainWords: string[],
  //     spellLength: number
  //   ): number => {
  //     const uniqueSize = new Set(domainWords).size;
  //     if (spellLength < 3 || uniqueSize < 3) {
  //       // Avoid calculations if not a at least 3 words / 3 different domains
  //       return 0;
  //     }
  //     return 0;
  //   },
  // },
  {
    formulaName: PowerRules.REFRACTIVE,
    name: ["Refractivo", "Refractive"],
    description: [
      "Contiene una Palabra y una opuesta que le corresponde",
      "Which contains a Word with a corresponding diametric Word",
    ],
    rewardText: ["(+1/pareja)", "(+1/pair)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      _spellLength: number
    ): number => {
      let hits = 0;
      domainWords.forEach((domain) => {
        const clean = domain as unknown as ValidPowerWordDomain;
        const opposite = cyclogram[clean]?.opposite;
        const foundIdx = domainWords.findIndex((w) => {
          return w === opposite;
        });
        if (foundIdx > -1) {
          hits++;
        }
      });
      const reward = Math.floor(hits / 2);
      return hits > 0 ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.SKEW,
    name: ["Sesgado", "Skew"],
    description: [
      "Contiene una unica palabra invertida",
      "Which contains only a single inverted word",
    ],
    rewardText: ["(+1)", "(+1)"],
    version: 1.1,
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      _spellLength: number,
      invertedWords?: boolean[]
    ): number => {
      const invertedWordsOnly =
        invertedWords && invertedWords.filter((w) => w === true);
      return invertedWordsOnly?.length === 1 ? 1 : 0;
    },
  },
  // TODO: Complete this formula
  // {
  //   formulaName: PowerRules.TRIVECTANT,
  //   name: ["Trivectante", "Trivectant"],
  //   description: [
  //     "El numero de dominios 'vacio' entre cada Palabra suman hasta 5 y no hay Palabras analogas",
  //     "For which the number of domains between the domains of each Word sum to 5, and for which no two Words are analogous",
  //   ],
  //   rewardText: ["(+3)", "(+3)"],
  //   evalFunction: (
  //     _words: string[],
  //     domainWords: string[],
  //     spellLength: number
  //   ): number => {
  //     return 0;
  //   },
  // },
  {
    formulaName: PowerRules.UNDULANT,
    name: ["Undulante", "Undulant"],
    description: [
      "El numero de Palabras es primo (2, 3, 5, 7, 11...)",
      "With a prime number of words (2, 3, 5, 7, 11...)",
    ],
    rewardText: ["(+3)", "(+3)"],
    evalFunction: (
      _words: string[],
      _domainWords: string[],
      spellLength: number
    ): number => {
      switch (spellLength) {
        case 2:
        case 3:
        case 5:
        case 7:
        case 11:
          return 3;
      }
      return 0;
    },
  },
  {
    formulaName: PowerRules.VERTEXTUAL,
    name: ["Vertextual", "Vertextual"],
    description: [
      "Todas las Palabras pertencen al mismo cuarto en el diagrama",
      "Whose Words all belong to the same quaternant",
    ],
    rewardText: ["(+1/Palabra, maximo +4)", "(+1/Word, up to +4)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      spellLength: number
    ): number => {
      const reward = spellLength > 4 ? 4 : spellLength;
      const uniqueDomains = new Set(domainWords);
      if (uniqueDomains.size > 2) {
        // Avoid calculate if the spread will be more than 2 domains
        return 0;
      }
      const arr = Array.from(uniqueDomains);
      const cleanWord = arr[0] as unknown as ValidPowerWordDomain;
      const compareTo = cyclogram[cleanWord]?.quarter;
      const allSameQuarter = domainWords.every((word) => {
        const clean = word as unknown as ValidPowerWordDomain;
        return cyclogram[clean]?.quarter === compareTo;
      });
      return allSameQuarter ? reward : 0;
    },
  },
  // TODO: Complete this formula
  // {
  //   formulaName: PowerRules.WENDING,
  //   name: ["Wendi", "Wending"],
  //   description: [
  //     "Dos o más Palabras son analogas, y exactamente 1 Palabra es opuesta a una de las analogas",
  //     "For which two or more words are analogous, and exactly one is diametric to one of the analogous words",
  //   ],
  //   rewardText: ["(+2)", "(+2)"],
  //   evalFunction: (): number => {
  //     return 0;
  //   },
  // },
  {
    formulaName: PowerRules.XENOETHICAL,
    name: ["Xenoetico", "Xenoethical"],
    description: [
      "Todas las Palabras pertenecen a dominios de orden o caos exclusivamente",
      "Whose Words come from the domains of either order or chaos exclusively",
    ],
    rewardText: ["(+1)", "(+1)"],
    evalFunction: (
      _words: string[],
      domainWords: string[],
      _spellLength: number
    ): number => {
      const reward = 1;
      const allWest = domainWords.every((word) => {
        const cleanWord = word as unknown as ValidPowerWordDomain;
        return cyclogram[cleanWord]?.west;
      });
      const allEast = domainWords.every((word) => {
        const cleanWord = word as unknown as ValidPowerWordDomain;
        return cyclogram[cleanWord]?.east;
      });
      return allWest || allEast ? reward : 0;
    },
  },
  {
    formulaName: PowerRules.YEALING,
    name: ["Yealito", "Yealing"],
    description: [
      "Todas las Palabras del hechizo tienen el mismo numero de letras",
      "Whose contituent Words each have the same number of letters",
    ],
    rewardText: ["(+1 por letra de una Palabra)", "(+1 each letter in a word)"],
    evalFunction: (
      words: string[],
      _domainWords: string[],
      _spellLength: number
    ): number => {
      if (words.length < 1) {
        return 0;
      }
      const len = words[0].length;
      const check = words.every((word) => word.length === len);
      return check ? len : 0;
    },
  },
  // TODO: Complete this formula
  // {
  //   formulaName: PowerRules.ZYGAPOPHYTIC,
  //   name: ["Zygapofítico", "Zygapophytic"],
  //   description: [
  //     "Todas las Palabras del hechizo tienen una Palabra correspondiente que es analoga a su dominio opuesto",
  //     "Whose constituent Words have a corresponding Word that is analogous to its diametric domain",
  //   ],
  //   rewardText: ["(+1/pareja)", "(+1/pair)"],
  //   evalFunction: (): number => {
  //     return 0;
  //   },
  // },
];
