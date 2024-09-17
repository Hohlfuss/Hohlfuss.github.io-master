

type Game = {
  version: string;
  hampaita: number;
  hampaitaPerSekunti: number;
  totalPower: number;
  verta: number;
  activeTrainers: number;
  maxTrainers: number;
  freeTrainers: number;
  rebirths: number;
  veriKerroin: number;
  avaaSatunnainenHinta: number;
  avaaValitsemaHinta: number;
  rebirthFor: number;
  shopOpen: boolean;
  lastPlayed: number;
  activeFighter: boolean | string;
  activeWeightclass: string;
  app: HTMLElement | null;
  intervalId: number;
  now: number;

  globalSpeedMulti: number;
  globalPowerMulti: number;
  globalXpThreshMulti: number;

  flyweightThreshMultiMulti: number;
  bantamweightThreshMultiMulti: number;
  featherweightThreshMultiMulti: number;
  lightweightThreshMultiMulti: number;
  welterweightThreshMultiMulti: number;
  flyweightSpeedMulti: number;
  bantamweightSpeedMulti: number;
  featherweightSpeedMulti: number;
  lightweightSpeedMulti: number;
  welterweightSpeedMulti: number;

  flyweightXp: number;
  flyweightXpThresh: number;
  flyweightLevel: number;
  flyweightStep: number;
  flyweightCount: number;
  flyweightActive: boolean;

  bantamweightXp: number;
  bantamweightXpThresh: number;
  bantamweightLevel: number;
  bantamweightStep: number;
  bantamweightCount: number;
  bantamweightActive: boolean;

  featherweightXp: number;
  featherweightXpThresh: number;
  featherweightLevel: number;
  featherweightStep: number;
  featherweightCount: number;
  featherweightActive: boolean;

  lightweightXp: number;
  lightweightXpThresh: number;
  lightweightLevel: number;
  lightweightStep: number;
  lightweightCount: number;
  lightweightActive: boolean;

  welterweightXp: number;
  welterweightXpThresh: number;
  welterweightLevel: number;
  welterweightStep: number;
  welterweightCount: number;
  welterweightActive: boolean;

  totalCount: number;
  jenkkiCount: number;
  brassiCount: number;
  strikerCount: number;
  grapplerCount: number;
  alle30Count: number;
  ladyWaistCount: number;
  pelleCount: number;
  niceGuyCount: number;
  stanCount: number;
  afrikanMafiaCount: number;
  lookingAssCount: number;
  chadCount: number;
  championCount: number;
  lasiLeukaCount: number;
  legHuggerCount: number;
  unrankedCount: number;
  chickenCount: number;
  hasBeenCount: number;
};

type Ottelijat = {
  nimi: string[];
  power: number[];
  speed: number[];
  level: number[];
  hinta: number[];
  numero: number[];
  progress: number[];
  step: number[];
  visibleReq: number[];
  unlockReq: number[];
  totalPower: number[];
  isVisible: boolean[];
  isUnlocked: boolean[];
  isActive: boolean[];
  xp: number[];
  xpThresh: number[];
  img: string[];
  id: string[];
  interval: NodeJS.Timeout[] | null[];
  intervalIndex: NodeJS.Timeout | null | number;
  divEl: HTMLDivElement[];
  mastery10Unlcked: boolean[];
  mastery20Unlcked: boolean[];
  mastery30Unlcked: boolean[];
  mastery40Unlcked: boolean[];
  mastery50Unlcked: boolean[];
  mastery60Unlcked: boolean[];
  mastery70Unlcked: boolean[];
  mastery80Unlcked: boolean[];
  mastery90Unlcked: boolean[];
  mastery100Unlcked: boolean[];
  mastery10Done: number;
  mastery20Done: number;
  mastery30Done: number;
  mastery40Done: number;
  mastery50Done: number;
  mastery60Done: number;
  mastery70Done: number;
  mastery80Done: number;
  mastery90Done: number;
  mastery100Done: number;
  mastery10UnlockedFor5: boolean;
  mastery20UnlockedFor5: boolean;
  mastery30UnlockedFor5: boolean;
  mastery40UnlockedFor5: boolean;
  mastery50UnlockedFor5: boolean;
  mastery60UnlockedFor5: boolean;
  mastery70UnlockedFor5: boolean;
  mastery80UnlockedFor5: boolean;
  mastery90UnlockedFor5: boolean;
  mastery100UnlockedFor5: boolean;
  tags: {
    jenkki: boolean[];
    brassi: boolean[];
    striker: boolean[];
    grappler: boolean[];
    boxing: boolean[];
    alle30: boolean[];
    ladyWaist: boolean[];
    pelle: boolean[];
    niceGuy: boolean[];
    stan: boolean[];
    afrikanMafia: boolean[];
    lookingAss: boolean[];
    chad: boolean[];
    champion: boolean[];
    lasiLeuka: boolean[];
    legHugger: boolean[];
    unranked: boolean[];
    chicken: boolean[];
    hasBeen: boolean[];
  };
};

type Elements = {
  codyDurden: HTMLDivElement;
  codyDurdenXp: HTMLSpanElement;
  codyDurdenXpThresh: HTMLSpanElement;
  codyDurdenPower: HTMLSpanElement;
  codyDurdenSpeed: HTMLSpanElement;
  codyDurdenLevel: HTMLSpanElement;
  codyDurdenProgress: HTMLDivElement;

  asuAlmabayev: HTMLDivElement;
  asuAlmabayevXp: HTMLSpanElement;
  asuAlmabayevXpThresh: HTMLSpanElement;
  asuAlmabayevPower: HTMLSpanElement;
  asuAlmabayevSpeed: HTMLSpanElement;
  asuAlmabayevLevel: HTMLSpanElement;
  asuAlmabayevProgress: HTMLDivElement;

  brunoSilva: HTMLDivElement;
  brunoSilvaXp: HTMLSpanElement;
  brunoSilvaXpThresh: HTMLSpanElement;
  brunoSilvaPower: HTMLSpanElement;
  brunoSilvaSpeed: HTMLSpanElement;
  brunoSilvaLevel: HTMLSpanElement;
  brunoSilvaProgress: HTMLDivElement;

  tagirUlanbekov: HTMLDivElement;
  tagirUlanbekovXp: HTMLSpanElement;
  tagirUlanbekovXpThresh: HTMLSpanElement;
  tagirUlanbekovPower: HTMLSpanElement;
  tagirUlanbekovSpeed: HTMLSpanElement;
  tagirUlanbekovLevel: HTMLSpanElement;
  tagirUlanbekovProgress: HTMLDivElement;

  mattSchnell: HTMLDivElement;
  mattSchnellXp: HTMLSpanElement;
  mattSchnellXpThresh: HTMLSpanElement;
  mattSchnellPower: HTMLSpanElement;
  mattSchnellSpeed: HTMLSpanElement;
  mattSchnellLevel: HTMLSpanElement;
  mattSchnellProgress: HTMLDivElement;

  montelJackson: HTMLDivElement;
  montelJacksonXp: HTMLSpanElement;
  montelJacksonXpThresh: HTMLSpanElement;
  montelJacksonPower: HTMLSpanElement;
  montelJacksonSpeed: HTMLSpanElement;
  montelJacksonLevel: HTMLSpanElement;
  montelJacksonProgress: HTMLDivElement;

  dominickCruz: HTMLDivElement;
  dominickCruzXp: HTMLSpanElement;
  dominickCruzXpThresh: HTMLSpanElement;
  dominickCruzPower: HTMLSpanElement;
  dominickCruzSpeed: HTMLSpanElement;
  dominickCruzLevel: HTMLSpanElement;
  dominickCruzProgress: HTMLDivElement;

  jonathanMartinez: HTMLDivElement;
  jonathanMartinezXp: HTMLSpanElement;
  jonathanMartinezXpThresh: HTMLSpanElement;
  jonathanMartinezPower: HTMLSpanElement;
  jonathanMartinezSpeed: HTMLSpanElement;
  jonathanMartinezLevel: HTMLSpanElement;
  jonathanMartinezProgress: HTMLDivElement;

  kylerPhillips: HTMLDivElement;
  kylerPhillipsXp: HTMLSpanElement;
  kylerPhillipsXpThresh: HTMLSpanElement;
  kylerPhillipsPower: HTMLSpanElement;
  kylerPhillipsSpeed: HTMLSpanElement;
  kylerPhillipsLevel: HTMLSpanElement;
  kylerPhillipsProgress: HTMLDivElement;

  marioBautista: HTMLDivElement;
  marioBautistaXp: HTMLSpanElement;
  marioBautistaXpThresh: HTMLSpanElement;
  marioBautistaPower: HTMLSpanElement;
  marioBautistaSpeed: HTMLSpanElement;
  marioBautistaLevel: HTMLSpanElement;
  marioBautistaProgress: HTMLDivElement;

  edsonBarboza: HTMLDivElement;
  edsonBarbozaXp: HTMLSpanElement;
  edsonBarbozaXpThresh: HTMLSpanElement;
  edsonBarbozaPower: HTMLSpanElement;
  edsonBarbozaSpeed: HTMLSpanElement;
  edsonBarbozaLevel: HTMLSpanElement;
  edsonBarbozaProgress: HTMLDivElement;

  danIge: HTMLDivElement;
  danIgeXp: HTMLSpanElement;
  danIgeXpThresh: HTMLSpanElement;
  danIgePower: HTMLSpanElement;
  danIgeSpeed: HTMLSpanElement;
  danIgeLevel: HTMLSpanElement;
  danIgeProgress: HTMLDivElement;

  bryceMichell: HTMLDivElement;
  bryceMichellXp: HTMLSpanElement;
  bryceMichellXpThresh: HTMLSpanElement;
  bryceMichellPower: HTMLSpanElement;
  bryceMichellSpeed: HTMLSpanElement;
  bryceMichellLevel: HTMLSpanElement;
  bryceMichellProgress: HTMLDivElement;

  diegoLopez: HTMLDivElement;
  diegoLopezXp: HTMLSpanElement;
  diegoLopezXpThresh: HTMLSpanElement;
  diegoLopezPower: HTMLSpanElement;
  diegoLopezSpeed: HTMLSpanElement;
  diegoLopezLevel: HTMLSpanElement;
  diegoLopezProgress: HTMLDivElement;

  leroneMurphy: HTMLDivElement;
  leroneMurphyXp: HTMLSpanElement;
  leroneMurphyXpThresh: HTMLSpanElement;
  leroneMurphyPower: HTMLSpanElement;
  leroneMurphySpeed: HTMLSpanElement;
  leroneMurphyLevel: HTMLSpanElement;
  leroneMurphyProgress: HTMLDivElement;

  paddyPimblett: HTMLDivElement;
  paddyPimblettXp: HTMLSpanElement;
  paddyPimblettXpThresh: HTMLSpanElement;
  paddyPimblettPower: HTMLSpanElement;
  paddyPimblettSpeed: HTMLSpanElement;
  paddyPimblettLevel: HTMLSpanElement;
  paddyPimblettProgress: HTMLDivElement;

  jalinTurner: HTMLDivElement;
  jalinTurnerXp: HTMLSpanElement;
  jalinTurnerXpThresh: HTMLSpanElement;
  jalinTurnerPower: HTMLSpanElement;
  jalinTurnerSpeed: HTMLSpanElement;
  jalinTurnerLevel: HTMLSpanElement;
  jalinTurnerProgress: HTMLDivElement;

  rafaelDosAnjos: HTMLDivElement;
  rafaelDosAnjosXp: HTMLSpanElement;
  rafaelDosAnjosXpThresh: HTMLSpanElement;
  rafaelDosAnjosPower: HTMLSpanElement;
  rafaelDosAnjosSpeed: HTMLSpanElement;
  rafaelDosAnjosLevel: HTMLSpanElement;
  rafaelDosAnjosProgress: HTMLDivElement;

  benoitSaintDenis: HTMLDivElement;
  benoitSaintDenisXp: HTMLSpanElement;
  benoitSaintDenisXpThresh: HTMLSpanElement;
  benoitSaintDenisPower: HTMLSpanElement;
  benoitSaintDenisSpeed: HTMLSpanElement;
  benoitSaintDenisLevel: HTMLSpanElement;
  benoitSaintDenisProgress: HTMLDivElement;

  renatoMoicano: HTMLDivElement;
  renatoMoicanoXp: HTMLSpanElement;
  renatoMoicanoXpThresh: HTMLSpanElement;
  renatoMoicanoPower: HTMLSpanElement;
  renatoMoicanoSpeed: HTMLSpanElement;
  renatoMoicanoLevel: HTMLSpanElement;
  renatoMoicanoProgress: HTMLDivElement;

  neilMagny: HTMLDivElement;
  neilMagnyXp: HTMLSpanElement;
  neilMagnyXpThresh: HTMLSpanElement;
  neilMagnyPower: HTMLSpanElement;
  neilMagnySpeed: HTMLSpanElement;
  neilMagnyLevel: HTMLSpanElement;
  neilMagnyProgress: HTMLDivElement;

  vicenteLuque: HTMLDivElement;
  vicenteLuqueXp: HTMLSpanElement;
  vicenteLuqueXpThresh: HTMLSpanElement;
  vicenteLuquePower: HTMLSpanElement;
  vicenteLuqueSpeed: HTMLSpanElement;
  vicenteLuqueLevel: HTMLSpanElement;
  vicenteLuqueProgress: HTMLDivElement;

  michaelPage: HTMLDivElement;
  michaelPageXp: HTMLSpanElement;
  michaelPageXpThresh: HTMLSpanElement;
  michaelPagePower: HTMLSpanElement;
  michaelPageSpeed: HTMLSpanElement;
  michaelPageLevel: HTMLSpanElement;
  michaelPageProgress: HTMLDivElement;

  michaelMorales: HTMLDivElement;
  michaelMoralesXp: HTMLSpanElement;
  michaelMoralesXpThresh: HTMLSpanElement;
  michaelMoralesPower: HTMLSpanElement;
  michaelMoralesSpeed: HTMLSpanElement;
  michaelMoralesLevel: HTMLSpanElement;
  michaelMoralesProgress: HTMLDivElement;

  joaquinBuckley: HTMLDivElement;
  joaquinBuckleyXp: HTMLSpanElement;
  joaquinBuckleyXpThresh: HTMLSpanElement;
  joaquinBuckleyPower: HTMLSpanElement;
  joaquinBuckleySpeed: HTMLSpanElement;
  joaquinBuckleyLevel: HTMLSpanElement;
  joaquinBuckleyProgress: HTMLDivElement;

  hampaitaEl: HTMLSpanElement;
  hampaitaPerSekuntiEl: HTMLSpanElement;
  trainersEl: HTMLSpanElement;
  shopItemsArr: HTMLParagraphElement[];
  avaaSatunnainenHintaEl: HTMLSpanElement;
  rebirthForEl: HTMLSpanElement;
  upgradeEl: HTMLDivElement;
  versionEl: HTMLParagraphElement;

  shopButton: HTMLDivElement;
  avaaSatunnainenButton: HTMLSpanElement;
  rebirthButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  saveButton: HTMLButtonElement;
  loadButton: HTMLButtonElement;
  weightClassMenu: HTMLDivElement;

  flyweightLevel: HTMLSpanElement;
  bantamweightLevel: HTMLSpanElement;
  featherweightLevel: HTMLSpanElement;
  lightweightLevel: HTMLSpanElement;
  welterweightLevel: HTMLSpanElement;
};

