export enum DetailMode {
  TACTICAL = "TACTICAL",
  NARRATIVE = "NARRATIVE",
  BOTH = "BOTH",
}


export type ValidDetailMode =
  (typeof DetailMode)[keyof typeof DetailMode];


type DetailItem = {
  formulaName: string,
  name: string[];
  mode: DetailMode;
  isMain: boolean;
  progression: number[];
  steps: string[][];
};

export const detailList: Array<DetailItem> = [
  {
    formulaName: 'pointB',
    name: ["Objetivos - Punto", "Target - Point"],
    isMain: true,
    progression: [1, 3, 5, 6, 9],
    mode: DetailMode.BOTH,
    steps: [
      [
        "Unico",
        "Pocos (2-5)",
        "Bastantes (6-11)",
        "Muchos (12-24)",
        "Maximo (10x hexagono)",
      ],
      [
        "Single",
        "Few (2-5)",
        "Several (6-11)",
        "Many (12-24)",
        "Maximum (10x hex)",
      ],
    ],
  },
  {
    formulaName: 'volumeT',
    name: ["Objetivos - Volumen", "Target - Volume"],
    mode: DetailMode.TACTICAL,
    isMain: true,
    progression: [1, 3, 6, 9, 12],
    steps: [
      ["Una casilla", "Radio = 1", "Radio = 2", "Radio = 3", "Radio 4"],
      ["Single square", "Radius = 1", "Radius = 2", "Radius = 3", "Radius = 4"],
    ],
  },
  {
    formulaName: 'volumeN',
    name: ["Objetivos - Volumen", "Target - Volume"],
    mode: DetailMode.NARRATIVE,
    progression: [1, 3, 6, 9, 12],
    isMain: true,
    steps: [
      [
        "Persona",
        "Habitación (o Radio 5m)",
        "Edificio (o Radio 20m)",
        "Cuadra (o Radio 50m)",
        "Masivo (50m x hexagono)",
      ],
      [
        "A Person",
        "Room (or 16ft radius)",
        "Building (or 21yd radius)",
        "Block (or 55yd radius)",
        "Massive (or 55yd radius per Hex)",
      ],
    ],
  },
  {
    formulaName: 'distanceT',
    name: ["Distancia", "Distance"],
    mode: DetailMode.TACTICAL,
    progression: [1, 4, 6, 9],
    isMain: true,
    steps: [
      [
        "Casilla adyacente",
        "6 Casillas entre medio",
        "9 Casillas entre medio",
        "3 casillas por hexagono",
      ],
      [
        "Adjacent square",
        "6 squares in between",
        "9 squares in between",
        "3 squares per hexagon",
      ],
    ],
  },
  {
    formulaName: 'distanceN',
    name: ["Distancia", "Distance"],
    mode: DetailMode.NARRATIVE,
    progression: [1, 4, 6, 9, 15],
    isMain: true,
    steps: [
      ["Toque", "Voz (10m)", "Grito (100m)", "Vista (1000m)", "Imagen Mental*"],
      [
        "Touch",
        "Voice (33ft)",
        "Shout (110yd)",
        "Sight (1100yd)",
        "Mental Image*",
      ],
    ],
  },
  {
    formulaName: 'timeT',
    name: ["Tiempo (T)", "Time (T)"],
    mode: DetailMode.TACTICAL,
    progression: [0, 4, 6, 9, 12],
    isMain: true,
    steps: [
      [
        "Instantaneo / 1 As",
        "2 Asaltos",
        "3 Asaltos",
        "5 Asaltos",
        "Todo el combate",
      ],
      [
        "Instant / 1 Rd",
        "2 Rounds",
        "3 Rounds",
        "5 Rounds",
        "The whole combat",
      ],
    ],
  },
  {
    formulaName: 'timeN',
    name: ["Tiempo (N)", "Time (N)"],
    mode: DetailMode.NARRATIVE,
    progression: [0, 4, 6, 9, 12],
    isMain: true,
    steps: [
      [
        "Instantaneo",
        "Fugaz (30 segundos)",
        "Minutos (30 min)",
        "Horas (2 horas)",
        "Un dia (24 horas)",
      ],
      [
        "Instant",
        "Briefly (30 sec)",
        "Minutes (30 min)",
        "Hours (2 hours)",
        "A day (24 hours)",
      ],
    ],
  },
  {
    formulaName: 'dmgSusB',
    name: ["Daño sostenido", "Damage sustained"],
    isMain: true,
    progression: [1, 4, 6, 9],
    mode: DetailMode.BOTH,
    steps: [
      ["1", "4", "6", "9"],
      ["1", "4", "6", "9"],
    ],
  },
  {
    formulaName: 'dmgUniqueB',
    name: ["Daño unico", "Damage once"],
    isMain: true,
    progression: [1, 4, 6, 9],
    mode: DetailMode.BOTH,
    steps: [
      ["1", "4", "6", "9"],
      ["1", "4", "6", "9"],
    ],
  },
  {
    formulaName: 'invocB',
    name: ["Invocacion", "Invocation"],
    isMain: false,
    progression: [1, 3, 6, 9, 12],
    mode: DetailMode.BOTH,
    steps: [
      ["T1", "T2 / QD", "T3 / QC", "T4 / QB", "T5 / QA"],
      ["T1", "T2 / QD", "T3 / QC", "T4 / QB", "T5 / QA"],
    ],
  },
  {
    formulaName: 'alterB',
    name: ["Alteracion?", "Alteration?"],
    isMain: false,
    progression: [2, 4, 6],
    mode: DetailMode.BOTH,
    steps: [
      [
        "(+2) a golpe o mistica",
        "(+1) a habilidad o derivada",
        "(+2) a habilidad o derivada",
      ],
      [
        "(+2) to Impact or Mystique",
        "(+1) to a skill or Derived Stats",
        "(+2) to a skill or Derived Stats",
      ],
    ],
  },
];