type Upgrades = {
  globalSpeedName: string[];
  globalSpeedDescription: string[];
  globalSpeedCost: number[];
  globalSpeedEffect: number[];
  globalSpeedIndex: number[];
  globalSpeedIsUnlocked: boolean[];
  globalSpeedIsPurchased: boolean[];

  globalPowerName: string[];
  globalPowerDescription: string[];
  globalPowerCost: number[];
  globalPowerEffect: number[];
  globalPowerIndex: number[];
  globalPowerIsPurchased: boolean[];

  globalXpThreshName: string[];
  globalXpThreshDescription: string[];
  globalXpThreshCost: number[];
  globalXpThreshEffect: number[];
  globalXpThreshIndex: number[];
  globalXpThreshIsPurchased: boolean[];
};

let game: Game = {
  version: "0.2.28",
  hampaita: 1.000,
  hampaitaPerSekunti: 0.0,
  totalPower: 0,
  verta: 0,
  activeTrainers: 0,
  maxTrainers: 1,
  freeTrainers: 0,
  rebirths: 0,
  veriKerroin: 0.00_000_1,
  avaaSatunnainenHinta: 1,
  avaaValitsemaHinta: 100,
  rebirthFor: 0,
  shopOpen: false,
  lastPlayed: 0,
  activeFighter: "",
  activeWeightclass: "",
  app: document.getElementById("app"),
  intervalId: -1,
  now: Date.now(),

  globalSpeedMulti: 1,
  globalPowerMulti: 1,
  globalXpThreshMulti: 1.4,

  flyweightThreshMultiMulti: 1,
  bantamweightThreshMultiMulti: 1,
  featherweightThreshMultiMulti: 1,
  lightweightThreshMultiMulti: 1,
  welterweightThreshMultiMulti: 1,
  flyweightSpeedMulti: 1,
  bantamweightSpeedMulti: 1,
  featherweightSpeedMulti: 1,
  lightweightSpeedMulti: 1,
  welterweightSpeedMulti: 1,

  flyweightXp: 0,
  flyweightXpThresh: 10,
  flyweightLevel: 0,
  flyweightStep: 0.01,
  flyweightCount: 0,
  flyweightActive: false,

  bantamweightXp: 0,
  bantamweightXpThresh: 10,
  bantamweightLevel: 0,
  bantamweightStep: 0.01,
  bantamweightCount: 0,
  bantamweightActive: false,

  featherweightXp: 0,
  featherweightXpThresh: 10,
  featherweightLevel: 0,
  featherweightStep: 0.01,
  featherweightCount: 0,
  featherweightActive: false,

  lightweightXp: 0,
  lightweightXpThresh: 10,
  lightweightLevel: 0,
  lightweightStep: 0.01,
  lightweightCount: 0,
  lightweightActive: false,

  welterweightXp: 0,
  welterweightXpThresh: 10,
  welterweightLevel: 0,
  welterweightStep: 0.01,
  welterweightCount: 0,
  welterweightActive: false,

  totalCount: 0,
  jenkkiCount: 0,
  brassiCount: 0,
  strikerCount: 0,
  grapplerCount: 0,
  alle30Count: 0,
  ladyWaistCount: 0,
  pelleCount: 0,
  niceGuyCount: 0,
  stanCount: 0,
  afrikanMafiaCount: 0,
  lookingAssCount: 0,
  chadCount: 0,
  championCount: 0,
  lasiLeukaCount: 0,
  legHuggerCount: 0,
  unrankedCount: 0,
  chickenCount: 0,
  hasBeenCount: 0,
};

let flyweightFighters: Ottelijat = {
  nimi: [
    "Cody Durden",
    "Asu Almabayev",
    "Bruno Silva",
    "Tagir Ulanbekov",
    "Matt Schnell",
  ],
  power: [1.0, 1.1, 1.21, 1.331, 1.464],
  speed: [1, 0.9, 0.81, 0.729, 0.656],
  level: [0, 0, 0, 0, 0],
  hinta: [10, 100, 1_000, 10_000, 100_000],
  numero: [0, 1, 2, 3, 4],
  progress: [0, 0, 0, 0, 0],
  step: [1, 0.9, 0.81, 0.729, 0.656],
  visibleReq: [0, 15, 30, 45, 60],
  unlockReq: [0, 5, 10, 15, 20],
  totalPower: [0.0, 0.0, 0.0, 0.0, 0.0],
  isVisible: [true, false, false, false, false],
  isUnlocked: [true, false, false, false, false],
  isActive: [false, false, false, false, false],
  xp: [0, 0, 0, 0, 0],
  xpThresh: [5, 5, 5, 5, 5],
  img: [
    "./assets/codyDurden.png",
    "./assets/asuAlmabayev.png",
    "./assets/brunoSilva.png",
    "./assets/tagirUlanbekov.png",
    "./assets/mattSchnell.png",
  ],
  id: [
    "codyDurden",
    "asuAlmabayev",
    "brunoSilva",
    "tagirUlanbekov",
    "mattSchnell",
  ],
  interval: [null, null, null, null, null],
  intervalIndex: null,
  divEl: [
    document.getElementById("codyDurdenContainer") as HTMLDivElement,
    document.getElementById("asuAlmabayevContainer") as HTMLDivElement,
    document.getElementById("brunoSilvaContainer") as HTMLDivElement,
    document.getElementById("tagirUlanbekovContainer") as HTMLDivElement,
    document.getElementById("mattSchnellContainer") as HTMLDivElement,
  ],
  mastery10Unlcked: [false, false, false, false, false],
  mastery20Unlcked: [false, false, false, false, false],
  mastery30Unlcked: [false, false, false, false, false],
  mastery40Unlcked: [false, false, false, false, false],
  mastery50Unlcked: [false, false, false, false, false],
  mastery60Unlcked: [false, false, false, false, false],
  mastery70Unlcked: [false, false, false, false, false],
  mastery80Unlcked: [false, false, false, false, false],
  mastery90Unlcked: [false, false, false, false, false],
  mastery100Unlcked: [false, false, false, false, false],
  mastery10Done: 0,
  mastery20Done: 0,
  mastery30Done: 0,
  mastery40Done: 0,
  mastery50Done: 0,
  mastery60Done: 0,
  mastery70Done: 0,
  mastery80Done: 0,
  mastery90Done: 0,
  mastery100Done: 0,
  mastery10UnlockedFor5: false,
  mastery20UnlockedFor5: false,
  mastery30UnlockedFor5: false,
  mastery40UnlockedFor5: false,
  mastery50UnlockedFor5: false,
  mastery60UnlockedFor5: false,
  mastery70UnlockedFor5: false,
  mastery80UnlockedFor5: false,
  mastery90UnlockedFor5: false,
  mastery100UnlockedFor5: false,
  tags: {
    jenkki: [true, false, false, false, true],
    brassi: [false, false, true, false, false],
    striker: [true, false, false, false, false],
    grappler: [false, false, true, true, false],
    boxing: [false, false, false, false, true],
    alle30: [false, false, false, false, false],
    ladyWaist: [true, false, false, false, false],
    pelle: [false, false, false, false, false],
    niceGuy: [false, false, false, false, false],
    stan: [false, true, false, true, false],
    afrikanMafia: [false, false, false, false, false],
    lookingAss: [false, false, false, true, false],
    chad: [false, false, false, false, false],
    champion: [false, false, false, false, false],
    lasiLeuka: [false, false, false, false, false],
    legHugger: [false, false, false, false, false],
    unranked: [false, false, false, false, false],
    chicken: [false, false, false, false, false],
    hasBeen: [false, false, true, false, false],
  },
};

let bantamweightFighters: Ottelijat = {
  nimi: [
    "Montel Jackson",
    "Dominick Cruz",
    "Jonathan Martinez",
    "Kyler Phillips",
    "Mario Bautista",
  ],
  power: [1.0, 1.1, 1.21, 1.331, 1.464],
  speed: [1, 0.9, 0.81, 0.729, 0.656],
  level: [0, 0, 0, 0, 0],
  hinta: [10, 100, 1_000, 10_000, 100_000],
  numero: [0, 1, 2, 3, 4],
  progress: [0, 0, 0, 0, 0],
  step: [1, 0.9, 0.81, 0.729, 0.656],
  visibleReq: [0, 15, 30, 45, 60],
  unlockReq: [0, 5, 10, 15, 20],
  totalPower: [0.0, 0.0, 0.0, 0.0, 0.0],
  isVisible: [true, false, false, false, false],
  isUnlocked: [true, false, false, false, false],
  isActive: [false, false, false, false, false],
  xp: [0, 0, 0, 0, 0],
  xpThresh: [5, 5, 5, 5, 5],
  img: [
    "./assets/montelJackson.png",
    "./assets/dominickCruz.png",
    "./assets/jonathanMartinez.png",
    "./assets/kylerPhillips.png",
    "./assets/marioBautista.png",
  ],
  id: [
    "montelJackson",
    "dominickCruz",
    "jonathanMartinez",
    "kylerPhillips",
    "marioBautista",
  ],
  interval: [null, null, null, null, null],
  intervalIndex: null,
  divEl: [
    document.getElementById("montelJacksonContainer") as HTMLDivElement,
    document.getElementById("dominickCruzContainer") as HTMLDivElement,
    document.getElementById("jonathanMartinezContainer") as HTMLDivElement,
    document.getElementById("kylerPhillipsContainer") as HTMLDivElement,
    document.getElementById("marioBautistaContainer") as HTMLDivElement,
  ],
  mastery10Unlcked: [false, false, false, false, false],
  mastery20Unlcked: [false, false, false, false, false],
  mastery30Unlcked: [false, false, false, false, false],
  mastery40Unlcked: [false, false, false, false, false],
  mastery50Unlcked: [false, false, false, false, false],
  mastery60Unlcked: [false, false, false, false, false],
  mastery70Unlcked: [false, false, false, false, false],
  mastery80Unlcked: [false, false, false, false, false],
  mastery90Unlcked: [false, false, false, false, false],
  mastery100Unlcked: [false, false, false, false, false],
  mastery10Done: 0,
  mastery20Done: 0,
  mastery30Done: 0,
  mastery40Done: 0,
  mastery50Done: 0,
  mastery60Done: 0,
  mastery70Done: 0,
  mastery80Done: 0,
  mastery90Done: 0,
  mastery100Done: 0,
  mastery10UnlockedFor5: false,
  mastery20UnlockedFor5: false,
  mastery30UnlockedFor5: false,
  mastery40UnlockedFor5: false,
  mastery50UnlockedFor5: false,
  mastery60UnlockedFor5: false,
  mastery70UnlockedFor5: false,
  mastery80UnlockedFor5: false,
  mastery90UnlockedFor5: false,
  mastery100UnlockedFor5: false,
  tags: {
    jenkki: [true, false, false, false, true],
    brassi: [false, false, true, false, false],
    striker: [true, false, false, false, false],
    grappler: [false, false, true, true, false],
    boxing: [false, false, false, false, true],
    alle30: [false, false, false, false, false],
    ladyWaist: [true, false, false, false, false],
    pelle: [false, false, false, false, false],
    niceGuy: [false, false, false, false, false],
    stan: [false, true, false, true, false],
    afrikanMafia: [false, false, false, false, false],
    lookingAss: [false, false, false, true, false],
    chad: [false, false, false, false, false],
    champion: [false, false, false, false, false],
    lasiLeuka: [false, false, false, false, false],
    legHugger: [false, false, false, false, false],
    unranked: [false, false, false, false, false],
    chicken: [false, false, false, false, false],
    hasBeen: [false, false, true, false, false],
  },
};

let featherweightFighters: Ottelijat = {
  nimi: [
    "Edson Barboza",
    "Dan Ige",
    "Bryce Michell",
    "Diego Lopez",
    "Lerone Murphy",
  ],
  power: [1.0, 1.1, 1.21, 1.331, 1.464],
  speed: [1, 0.9, 0.81, 0.729, 0.656],
  level: [0, 0, 0, 0, 0],
  hinta: [10, 100, 1_000, 10_000, 100_000],
  numero: [0, 1, 2, 3, 4],
  progress: [0, 0, 0, 0, 0],
  step: [1, 0.9, 0.81, 0.729, 0.656],
  visibleReq: [0, 15, 30, 45, 60],
  unlockReq: [0, 5, 10, 15, 20],
  totalPower: [0.0, 0.0, 0.0, 0.0, 0.0],
  isVisible: [true, false, false, false, false],
  isUnlocked: [true, false, false, false, false],
  isActive: [false, false, false, false, false],
  xp: [0, 0, 0, 0, 0],
  xpThresh: [5, 5, 5, 5, 5],
  img: [
    "./assets/edsonBarboza.png",
    "./assets/danIge.png",
    "./assets/bryceMichell.png",
    "./assets/diegoLopez.png",
    "./assets/leroneMurphy.png",
  ],
  id: [
    "edsonBarboza",
    "danIge",
    "bryceMichell",
    "diegoLopez",
    "leroneMurphy",
  ],
  interval: [null, null, null, null, null],
  intervalIndex: null,
  divEl: [
    document.getElementById("edsonBarbozaContainer") as HTMLDivElement,
    document.getElementById("danIgeContainer") as HTMLDivElement,
    document.getElementById("bryceMichellContainer") as HTMLDivElement,
    document.getElementById("diegoLopezContainer") as HTMLDivElement,
    document.getElementById("leroneMurphyContainer") as HTMLDivElement,
  ],
  mastery10Unlcked: [false, false, false, false, false],
  mastery20Unlcked: [false, false, false, false, false],
  mastery30Unlcked: [false, false, false, false, false],
  mastery40Unlcked: [false, false, false, false, false],
  mastery50Unlcked: [false, false, false, false, false],
  mastery60Unlcked: [false, false, false, false, false],
  mastery70Unlcked: [false, false, false, false, false],
  mastery80Unlcked: [false, false, false, false, false],
  mastery90Unlcked: [false, false, false, false, false],
  mastery100Unlcked: [false, false, false, false, false],
  mastery10Done: 0,
  mastery20Done: 0,
  mastery30Done: 0,
  mastery40Done: 0,
  mastery50Done: 0,
  mastery60Done: 0,
  mastery70Done: 0,
  mastery80Done: 0,
  mastery90Done: 0,
  mastery100Done: 0,
  mastery10UnlockedFor5: false,
  mastery20UnlockedFor5: false,
  mastery30UnlockedFor5: false,
  mastery40UnlockedFor5: false,
  mastery50UnlockedFor5: false,
  mastery60UnlockedFor5: false,
  mastery70UnlockedFor5: false,
  mastery80UnlockedFor5: false,
  mastery90UnlockedFor5: false,
  mastery100UnlockedFor5: false,
  tags: {
    jenkki: [true, false, false, false, true],
    brassi: [false, false, true, false, false],
    striker: [true, false, false, false, false],
    grappler: [false, false, true, true, false],
    boxing: [false, false, false, false, true],
    alle30: [false, false, false, false, false],
    ladyWaist: [true, false, false, false, false],
    pelle: [false, false, false, false, false],
    niceGuy: [false, false, false, false, false],
    stan: [false, true, false, true, false],
    afrikanMafia: [false, false, false, false, false],
    lookingAss: [false, false, false, true, false],
    chad: [false, false, false, false, false],
    champion: [false, false, false, false, false],
    lasiLeuka: [false, false, false, false, false],
    legHugger: [false, false, false, false, false],
    unranked: [false, false, false, false, false],
    chicken: [false, false, false, false, false],
    hasBeen: [false, false, true, false, false],
  },
};

let lightweightFighters: Ottelijat = {
  nimi: [
    "Paddy Pimblett",
    "Jalin Turner",
    "Rafael Dos Anjos",
    "Benoit Saint Denis",
    "Renato Moicano",
  ],
  power: [1.0, 1.1, 1.21, 1.331, 1.464],
  speed: [1, 0.9, 0.81, 0.729, 0.656],
  level: [0, 0, 0, 0, 0],
  hinta: [10, 100, 1_000, 10_000, 100_000],
  numero: [0, 1, 2, 3, 4],
  progress: [0, 0, 0, 0, 0],
  step: [1, 0.9, 0.81, 0.729, 0.656],
  visibleReq: [0, 15, 30, 45, 60],
  unlockReq: [0, 5, 10, 15, 20],
  totalPower: [0.0, 0.0, 0.0, 0.0, 0.0],
  isVisible: [true, false, false, false, false],
  isUnlocked: [true, false, false, false, false],
  isActive: [false, false, false, false, false],
  xp: [0, 0, 0, 0, 0],
  xpThresh: [5, 5, 5, 5, 5],
  img: [
    "./assets/paddyPimblett.png",
    "./assets/jalinTurner.png",
    "./assets/rafaelDosAnjos.png",
    "./assets/benoitSaintDenis.png",
    "./assets/renatoMoicano.png",
  ],
  id: [
    "paddyPimblett",
    "jalinTurner",
    "rafaelDosAnjos",
    "benoitSaintDenis",
    "renatoMoicano",
  ],
  interval: [null, null, null, null, null],
  intervalIndex: null,
  divEl: [
    document.getElementById("paddyPimblettContainer") as HTMLDivElement,
    document.getElementById("jalinTurnerContainer") as HTMLDivElement,
    document.getElementById("rafaelDosAnjosContainer") as HTMLDivElement,
    document.getElementById("benoitSaintDenisContainer") as HTMLDivElement,
    document.getElementById("renatoMoicanoContainer") as HTMLDivElement,
  ],
  mastery10Unlcked: [false, false, false, false, false],
  mastery20Unlcked: [false, false, false, false, false],
  mastery30Unlcked: [false, false, false, false, false],
  mastery40Unlcked: [false, false, false, false, false],
  mastery50Unlcked: [false, false, false, false, false],
  mastery60Unlcked: [false, false, false, false, false],
  mastery70Unlcked: [false, false, false, false, false],
  mastery80Unlcked: [false, false, false, false, false],
  mastery90Unlcked: [false, false, false, false, false],
  mastery100Unlcked: [false, false, false, false, false],
  mastery10Done: 0,
  mastery20Done: 0,
  mastery30Done: 0,
  mastery40Done: 0,
  mastery50Done: 0,
  mastery60Done: 0,
  mastery70Done: 0,
  mastery80Done: 0,
  mastery90Done: 0,
  mastery100Done: 0,
  mastery10UnlockedFor5: false,
  mastery20UnlockedFor5: false,
  mastery30UnlockedFor5: false,
  mastery40UnlockedFor5: false,
  mastery50UnlockedFor5: false,
  mastery60UnlockedFor5: false,
  mastery70UnlockedFor5: false,
  mastery80UnlockedFor5: false,
  mastery90UnlockedFor5: false,
  mastery100UnlockedFor5: false,
  tags: {
    jenkki: [true, false, false, false, true],
    brassi: [false, false, true, false, false],
    striker: [true, false, false, false, false],
    grappler: [false, false, true, true, false],
    boxing: [false, false, false, false, true],
    alle30: [false, false, false, false, false],
    ladyWaist: [true, false, false, false, false],
    pelle: [false, false, false, false, false],
    niceGuy: [false, false, false, false, false],
    stan: [false, true, false, true, false],
    afrikanMafia: [false, false, false, false, false],
    lookingAss: [false, false, false, true, false],
    chad: [false, false, false, false, false],
    champion: [false, false, false, false, false],
    lasiLeuka: [false, false, false, false, false],
    legHugger: [false, false, false, false, false],
    unranked: [false, false, false, false, false],
    chicken: [false, false, false, false, false],
    hasBeen: [false, false, true, false, false],
  },
};

let welterweightFighters: Ottelijat = {
  nimi: [
    "Neil Magny",
    "Vicente Luque",
    "Michael Page",
    "Michael Morales",
    "Joaquin Buckley",
  ],
  power: [1.0, 1.1, 1.21, 1.331, 1.464],
  speed: [1, 0.9, 0.81, 0.729, 0.656],
  level: [0, 0, 0, 0, 0],
  hinta: [10, 100, 1_000, 10_000, 100_000],
  numero: [0, 1, 2, 3, 4],
  progress: [0, 0, 0, 0, 0],
  step: [1, 0.9, 0.81, 0.729, 0.656],
  visibleReq: [0, 15, 30, 45, 60],
  unlockReq: [0, 5, 10, 15, 20],
  totalPower: [0.0, 0.0, 0.0, 0.0, 0.0],
  isVisible: [true, false, false, false, false],
  isUnlocked: [true, false, false, false, false],
  isActive: [false, false, false, false, false],
  xp: [0, 0, 0, 0, 0],
  xpThresh: [5, 5, 5, 5, 5],
  img: [
    "./assets/neilMagny.png",
    "./assets/vicenteLuque.png",
    "./assets/michaelPage.png",
    "./assets/michaelMorales.png",
    "./assets/joaquinBuckley.png",
  ],
  id: [
    "neilMagny",
    "vicenteLuque",
    "michaelPage",
    "michaelMorales",
    "joaquinBuckley",
  ],
  interval: [null, null, null, null, null],
  intervalIndex: null,
  divEl: [
    document.getElementById("neilMagnyContainer") as HTMLDivElement,
    document.getElementById("vicenteLuqueContainer") as HTMLDivElement,
    document.getElementById("michaelPageContainer") as HTMLDivElement,
    document.getElementById("michaelMoralesContainer") as HTMLDivElement,
    document.getElementById("joaquinBuckleyContainer") as HTMLDivElement,
  ],
  mastery10Unlcked: [false, false, false, false, false],
  mastery20Unlcked: [false, false, false, false, false],
  mastery30Unlcked: [false, false, false, false, false],
  mastery40Unlcked: [false, false, false, false, false],
  mastery50Unlcked: [false, false, false, false, false],
  mastery60Unlcked: [false, false, false, false, false],
  mastery70Unlcked: [false, false, false, false, false],
  mastery80Unlcked: [false, false, false, false, false],
  mastery90Unlcked: [false, false, false, false, false],
  mastery100Unlcked: [false, false, false, false, false],
  mastery10Done: 0,
  mastery20Done: 0,
  mastery30Done: 0,
  mastery40Done: 0,
  mastery50Done: 0,
  mastery60Done: 0,
  mastery70Done: 0,
  mastery80Done: 0,
  mastery90Done: 0,
  mastery100Done: 0,
  mastery10UnlockedFor5: false,
  mastery20UnlockedFor5: false,
  mastery30UnlockedFor5: false,
  mastery40UnlockedFor5: false,
  mastery50UnlockedFor5: false,
  mastery60UnlockedFor5: false,
  mastery70UnlockedFor5: false,
  mastery80UnlockedFor5: false,
  mastery90UnlockedFor5: false,
  mastery100UnlockedFor5: false,
  tags: {
    jenkki: [true, false, false, false, true],
    brassi: [false, false, true, false, false],
    striker: [true, false, false, false, false],
    grappler: [false, false, true, true, false],
    boxing: [false, false, false, false, true],
    alle30: [false, false, false, false, false],
    ladyWaist: [true, false, false, false, false],
    pelle: [false, false, false, false, false],
    niceGuy: [false, false, false, false, false],
    stan: [false, true, false, true, false],
    afrikanMafia: [false, false, false, false, false],
    lookingAss: [false, false, false, true, false],
    chad: [false, false, false, false, false],
    champion: [false, false, false, false, false],
    lasiLeuka: [false, false, false, false, false],
    legHugger: [false, false, false, false, false],
    unranked: [false, false, false, false, false],
    chicken: [false, false, false, false, false],
    hasBeen: [false, false, true, false, false],
  },
};

let flyweightUpgrades: Upgrades = {
  globalSpeedName: [
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
  ],
  globalSpeedDescription: [
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
  ],
  globalSpeedCost: [500, 500, 500, 500, 500],
  globalSpeedEffect: [1.1, 1.1, 1.1, 1.1, 1.1],
  globalSpeedIndex: [0, 1, 2, 3, 4],
  globalSpeedIsUnlocked: [false, false, false, false, false],
  globalSpeedIsPurchased: [false, false, false, false, false],
  globalPowerName: [
    "Cody Durden Power upgrade",
    "Asu Almabayev Power upgrade",
    "Bruno Silva Power upgrade",
    "Tagir Ulanbekov Power upgrade",
    "Matt Schnell Power upgrade",
  ],
  globalPowerDescription: [
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
    "10% Global",
  ],
  globalPowerCost: [500, 500, 500, 500, 500],
  globalPowerEffect: [1.1, 1.1, 1.1, 1.1, 1.1],
  globalPowerIndex: [0, 1, 2, 3, 4],
  globalPowerIsPurchased: [false, false, false, false, false],
  globalXpThreshName: [
    "Cody Durden XpThresh upgrade",
    "Asu Almabayev XpThresh upgrade",
    "Bruno Silva XpThresh upgrade",
    "Tagir Ulanbekov XpThresh upgrade",
    "Matt Schnell XpThresh upgrade",
  ],
  globalXpThreshDescription: [
    "1% Global",
    "1% Global",
    "1% Global",
    "1% Global",
    "1% Global",
  ],
  globalXpThreshCost: [500, 500, 500, 500, 500],
  globalXpThreshEffect: [0.99, 0.99, 0.99, 0.99, 0.99],
  globalXpThreshIndex: [0, 1, 2, 3, 4],
  globalXpThreshIsPurchased: [false, false, false, false, false],
};

const elements: Elements = {
  codyDurden: document.getElementById("codyDurden") as HTMLDivElement,
  codyDurdenXp: document.getElementById("codyDurdenXp") as HTMLSpanElement,
  codyDurdenXpThresh: document.getElementById("codyDurdenXpThresh") as HTMLSpanElement,
  codyDurdenPower: document.getElementById("codyDurdenPower") as HTMLSpanElement,
  codyDurdenSpeed: document.getElementById("codyDurdenSpeed") as HTMLSpanElement,
  codyDurdenLevel: document.getElementById("codyDurdenLevel") as HTMLParagraphElement,
  codyDurdenProgress: document.getElementById("codyDurdenBar") as HTMLDivElement,

  asuAlmabayev: document.getElementById("asuAlmabayev") as HTMLDivElement,
  asuAlmabayevXp: document.getElementById("asuAlmabayevXp") as HTMLSpanElement,
  asuAlmabayevXpThresh: document.getElementById("asuAlmabayevXpThresh") as HTMLSpanElement,
  asuAlmabayevPower: document.getElementById("asuAlmabayevPower") as HTMLSpanElement,
  asuAlmabayevSpeed: document.getElementById("asuAlmabayevSpeed") as HTMLSpanElement,
  asuAlmabayevLevel: document.getElementById("asuAlmabayevLevel") as HTMLParagraphElement,
  asuAlmabayevProgress: document.getElementById("asuAlmabayevBar") as HTMLDivElement,

  brunoSilva: document.getElementById("brunoSilva") as HTMLDivElement,
  brunoSilvaXp: document.getElementById("brunoSilvaXp") as HTMLSpanElement,
  brunoSilvaXpThresh: document.getElementById("brunoSilvaXpThresh") as HTMLSpanElement,
  brunoSilvaPower: document.getElementById("brunoSilvaPower") as HTMLSpanElement,
  brunoSilvaSpeed: document.getElementById("brunoSilvaSpeed") as HTMLSpanElement,
  brunoSilvaLevel: document.getElementById("brunoSilvaLevel") as HTMLParagraphElement,
  brunoSilvaProgress: document.getElementById("brunoSilvaBar") as HTMLDivElement,

  tagirUlanbekov: document.getElementById("tagirUlanbekov") as HTMLDivElement,
  tagirUlanbekovXp: document.getElementById("tagirUlanbekovXp") as HTMLSpanElement,
  tagirUlanbekovXpThresh: document.getElementById("tagirUlanbekovXpThresh") as HTMLSpanElement,
  tagirUlanbekovPower: document.getElementById("tagirUlanbekovPower") as HTMLSpanElement,
  tagirUlanbekovSpeed: document.getElementById("tagirUlanbekovSpeed") as HTMLSpanElement,
  tagirUlanbekovLevel: document.getElementById("tagirUlanbekovLevel") as HTMLParagraphElement,
  tagirUlanbekovProgress: document.getElementById("tagirUlanbekovBar") as HTMLDivElement,

  mattSchnell: document.getElementById("mattSchnell") as HTMLDivElement,
  mattSchnellXp: document.getElementById("mattSchnellXp") as HTMLSpanElement,
  mattSchnellXpThresh: document.getElementById("mattSchnellXpThresh") as HTMLSpanElement,
  mattSchnellPower: document.getElementById("mattSchnellPower") as HTMLSpanElement,
  mattSchnellSpeed: document.getElementById("mattSchnellSpeed") as HTMLSpanElement,
  mattSchnellLevel: document.getElementById("mattSchnellLevel") as HTMLParagraphElement,
  mattSchnellProgress: document.getElementById("mattSchnellBar") as HTMLDivElement,

  montelJackson: document.getElementById("montelJackson") as HTMLDivElement,
  montelJacksonXp: document.getElementById("montelJacksonXp") as HTMLSpanElement,
  montelJacksonXpThresh: document.getElementById("montelJacksonXpThresh") as HTMLSpanElement,
  montelJacksonPower: document.getElementById("montelJacksonPower") as HTMLSpanElement,
  montelJacksonSpeed: document.getElementById("montelJacksonSpeed") as HTMLSpanElement,
  montelJacksonLevel: document.getElementById("montelJacksonLevel") as HTMLParagraphElement,
  montelJacksonProgress: document.getElementById("montelJacksonBar") as HTMLDivElement,

  dominickCruz: document.getElementById("dominickCruz") as HTMLDivElement,
  dominickCruzXp: document.getElementById("dominickCruzXp") as HTMLSpanElement,
  dominickCruzXpThresh: document.getElementById("dominickCruzXpThresh") as HTMLSpanElement,
  dominickCruzPower: document.getElementById("dominickCruzPower") as HTMLSpanElement,
  dominickCruzSpeed: document.getElementById("dominickCruzSpeed") as HTMLSpanElement,
  dominickCruzLevel: document.getElementById("dominickCruzLevel") as HTMLParagraphElement,
  dominickCruzProgress: document.getElementById("dominickCruzBar") as HTMLDivElement,

  jonathanMartinez: document.getElementById("jonathanMartinez") as HTMLDivElement,
  jonathanMartinezXp: document.getElementById("jonathanMartinezXp") as HTMLSpanElement,
  jonathanMartinezXpThresh: document.getElementById("jonathanMartinezXpThresh") as HTMLSpanElement,
  jonathanMartinezPower: document.getElementById("jonathanMartinezPower") as HTMLSpanElement,
  jonathanMartinezSpeed: document.getElementById("jonathanMartinezSpeed") as HTMLSpanElement,
  jonathanMartinezLevel: document.getElementById("jonathanMartinezLevel") as HTMLParagraphElement,
  jonathanMartinezProgress: document.getElementById("jonathanMartinezBar") as HTMLDivElement,

  kylerPhillips: document.getElementById("kylerPhillips") as HTMLDivElement,
  kylerPhillipsXp: document.getElementById("kylerPhillipsXp") as HTMLSpanElement,
  kylerPhillipsXpThresh: document.getElementById("kylerPhillipsXpThresh") as HTMLSpanElement,
  kylerPhillipsPower: document.getElementById("kylerPhillipsPower") as HTMLSpanElement,
  kylerPhillipsSpeed: document.getElementById("kylerPhillipsSpeed") as HTMLSpanElement,
  kylerPhillipsLevel: document.getElementById("kylerPhillipsLevel") as HTMLParagraphElement,
  kylerPhillipsProgress: document.getElementById("kylerPhillipsBar") as HTMLDivElement,

  marioBautista: document.getElementById("marioBautista") as HTMLDivElement,
  marioBautistaXp: document.getElementById("marioBautistaXp") as HTMLSpanElement,
  marioBautistaXpThresh: document.getElementById("marioBautistaXpThresh") as HTMLSpanElement,
  marioBautistaPower: document.getElementById("marioBautistaPower") as HTMLSpanElement,
  marioBautistaSpeed: document.getElementById("marioBautistaSpeed") as HTMLSpanElement,
  marioBautistaLevel: document.getElementById("marioBautistaLevel") as HTMLParagraphElement,
  marioBautistaProgress: document.getElementById("marioBautistaBar") as HTMLDivElement,

  edsonBarboza: document.getElementById("edsonBarboza") as HTMLDivElement,
  edsonBarbozaXp: document.getElementById("edsonBarbozaXp") as HTMLSpanElement,
  edsonBarbozaXpThresh: document.getElementById("edsonBarbozaXpThresh") as HTMLSpanElement,
  edsonBarbozaPower: document.getElementById("edsonBarbozaPower") as HTMLSpanElement,
  edsonBarbozaSpeed: document.getElementById("edsonBarbozaSpeed") as HTMLSpanElement,
  edsonBarbozaLevel: document.getElementById("edsonBarbozaLevel") as HTMLParagraphElement,
  edsonBarbozaProgress: document.getElementById("edsonBarbozaBar") as HTMLDivElement,

  danIge: document.getElementById("danIge") as HTMLDivElement,
  danIgeXp: document.getElementById("danIgeXp") as HTMLSpanElement,
  danIgeXpThresh: document.getElementById("danIgeXpThresh") as HTMLSpanElement,
  danIgePower: document.getElementById("danIgePower") as HTMLSpanElement,
  danIgeSpeed: document.getElementById("danIgeSpeed") as HTMLSpanElement,
  danIgeLevel: document.getElementById("danIgeLevel") as HTMLParagraphElement,
  danIgeProgress: document.getElementById("danIgeBar") as HTMLDivElement,

  bryceMichell: document.getElementById("bryceMichell") as HTMLDivElement,
  bryceMichellXp: document.getElementById("bryceMichellXp") as HTMLSpanElement,
  bryceMichellXpThresh: document.getElementById("bryceMichellXpThresh") as HTMLSpanElement,
  bryceMichellPower: document.getElementById("bryceMichellPower") as HTMLSpanElement,
  bryceMichellSpeed: document.getElementById("bryceMichellSpeed") as HTMLSpanElement,
  bryceMichellLevel: document.getElementById("bryceMichellLevel") as HTMLParagraphElement,
  bryceMichellProgress: document.getElementById("bryceMichellBar") as HTMLDivElement,

  diegoLopez: document.getElementById("diegoLopez") as HTMLDivElement,
  diegoLopezXp: document.getElementById("diegoLopezXp") as HTMLSpanElement,
  diegoLopezXpThresh: document.getElementById("diegoLopezXpThresh") as HTMLSpanElement,
  diegoLopezPower: document.getElementById("diegoLopezPower") as HTMLSpanElement,
  diegoLopezSpeed: document.getElementById("diegoLopezSpeed") as HTMLSpanElement,
  diegoLopezLevel: document.getElementById("diegoLopezLevel") as HTMLParagraphElement,
  diegoLopezProgress: document.getElementById("diegoLopezBar") as HTMLDivElement,

  leroneMurphy: document.getElementById("leroneMurphy") as HTMLDivElement,
  leroneMurphyXp: document.getElementById("leroneMurphyXp") as HTMLSpanElement,
  leroneMurphyXpThresh: document.getElementById("leroneMurphyXpThresh") as HTMLSpanElement,
  leroneMurphyPower: document.getElementById("leroneMurphyPower") as HTMLSpanElement,
  leroneMurphySpeed: document.getElementById("leroneMurphySpeed") as HTMLSpanElement,
  leroneMurphyLevel: document.getElementById("leroneMurphyLevel") as HTMLParagraphElement,
  leroneMurphyProgress: document.getElementById("leroneMurphyBar") as HTMLDivElement,

  paddyPimblett: document.getElementById("paddyPimblett") as HTMLDivElement,
  paddyPimblettXp: document.getElementById("paddyPimblettXp") as HTMLSpanElement,
  paddyPimblettXpThresh: document.getElementById("paddyPimblettXpThresh") as HTMLSpanElement,
  paddyPimblettPower: document.getElementById("paddyPimblettPower") as HTMLSpanElement,
  paddyPimblettSpeed: document.getElementById("paddyPimblettSpeed") as HTMLSpanElement,
  paddyPimblettLevel: document.getElementById("paddyPimblettLevel") as HTMLParagraphElement,
  paddyPimblettProgress: document.getElementById("paddyPimblettBar") as HTMLDivElement,

  jalinTurner: document.getElementById("jalinTurner") as HTMLDivElement,
  jalinTurnerXp: document.getElementById("jalinTurnerXp") as HTMLSpanElement,
  jalinTurnerXpThresh: document.getElementById("jalinTurnerXpThresh") as HTMLSpanElement,
  jalinTurnerPower: document.getElementById("jalinTurnerPower") as HTMLSpanElement,
  jalinTurnerSpeed: document.getElementById("jalinTurnerSpeed") as HTMLSpanElement,
  jalinTurnerLevel: document.getElementById("jalinTurnerLevel") as HTMLParagraphElement,
  jalinTurnerProgress: document.getElementById("jalinTurnerBar") as HTMLDivElement,

  rafaelDosAnjos: document.getElementById("rafaelDosAnjos") as HTMLDivElement,
  rafaelDosAnjosXp: document.getElementById("rafaelDosAnjosXp") as HTMLSpanElement,
  rafaelDosAnjosXpThresh: document.getElementById("rafaelDosAnjosXpThresh") as HTMLSpanElement,
  rafaelDosAnjosPower: document.getElementById("rafaelDosAnjosPower") as HTMLSpanElement,
  rafaelDosAnjosSpeed: document.getElementById("rafaelDosAnjosSpeed") as HTMLSpanElement,
  rafaelDosAnjosLevel: document.getElementById("rafaelDosAnjosLevel") as HTMLParagraphElement,
  rafaelDosAnjosProgress: document.getElementById("rafaelDosAnjosBar") as HTMLDivElement,

  benoitSaintDenis: document.getElementById("benoitSaintDenis") as HTMLDivElement,
  benoitSaintDenisXp: document.getElementById("benoitSaintDenisXp") as HTMLSpanElement,
  benoitSaintDenisXpThresh: document.getElementById("benoitSaintDenisXpThresh") as HTMLSpanElement,
  benoitSaintDenisPower: document.getElementById("benoitSaintDenisPower") as HTMLSpanElement,
  benoitSaintDenisSpeed: document.getElementById("benoitSaintDenisSpeed") as HTMLSpanElement,
  benoitSaintDenisLevel: document.getElementById("benoitSaintDenisLevel") as HTMLParagraphElement,
  benoitSaintDenisProgress: document.getElementById("benoitSaintDenisBar") as HTMLDivElement,

  renatoMoicano: document.getElementById("renatoMoicano") as HTMLDivElement,
  renatoMoicanoXp: document.getElementById("renatoMoicanoXp") as HTMLSpanElement,
  renatoMoicanoXpThresh: document.getElementById("renatoMoicanoXpThresh") as HTMLSpanElement,
  renatoMoicanoPower: document.getElementById("renatoMoicanoPower") as HTMLSpanElement,
  renatoMoicanoSpeed: document.getElementById("renatoMoicanoSpeed") as HTMLSpanElement,
  renatoMoicanoLevel: document.getElementById("renatoMoicanoLevel") as HTMLParagraphElement,
  renatoMoicanoProgress: document.getElementById("renatoMoicanoBar") as HTMLDivElement,

  neilMagny: document.getElementById("neilMagny") as HTMLDivElement,
  neilMagnyXp: document.getElementById("neilMagnyXp") as HTMLSpanElement,
  neilMagnyXpThresh: document.getElementById("neilMagnyXpThresh") as HTMLSpanElement,
  neilMagnyPower: document.getElementById("neilMagnyPower") as HTMLSpanElement,
  neilMagnySpeed: document.getElementById("neilMagnySpeed") as HTMLSpanElement,
  neilMagnyLevel: document.getElementById("neilMagnyLevel") as HTMLParagraphElement,
  neilMagnyProgress: document.getElementById("neilMagnyBar") as HTMLDivElement,

  vicenteLuque: document.getElementById("vicenteLuque") as HTMLDivElement,
  vicenteLuqueXp: document.getElementById("vicenteLuqueXp") as HTMLSpanElement,
  vicenteLuqueXpThresh: document.getElementById("vicenteLuqueXpThresh") as HTMLSpanElement,
  vicenteLuquePower: document.getElementById("vicenteLuquePower") as HTMLSpanElement,
  vicenteLuqueSpeed: document.getElementById("vicenteLuqueSpeed") as HTMLSpanElement,
  vicenteLuqueLevel: document.getElementById("vicenteLuqueLevel") as HTMLParagraphElement,
  vicenteLuqueProgress: document.getElementById("vicenteLuqueBar") as HTMLDivElement,

  michaelPage: document.getElementById("michaelPage") as HTMLDivElement,
  michaelPageXp: document.getElementById("michaelPageXp") as HTMLSpanElement,
  michaelPageXpThresh: document.getElementById("michaelPageXpThresh") as HTMLSpanElement,
  michaelPagePower: document.getElementById("michaelPagePower") as HTMLSpanElement,
  michaelPageSpeed: document.getElementById("michaelPageSpeed") as HTMLSpanElement,
  michaelPageLevel: document.getElementById("michaelPageLevel") as HTMLParagraphElement,
  michaelPageProgress: document.getElementById("michaelPageBar") as HTMLDivElement,

  michaelMorales: document.getElementById("michaelMorales") as HTMLDivElement,
  michaelMoralesXp: document.getElementById("michaelMoralesXp") as HTMLSpanElement,
  michaelMoralesXpThresh: document.getElementById("michaelMoralesXpThresh") as HTMLSpanElement,
  michaelMoralesPower: document.getElementById("michaelMoralesPower") as HTMLSpanElement,
  michaelMoralesSpeed: document.getElementById("michaelMoralesSpeed") as HTMLSpanElement,
  michaelMoralesLevel: document.getElementById("michaelMoralesLevel") as HTMLParagraphElement,
  michaelMoralesProgress: document.getElementById("michaelMoralesBar") as HTMLDivElement,

  joaquinBuckley: document.getElementById("joaquinBuckley") as HTMLDivElement,
  joaquinBuckleyXp: document.getElementById("joaquinBuckleyXp") as HTMLSpanElement,
  joaquinBuckleyXpThresh: document.getElementById("joaquinBuckleyXpThresh") as HTMLSpanElement,
  joaquinBuckleyPower: document.getElementById("joaquinBuckleyPower") as HTMLSpanElement,
  joaquinBuckleySpeed: document.getElementById("joaquinBuckleySpeed") as HTMLSpanElement,
  joaquinBuckleyLevel: document.getElementById("joaquinBuckleyLevel") as HTMLParagraphElement,
  joaquinBuckleyProgress: document.getElementById("joaquinBuckleyBar") as HTMLDivElement,

  hampaitaEl: document.getElementById("hampaita") as HTMLSpanElement,
  hampaitaPerSekuntiEl: document.getElementById("hampaitaPerSekunti") as HTMLSpanElement,
  trainersEl: document.getElementById("trainers") as HTMLSpanElement,
  shopItemsArr: Array.from(document.querySelectorAll(".shopItem")) as HTMLParagraphElement[],
  avaaSatunnainenHintaEl: document.getElementById("avaaSatunnainenHinta") as HTMLSpanElement,
  rebirthForEl: document.getElementById("rebirthFor") as HTMLSpanElement,
  upgradeEl: document.getElementById("upgradeContainer") as HTMLDivElement,
  versionEl: document.getElementById("version") as HTMLParagraphElement,

  shopButton: document.getElementById("shop") as HTMLDivElement,
  avaaSatunnainenButton: document.getElementById("avaaSatunnainen") as HTMLParagraphElement,
  rebirthButton: document.getElementById("rebirth") as HTMLButtonElement,
  resetButton: document.getElementById("reset") as HTMLButtonElement,
  saveButton: document.getElementById("save") as HTMLButtonElement,
  loadButton: document.getElementById("load") as HTMLButtonElement,
  weightClassMenu: document.getElementById("weightContainer") as HTMLDivElement,

  flyweightLevel: document.getElementById("flyweightLevel") as HTMLSpanElement,
  bantamweightLevel: document.getElementById("bantamweightLevel") as HTMLSpanElement,
  featherweightLevel: document.getElementById("featherweightLevel") as HTMLSpanElement,
  lightweightLevel: document.getElementById("lightweightLevel") as HTMLSpanElement,
  welterweightLevel: document.getElementById("welterweightLevel") as HTMLSpanElement,
};

function offlineGains(index: number) {
  let now = Date.now();
  let offlineTime = now -= game.lastPlayed;
  const offlineMinutes = offlineTime / 60_000;
  const offlineProcutionFactor = 0.000_8;
  const offlineProgress = offlineTime * offlineProcutionFactor;
  const offlineHampaita = (game.hampaitaPerSekunti * offlineProgress);

  game.hampaita += offlineHampaita;

  if (game.activeWeightclass === "flyweight") {
    let remainingXp = offlineProgress;
    console.log("offline for: ", offlineMinutes, " minutes");
    while (remainingXp >= flyweightFighters.xpThresh[index]) {
      flyweightFighters.level[index]++;
      remainingXp -= flyweightFighters.xpThresh[index];
      flyweightFighters.xpThresh[index] *= 1.1;
    }
    flyweightFighters.xp[index] + remainingXp;

    let flyweightRemainingXp = offlineProgress;
    while(flyweightRemainingXp >= game.flyweightXpThresh) {
      game.flyweightLevel++;
      flyweightRemainingXp -= game.flyweightXpThresh;
      game.flyweightXpThresh *= 1.3;
    }
    game.flyweightXp += flyweightRemainingXp;
  }

  if (game.activeWeightclass === "bantamweight") {
    let remainingXp = offlineProgress;
    console.log("offline for: ", offlineMinutes, " minutes");
    while (remainingXp >= bantamweightFighters.xpThresh[index]) {
      bantamweightFighters.level[index]++;
      remainingXp -= bantamweightFighters.xpThresh[index];
      bantamweightFighters.xpThresh[index] *= 1.1;
    }
    bantamweightFighters.xp[index] + remainingXp;

    let bantamweightRemainingXp = offlineProgress;
    while(bantamweightRemainingXp >= game.bantamweightXpThresh) {
      game.bantamweightLevel++;
      bantamweightRemainingXp -= game.bantamweightXpThresh;
      game.bantamweightXpThresh *= 1.3;
    }
    game.bantamweightXp += bantamweightRemainingXp;
  }

  if (game.activeWeightclass === "featherweight") {
    let remainingXp = offlineProgress;
    console.log("offline for: ", offlineMinutes, " minutes");
    while (remainingXp >= featherweightFighters.xpThresh[index]) {
      featherweightFighters.level[index]++;
      remainingXp -= featherweightFighters.xpThresh[index];
      featherweightFighters.xpThresh[index] *= 1.1;
    }
    featherweightFighters.xp[index] + remainingXp;

    let featherweightRemainingXp = offlineProgress;
    while(featherweightRemainingXp >= game.featherweightXpThresh) {
      game.featherweightLevel++;
      featherweightRemainingXp -= game.featherweightXpThresh;
      game.featherweightXpThresh *= 1.3;
    }
    game.featherweightXp += featherweightRemainingXp;
  }

  if (game.activeWeightclass === "lightweight") {
    let remainingXp = offlineProgress;
    console.log("offline for: ", offlineMinutes, " minutes");
    while (remainingXp >= lightweightFighters.xpThresh[index]) {
      lightweightFighters.level[index]++;
      remainingXp -= lightweightFighters.xpThresh[index];
      lightweightFighters.xpThresh[index] *= 1.1;
    }
    lightweightFighters.xp[index] + remainingXp;

    let lightweightRemainingXp = offlineProgress;
    while(lightweightRemainingXp >= game.lightweightXpThresh) {
      game.lightweightLevel++;
      lightweightRemainingXp -= game.lightweightXpThresh;
      game.lightweightXpThresh *= 1.3;
    }
    game.lightweightXp += lightweightRemainingXp;
  }

  if (game.activeWeightclass === "welterweight") {
    let remainingXp = offlineProgress;
    console.log("offline for: ", offlineMinutes, " minutes");
    while (remainingXp >= welterweightFighters.xpThresh[index]) {
      welterweightFighters.level[index]++;
      remainingXp -= welterweightFighters.xpThresh[index];
      welterweightFighters.xpThresh[index] *= 1.1;
    }
    welterweightFighters.xp[index] + remainingXp;

    let welterweightRemainingXp = offlineProgress;
    while(welterweightRemainingXp >= game.welterweightXpThresh) {
      game.welterweightLevel++;
      welterweightRemainingXp -= game.welterweightXpThresh;
      game.welterweightXpThresh *= 1.3;
    }
    game.welterweightXp += welterweightRemainingXp;
  }
}

function flyweightInterval(intervalIndex: number) {
  if (intervalIndex !== undefined) {
  clearInterval(intervalIndex);
  }
  const progressBar = flyweightFighters.id[intervalIndex] + "Bar";
  const progressBarEl = document.getElementById(progressBar) as HTMLDivElement;
  let progress = flyweightFighters.progress[intervalIndex];
  let xp = flyweightFighters.xp[intervalIndex];
  let step = flyweightFighters.step[intervalIndex];

  flyweightFighters.interval[intervalIndex] = setInterval(() => {
    game.flyweightActive = true;
    if (progress >= 100) {
      progress = 0;
      xp += 1;
      game.flyweightXp += game.flyweightStep;
      if (Math.floor(game.flyweightXp) >= Math.floor(game.flyweightXpThresh)) {
        game.flyweightLevel++;
        game.flyweightXpThresh *= 1.3;
        game.flyweightXp = 0;
      }
      if (Math.floor(xp) >= Math.floor(flyweightFighters.xpThresh[intervalIndex])) {
        xp = 0;
        flyweightFighters.xpThresh[intervalIndex] *= game.globalXpThreshMulti;
        flyweightFighters.level[intervalIndex] += 1;
        game.flyweightCount++;
        game.totalCount++;
      }
    } else {
      progress += step;
      game.flyweightXp += game.flyweightStep;
      if (progressBarEl) {
        progressBarEl.style.width = `${progress}%`;
      }
    }
    flyweightFighters.progress[intervalIndex] = progress;
    flyweightFighters.xp[intervalIndex] = xp;
  }, 10);
  updateUi();
}

function bantamweightInterval(index: number) {
  const progressBar = bantamweightFighters.id[index] + "Bar";
  const progressBarEl = document.getElementById(progressBar) as HTMLDivElement;
  let progress = bantamweightFighters.progress[index];
  let xp = bantamweightFighters.xp[index];
  let step = bantamweightFighters.step[index];

  bantamweightFighters.interval[index] = setInterval(() => {
    game.bantamweightActive = true;
    if (progress >= 100) {
      progress = 0;
      xp += 1;
      game.bantamweightXp += game.bantamweightStep;
      if (game.bantamweightXp >= Math.floor(game.bantamweightXpThresh)) {
        game.bantamweightLevel++;
        game.bantamweightXpThresh *= 1.3;
        game.bantamweightXp = 0;
      }
      if (Math.floor(xp) >= Math.floor(bantamweightFighters.xpThresh[index])) {
        xp = 0;
        bantamweightFighters.xpThresh[index] *= game.globalXpThreshMulti;
        bantamweightFighters.level[index] += 1;
        game.bantamweightCount++;
        game.totalCount++;
      }
    } else {
      progress += step;
      game.bantamweightXp += game.bantamweightStep;
      if (progressBarEl) {
        progressBarEl.style.width = `${progress}%`;
      }
    }
    bantamweightFighters.progress[index] = progress;
    bantamweightFighters.xp[index] = xp;
  }, 10);
  updateUi();
}

function featherweightInterval(index: number) {
  const progressBar = featherweightFighters.id[index] + "Bar";
  const progressBarEl = document.getElementById(progressBar) as HTMLDivElement;
  let progress = featherweightFighters.progress[index];
  let xp = featherweightFighters.xp[index];
  let step = featherweightFighters.step[index];

  featherweightFighters.interval[index] = setInterval(() => {
    game.featherweightActive = true;
    if (progress >= 100) {
      progress = 0;
      xp += 1;
      game.featherweightXp += game.featherweightStep;
      if (game.featherweightXp >= Math.floor(game.featherweightXpThresh)) {
        game.featherweightLevel++;
        game.featherweightXpThresh *= 1.3;
        game.featherweightXp = 0;
      }
      if (Math.floor(xp) >= Math.floor(featherweightFighters.xpThresh[index])) {
        xp = 0;
        featherweightFighters.xpThresh[index] *= game.globalXpThreshMulti;
        featherweightFighters.level[index] += 1;
        game.featherweightCount++;
        game.totalCount++;
      }
    } else {
      progress += step;
      game.featherweightXp += game.featherweightStep;
      if (progressBarEl) {
        progressBarEl.style.width = `${progress}%`;
      }
    }
    featherweightFighters.progress[index] = progress;
    featherweightFighters.xp[index] = xp;
  }, 10);
  updateUi();
}

function lightweightInterval(index: number) {
  const progressBar = lightweightFighters.id[index] + "Bar";
  const progressBarEl = document.getElementById(progressBar) as HTMLDivElement;
  let progress = lightweightFighters.progress[index];
  let xp = lightweightFighters.xp[index];
  let step = lightweightFighters.step[index];

  lightweightFighters.interval[index] = setInterval(() => {
    game.lightweightActive = true;
    if (progress >= 100) {
      progress = 0;
      xp += 1;
      game.lightweightXp += game.lightweightStep;
      if (game.lightweightXp >= Math.floor(game.lightweightXpThresh)) {
        game.lightweightLevel++;
        game.lightweightXpThresh *= 1.3;
        game.lightweightXp = 0;
      }
      if (Math.floor(xp) >= Math.floor(lightweightFighters.xpThresh[index])) {
        xp = 0;
        lightweightFighters.xpThresh[index] *= game.globalXpThreshMulti;
        lightweightFighters.level[index] += 1;
        game.lightweightCount++;
        game.totalCount++;
      }
    } else {
      progress += step;
      game.lightweightXp += game.lightweightStep;
      if (progressBarEl) {
        progressBarEl.style.width = `${progress}%`;
      }
    }
    lightweightFighters.progress[index] = progress;
    lightweightFighters.xp[index] = xp;
  }, 10);
  updateUi();
}

function welterweightInterval(index: number) {
  const progressBar = welterweightFighters.id[index] + "Bar";
  const progressBarEl = document.getElementById(progressBar) as HTMLDivElement;
  let progress = welterweightFighters.progress[index];
  let xp = welterweightFighters.xp[index];
  let step = welterweightFighters.step[index];

  welterweightFighters.interval[index] = setInterval(() => {
    game.welterweightActive = true;
    if (progress >= 100) {
      progress = 0;
      xp += 1;
      game.welterweightXp += game.welterweightStep;
      if (game.welterweightXp >= Math.floor(game.welterweightXpThresh)) {
        game.welterweightLevel++;
        game.welterweightXpThresh *= 1.3;
        game.welterweightXp = 0;
      }
      if (Math.floor(xp) >= Math.floor(welterweightFighters.xpThresh[index])) {
        xp = 0;
        welterweightFighters.xpThresh[index] *= game.globalXpThreshMulti;
        welterweightFighters.level[index] += 1;
        game.welterweightCount++;
        game.totalCount++;
      }
    } else {
      progress += step;
      game.welterweightXp += game.welterweightStep;
      if (progressBarEl) {
        progressBarEl.style.width = `${progress}%`;
      }
    }
    welterweightFighters.progress[index] = progress;
    welterweightFighters.xp[index] = xp;
  }, 10);
  updateUi();
}

setInterval(() => {
  let totalPower = 0;
  for (let i = 0; i < flyweightFighters.nimi.length; i++) {
    if (flyweightFighters.interval[i] !== null) {
      totalPower += (flyweightFighters.power[i] * game.globalPowerMulti) * (flyweightFighters.speed[i] * game.globalSpeedMulti);
    } 
    if (bantamweightFighters.interval[i] !== null) {
      totalPower += (bantamweightFighters.power[i] * game.globalPowerMulti) * (bantamweightFighters.speed[i] * game.globalSpeedMulti);
    }
    if (featherweightFighters.interval[i] !== null) {
      totalPower += (featherweightFighters.power[i] * game.globalPowerMulti) * (featherweightFighters.speed[i] * game.globalSpeedMulti);
    }
    if (lightweightFighters.interval[i] !== null) {
      totalPower += (lightweightFighters.power[i] * game.globalPowerMulti) * (lightweightFighters.speed[i] * game.globalSpeedMulti);
    }
    if (welterweightFighters.interval[i] !== null) {
      totalPower += (welterweightFighters.power[i] * game.globalPowerMulti) * (welterweightFighters.speed[i] * game.globalSpeedMulti);
    }
  }

  game.hampaitaPerSekunti = totalPower;
  game.hampaita += game.hampaitaPerSekunti / 10;
  updateUi();
}, 100);

setInterval(() => {
  saveGame();
}, 30_000);

function updateUi() {
  if (elements.codyDurden) {
    elements.codyDurdenXp.innerHTML = flyweightFighters.xp[0].toFixed(0).toLocaleString();
    elements.codyDurdenXpThresh.innerHTML = flyweightFighters.xpThresh[0].toFixed(0).toLocaleString();
    elements.codyDurdenLevel.innerHTML = flyweightFighters.level[0].toFixed(0).toLocaleString();
    elements.codyDurdenPower.innerHTML = (flyweightFighters.power[0] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.codyDurdenSpeed.innerHTML = (flyweightFighters.speed[0] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.codyDurdenProgress.style.width = `${flyweightFighters.progress[0]}%`;
  }
  if (elements.asuAlmabayev) {
    elements.asuAlmabayevXp.innerHTML = flyweightFighters.xp[1].toFixed(0).toLocaleString();
    elements.asuAlmabayevXpThresh.innerHTML = flyweightFighters.xpThresh[1].toFixed(0).toLocaleString();
    elements.asuAlmabayevLevel.innerHTML = flyweightFighters.level[1].toFixed(0).toLocaleString();
    elements.asuAlmabayevPower.innerHTML = (flyweightFighters.power[1] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.asuAlmabayevSpeed.innerHTML = (flyweightFighters.speed[1] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.asuAlmabayevProgress.style.width = `${flyweightFighters.progress[1]}%`;
  }
  if (elements.brunoSilva) {
    elements.brunoSilvaXp.innerHTML = flyweightFighters.xp[2].toFixed(0).toLocaleString();
    elements.brunoSilvaXpThresh.innerHTML = flyweightFighters.xpThresh[2].toFixed(0).toLocaleString();
    elements.brunoSilvaLevel.innerHTML = flyweightFighters.level[2].toFixed(0).toLocaleString();
    elements.brunoSilvaPower.innerHTML = (flyweightFighters.power[2] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.brunoSilvaSpeed.innerHTML = (flyweightFighters.speed[2] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.brunoSilvaProgress.style.width = `${flyweightFighters.progress[2]}%`;
  }
  if (elements.tagirUlanbekov) {
    elements.tagirUlanbekovXp.innerHTML = flyweightFighters.xp[3].toFixed(0).toLocaleString();
    elements.tagirUlanbekovXpThresh.innerHTML = flyweightFighters.xpThresh[3].toFixed(0).toLocaleString();
    elements.tagirUlanbekovLevel.innerHTML = flyweightFighters.level[3].toFixed(0).toLocaleString();
    elements.tagirUlanbekovPower.innerHTML = (flyweightFighters.power[3] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.tagirUlanbekovSpeed.innerHTML = (flyweightFighters.speed[3] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.tagirUlanbekovProgress.style.width = `${flyweightFighters.progress[3]}%`;
  }
  if (elements.mattSchnell) {
    elements.mattSchnellXp.innerHTML = flyweightFighters.xp[4].toFixed(0).toLocaleString();
    elements.mattSchnellXpThresh.innerHTML = flyweightFighters.xpThresh[4].toFixed(0).toLocaleString();
    elements.mattSchnellLevel.innerHTML = flyweightFighters.level[4].toFixed(0).toLocaleString();
    elements.mattSchnellPower.innerHTML = (flyweightFighters.power[4] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.mattSchnellSpeed.innerHTML = (flyweightFighters.speed[4] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.mattSchnellProgress.style.width = `${flyweightFighters.progress[4]}%`;
  }

  if (elements.montelJackson) {
    elements.montelJacksonXp.innerHTML = bantamweightFighters.xp[0].toFixed(0).toLocaleString();
    elements.montelJacksonXpThresh.innerHTML = bantamweightFighters.xpThresh[0].toFixed(0).toLocaleString();
    elements.montelJacksonLevel.innerHTML = bantamweightFighters.level[0].toFixed(0).toLocaleString();
    elements.montelJacksonPower.innerHTML = (bantamweightFighters.power[0] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.montelJacksonSpeed.innerHTML = (bantamweightFighters.speed[0] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.montelJacksonProgress.style.width = `${bantamweightFighters.progress[0]}%`;
  }
  if (elements.dominickCruz) {
    elements.dominickCruzXp.innerHTML = bantamweightFighters.xp[1].toFixed(0).toLocaleString();
    elements.dominickCruzXpThresh.innerHTML = bantamweightFighters.xpThresh[1].toFixed(0).toLocaleString();
    elements.dominickCruzLevel.innerHTML = bantamweightFighters.level[1].toFixed(0).toLocaleString();
    elements.dominickCruzPower.innerHTML = (bantamweightFighters.power[1] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.dominickCruzSpeed.innerHTML = (bantamweightFighters.speed[1] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.dominickCruzProgress.style.width = `${bantamweightFighters.progress[1]}%`;
  }
  if (elements.jonathanMartinez) {
    elements.jonathanMartinezXp.innerHTML = bantamweightFighters.xp[2].toFixed(0).toLocaleString();
    elements.jonathanMartinezXpThresh.innerHTML = bantamweightFighters.xpThresh[2].toFixed(0).toLocaleString();
    elements.jonathanMartinezLevel.innerHTML = bantamweightFighters.level[2].toFixed(0).toLocaleString();
    elements.jonathanMartinezPower.innerHTML = (bantamweightFighters.power[2] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.jonathanMartinezSpeed.innerHTML = (bantamweightFighters.speed[2] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.jonathanMartinezProgress.style.width = `${bantamweightFighters.progress[2]}%`;
  }
  if (elements.kylerPhillips) {
    elements.kylerPhillipsXp.innerHTML = bantamweightFighters.xp[3].toFixed(0).toLocaleString();
    elements.kylerPhillipsXpThresh.innerHTML = bantamweightFighters.xpThresh[3].toFixed(0).toLocaleString();
    elements.kylerPhillipsLevel.innerHTML = bantamweightFighters.level[3].toFixed(0).toLocaleString();
    elements.kylerPhillipsPower.innerHTML = (bantamweightFighters.power[3] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.kylerPhillipsSpeed.innerHTML = (bantamweightFighters.speed[3] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.kylerPhillipsProgress.style.width = `${bantamweightFighters.progress[3]}%`;
  }
  if (elements.marioBautista) {
    elements.marioBautistaXp.innerHTML = bantamweightFighters.xp[4].toFixed(0).toLocaleString();
    elements.marioBautistaXpThresh.innerHTML = bantamweightFighters.xpThresh[4].toFixed(0).toLocaleString();
    elements.marioBautistaLevel.innerHTML = bantamweightFighters.level[4].toFixed(0).toLocaleString();
    elements.marioBautistaPower.innerHTML = (bantamweightFighters.power[4] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.marioBautistaSpeed.innerHTML = (bantamweightFighters.speed[4] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.marioBautistaProgress.style.width = `${bantamweightFighters.progress[4]}%`;
  }

  if (elements.edsonBarboza) {
    elements.edsonBarbozaXp.innerHTML = featherweightFighters.xp[0].toFixed(0).toLocaleString();
    elements.edsonBarbozaXpThresh.innerHTML = featherweightFighters.xpThresh[0].toFixed(0).toLocaleString();
    elements.edsonBarbozaLevel.innerHTML = featherweightFighters.level[0].toFixed(0).toLocaleString();
    elements.edsonBarbozaPower.innerHTML = (featherweightFighters.power[0] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.edsonBarbozaSpeed.innerHTML = (featherweightFighters.speed[0] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.edsonBarbozaProgress.style.width = `${featherweightFighters.progress[0]}%`;
  }
  if (elements.danIge) {
    elements.danIgeXp.innerHTML = featherweightFighters.xp[1].toFixed(0).toLocaleString();
    elements.danIgeXpThresh.innerHTML = featherweightFighters.xpThresh[1].toFixed(0).toLocaleString();
    elements.danIgeLevel.innerHTML = featherweightFighters.level[1].toFixed(0).toLocaleString();
    elements.danIgePower.innerHTML = (featherweightFighters.power[1] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.danIgeSpeed.innerHTML = (featherweightFighters.speed[1] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.danIgeProgress.style.width = `${featherweightFighters.progress[1]}%`;
  }
  if (elements.bryceMichell) {
    elements.bryceMichellXp.innerHTML = featherweightFighters.xp[2].toFixed(0).toLocaleString();
    elements.bryceMichellXpThresh.innerHTML = featherweightFighters.xpThresh[2].toFixed(0).toLocaleString();
    elements.bryceMichellLevel.innerHTML = featherweightFighters.level[2].toFixed(0).toLocaleString();
    elements.bryceMichellPower.innerHTML = (featherweightFighters.power[2] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.bryceMichellSpeed.innerHTML = (featherweightFighters.speed[2] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.bryceMichellProgress.style.width = `${featherweightFighters.progress[2]}%`;
  }
  if (elements.diegoLopez) {
    elements.diegoLopezXp.innerHTML = featherweightFighters.xp[3].toFixed(0).toLocaleString();
    elements.diegoLopezXpThresh.innerHTML = featherweightFighters.xpThresh[3].toFixed(0).toLocaleString();
    elements.diegoLopezLevel.innerHTML = featherweightFighters.level[3].toFixed(0).toLocaleString();
    elements.diegoLopezPower.innerHTML = featherweightFighters.power[3].toFixed(3).toLocaleString();
    elements.diegoLopezSpeed.innerHTML = (featherweightFighters.speed[3] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.diegoLopezProgress.style.width = `${featherweightFighters.progress[3]}%`;
  }
  if (elements.leroneMurphy) {
    elements.leroneMurphyXp.innerHTML = featherweightFighters.xp[4].toFixed(0).toLocaleString();
    elements.leroneMurphyXpThresh.innerHTML = featherweightFighters.xpThresh[4].toFixed(0).toLocaleString();
    elements.leroneMurphyLevel.innerHTML = featherweightFighters.level[4].toFixed(0).toLocaleString();
    elements.leroneMurphyPower.innerHTML = (featherweightFighters.power[4] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.leroneMurphySpeed.innerHTML = (featherweightFighters.speed[4] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.leroneMurphyProgress.style.width = `${featherweightFighters.progress[4]}%`;
  }

  if (elements.paddyPimblett) {
    elements.paddyPimblettXp.innerHTML = lightweightFighters.xp[0].toFixed(0).toLocaleString();
    elements.paddyPimblettXpThresh.innerHTML = lightweightFighters.xpThresh[0].toFixed(0).toLocaleString();
    elements.paddyPimblettLevel.innerHTML = lightweightFighters.level[0].toFixed(0).toLocaleString();
    elements.paddyPimblettPower.innerHTML = (lightweightFighters.power[0] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.paddyPimblettSpeed.innerHTML = (lightweightFighters.speed[0] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.paddyPimblettProgress.style.width = `${lightweightFighters.progress[0]}%`;
  }
  if (elements.jalinTurner) {
    elements.jalinTurnerXp.innerHTML = lightweightFighters.xp[1].toFixed(0).toLocaleString();
    elements.jalinTurnerXpThresh.innerHTML = lightweightFighters.xpThresh[1].toFixed(0).toLocaleString();
    elements.jalinTurnerLevel.innerHTML = lightweightFighters.level[1].toFixed(0).toLocaleString();
    elements.jalinTurnerPower.innerHTML = (lightweightFighters.power[1] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.jalinTurnerSpeed.innerHTML = (lightweightFighters.speed[1] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.jalinTurnerProgress.style.width = `${lightweightFighters.progress[1]}%`;
  }
  if (elements.rafaelDosAnjos) {
    elements.rafaelDosAnjosXp.innerHTML = lightweightFighters.xp[2].toFixed(0).toLocaleString();
    elements.rafaelDosAnjosXpThresh.innerHTML = lightweightFighters.xpThresh[2].toFixed(0).toLocaleString();
    elements.rafaelDosAnjosLevel.innerHTML = lightweightFighters.level[2].toFixed(0).toLocaleString();
    elements.rafaelDosAnjosPower.innerHTML = (lightweightFighters.power[2] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.rafaelDosAnjosSpeed.innerHTML = (lightweightFighters.speed[2] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.rafaelDosAnjosProgress.style.width = `${lightweightFighters.progress[2]}%`;
  }
  if (elements.benoitSaintDenis) {
    elements.benoitSaintDenisXp.innerHTML = lightweightFighters.xp[3].toFixed(0).toLocaleString();
    elements.benoitSaintDenisXpThresh.innerHTML = lightweightFighters.xpThresh[3].toFixed(0).toLocaleString();
    elements.benoitSaintDenisLevel.innerHTML = lightweightFighters.level[3].toFixed(0).toLocaleString();
    elements.benoitSaintDenisPower.innerHTML = (lightweightFighters.power[3] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.benoitSaintDenisSpeed.innerHTML = (lightweightFighters.speed[3] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.benoitSaintDenisProgress.style.width = `${lightweightFighters.progress[3]}%`;
  }
  if (elements.renatoMoicano) {
    elements.renatoMoicanoXp.innerHTML = lightweightFighters.xp[4].toFixed(0).toLocaleString();
    elements.renatoMoicanoXpThresh.innerHTML = lightweightFighters.xpThresh[4].toFixed(0).toLocaleString();
    elements.renatoMoicanoLevel.innerHTML = lightweightFighters.level[4].toFixed(0).toLocaleString();
    elements.renatoMoicanoPower.innerHTML = (lightweightFighters.power[4] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.renatoMoicanoSpeed.innerHTML = (lightweightFighters.speed[4] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.renatoMoicanoProgress.style.width = `${lightweightFighters.progress[4]}%`;
  }

  if (elements.neilMagny) {
    elements.neilMagnyXp.innerHTML = welterweightFighters.xp[0].toFixed(0).toLocaleString();
    elements.neilMagnyXpThresh.innerHTML = welterweightFighters.xpThresh[0].toFixed(0).toLocaleString();
    elements.neilMagnyLevel.innerHTML = welterweightFighters.level[0].toFixed(0).toLocaleString();
    elements.neilMagnyPower.innerHTML = (welterweightFighters.power[0] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.neilMagnySpeed.innerHTML = (welterweightFighters.speed[0] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.neilMagnyProgress.style.width = `${welterweightFighters.progress[0]}%`;
  }
  if (elements.vicenteLuque) {
    elements.vicenteLuqueXp.innerHTML = welterweightFighters.xp[1].toFixed(0).toLocaleString();
    elements.vicenteLuqueXpThresh.innerHTML = welterweightFighters.xpThresh[1].toFixed(0).toLocaleString();
    elements.vicenteLuqueLevel.innerHTML = welterweightFighters.level[1].toFixed(0).toLocaleString();
    elements.vicenteLuquePower.innerHTML = (welterweightFighters.power[1] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.vicenteLuqueSpeed.innerHTML = (welterweightFighters.speed[1] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.vicenteLuqueProgress.style.width = `${welterweightFighters.progress[1]}%`;
  }
  if (elements.michaelPage) {
    elements.michaelPageXp.innerHTML = welterweightFighters.xp[2].toFixed(0).toLocaleString();
    elements.michaelPageXpThresh.innerHTML = welterweightFighters.xpThresh[2].toFixed(0).toLocaleString();
    elements.michaelPageLevel.innerHTML = welterweightFighters.level[2].toFixed(0).toLocaleString();
    elements.michaelPagePower.innerHTML = (welterweightFighters.power[2] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.michaelPageSpeed.innerHTML = (welterweightFighters.speed[2] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.michaelPageProgress.style.width = `${welterweightFighters.progress[2]}%`;
  }
  if (elements.michaelMorales) {
    elements.michaelMoralesXp.innerHTML = welterweightFighters.xp[3].toFixed(0).toLocaleString();
    elements.michaelMoralesXpThresh.innerHTML = welterweightFighters.xpThresh[3].toFixed(0).toLocaleString();
    elements.michaelMoralesLevel.innerHTML = welterweightFighters.level[3].toFixed(0).toLocaleString();
    elements.michaelMoralesPower.innerHTML = (welterweightFighters.power[3] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.michaelMoralesSpeed.innerHTML = (welterweightFighters.speed[3] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.michaelMoralesProgress.style.width = `${welterweightFighters.progress[3]}%`;
  }
  if (elements.joaquinBuckley) {
    elements.joaquinBuckleyXp.innerHTML = welterweightFighters.xp[4].toFixed(0).toLocaleString();
    elements.joaquinBuckleyXpThresh.innerHTML = welterweightFighters.xpThresh[4].toFixed(0).toLocaleString();
    elements.joaquinBuckleyLevel.innerHTML = welterweightFighters.level[4].toFixed(0).toLocaleString();
    elements.joaquinBuckleyPower.innerHTML = (welterweightFighters.power[4] * game.globalPowerMulti).toFixed(3).toLocaleString();
    elements.joaquinBuckleySpeed.innerHTML = (welterweightFighters.speed[4] * game.globalSpeedMulti).toFixed(3).toLocaleString();
    elements.joaquinBuckleyProgress.style.width = `${welterweightFighters.progress[4]}%`;
  }

  if (elements.flyweightLevel) {
    elements.flyweightLevel.innerHTML = game.flyweightLevel.toFixed(0).toLocaleString();
  }
  if (elements.bantamweightLevel) {
    elements.bantamweightLevel.innerHTML = game.bantamweightLevel.toFixed(0).toLocaleString();
  }
  if (elements.featherweightLevel) {
    elements.featherweightLevel.innerHTML = game.featherweightLevel.toFixed(0).toLocaleString();
  }
  if (elements.lightweightLevel) {
    elements.lightweightLevel.innerHTML = game.lightweightLevel.toFixed(0).toLocaleString();
  }
  if (elements.welterweightLevel) {
    elements.welterweightLevel.innerHTML = game.welterweightLevel.toFixed(0).toLocaleString();
  }

  if (elements.hampaitaEl) {
    elements.hampaitaEl.innerHTML = game.hampaita.toFixed(2).toLocaleString();
  }
  if (elements.hampaitaPerSekuntiEl) {
    elements.hampaitaPerSekuntiEl.innerHTML = game.hampaitaPerSekunti.toFixed(2).toLocaleString();
  }

  if (elements.avaaSatunnainenHintaEl) {
    elements.avaaSatunnainenHintaEl.innerHTML = new Intl.NumberFormat().format(game.avaaSatunnainenHinta);
  }
  if (elements.trainersEl) {
    elements.trainersEl.innerHTML = (game.maxTrainers - game.activeTrainers).toLocaleString();
  }
  if (elements.rebirthForEl) {
    elements.rebirthForEl.innerHTML = (game.hampaita * game.veriKerroin).toLocaleString();
  }
  if (elements.versionEl) {
    elements.versionEl.innerHTML = game.version
  }
}

if (elements.codyDurden) {
  for (let i = 0; i < flyweightFighters.nimi.length; i++) {
    flyweightFighters.divEl[i].addEventListener("click", () => {
      if (!flyweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
        flyweightInterval(i);
        flyweightFighters.isActive[i] = true;
        game.activeTrainers++;
        game.activeFighter = flyweightFighters.id[i];
        flyweightFighters.intervalIndex = flyweightFighters.numero[i] as number;
        game.activeWeightclass = "flyweight";
        updateUi();
        saveGame();
      } else {
        clearInterval(flyweightFighters.interval[i] as NodeJS.Timeout);
        clearInterval(flyweightFighters.intervalIndex as NodeJS.Timeout);
        flyweightFighters.interval[i] = null;
        game.activeTrainers--;
        flyweightFighters.isActive[i] = false;
        game.flyweightActive = false;
        game.intervalId = -1;
        updateUi();
        saveGame();
      }
    })
  }
}
if (elements.montelJackson) {
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    bantamweightFighters.divEl[i].addEventListener("click", () => {
      if (!bantamweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
        bantamweightInterval(i);
        game.activeTrainers++;
        game.activeFighter = bantamweightFighters.id[i];
        bantamweightFighters.intervalIndex = bantamweightFighters.numero[i] as number;
        bantamweightFighters.isActive[i] = true;
        game.activeWeightclass = "bantamweight";
        updateUi();
        saveGame();
      } else {
        clearInterval(bantamweightFighters.interval[i] as NodeJS.Timeout);
        clearInterval(bantamweightFighters.intervalIndex as NodeJS.Timeout);
        bantamweightFighters.interval[i] = null;
        game.activeTrainers--;
        bantamweightFighters.isActive[i] = false;
        game.bantamweightActive = false;
        game.intervalId = -1;
        updateUi();
        saveGame();
      }
    })
  }
}
if (elements.edsonBarboza) {
  for (let i = 0; i < featherweightFighters.nimi.length; i++) {
    featherweightFighters.divEl[i].addEventListener("click", () => {
      if (!featherweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
        featherweightInterval(i);
        game.activeTrainers++;
        game.activeFighter = featherweightFighters.id[i];
        featherweightFighters.intervalIndex = featherweightFighters.numero[i] as number;
        featherweightFighters.isActive[i] = true;
        game.activeWeightclass = "featherweight";
        updateUi();
        saveGame();
      } else {
        clearInterval(featherweightFighters.interval[i] as NodeJS.Timeout);
        clearInterval(featherweightFighters.intervalIndex as NodeJS.Timeout);
        featherweightFighters.interval[i] = null;
        game.activeTrainers--;
        featherweightFighters.isActive[i] = false;
        game.featherweightActive = false;
        game.intervalId = -1;
        updateUi();
        saveGame();
      }
    })
  }
}
if (elements.paddyPimblett) {
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    lightweightFighters.divEl[i].addEventListener("click", () => {
      if (!lightweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
        lightweightInterval(i);
        game.activeTrainers++;
        game.activeFighter = lightweightFighters.id[i];
        lightweightFighters.intervalIndex = lightweightFighters.numero[i] as number;
        lightweightFighters.isActive[i] = true;
        game.activeWeightclass = "lightweight";
        updateUi();
        saveGame();
      } else {
        clearInterval(lightweightFighters.interval[i] as NodeJS.Timeout);
        clearInterval(lightweightFighters.intervalIndex as NodeJS.Timeout);
        lightweightFighters.interval[i] = null;
        game.activeTrainers--;
        lightweightFighters.isActive[i] = false;
        game.lightweightActive = false;
        game.intervalId = -1;
        updateUi();
        saveGame();
      }
    })
  }
}
if (elements.neilMagny) {
  for (let i = 0; i < welterweightFighters.nimi.length; i++) {
    welterweightFighters.divEl[i].addEventListener("click", () => {
      if (!welterweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
        welterweightInterval(i);
        game.activeTrainers++;
        game.activeFighter = welterweightFighters.id[i];
        welterweightFighters.intervalIndex = welterweightFighters.numero[i] as number;
        welterweightFighters.isActive[i] = true;
        game.activeWeightclass = "welterweight";
        updateUi();
        saveGame();
      } else {
        clearInterval(welterweightFighters.interval[i] as NodeJS.Timeout);
        clearInterval(welterweightFighters.intervalIndex as NodeJS.Timeout);
        welterweightFighters.interval[i] = null;
        game.activeTrainers--;
        welterweightFighters.isActive[i] = false;
        game.welterweightActive = false;
        game.intervalId = -1;
        updateUi();
        saveGame();
      }
    })
  }
}

if (elements.saveButton) {
  elements.saveButton.addEventListener("click", () => {
    saveGame();
  });
}
if (elements.loadButton) {
  elements.loadButton.addEventListener("click", () => {
    loadGame();
  });
}
if (elements.resetButton) {
  elements.resetButton.addEventListener("click", () => {
    resetGame();
  });
}

window.onload = () => {
  loadGame();
}

window.addEventListener("beforeunload", () => {
  let lastPlayed = Date.now();
  game.lastPlayed = lastPlayed;
  //saveGame();
});
