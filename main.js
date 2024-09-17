"use strict";
let game = {
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
let flyweightFighters = {
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
        document.getElementById("codyDurdenContainer"),
        document.getElementById("asuAlmabayevContainer"),
        document.getElementById("brunoSilvaContainer"),
        document.getElementById("tagirUlanbekovContainer"),
        document.getElementById("mattSchnellContainer"),
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
let bantamweightFighters = {
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
        document.getElementById("montelJacksonContainer"),
        document.getElementById("dominickCruzContainer"),
        document.getElementById("jonathanMartinezContainer"),
        document.getElementById("kylerPhillipsContainer"),
        document.getElementById("marioBautistaContainer"),
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
let featherweightFighters = {
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
        document.getElementById("edsonBarbozaContainer"),
        document.getElementById("danIgeContainer"),
        document.getElementById("bryceMichellContainer"),
        document.getElementById("diegoLopezContainer"),
        document.getElementById("leroneMurphyContainer"),
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
let lightweightFighters = {
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
        document.getElementById("paddyPimblettContainer"),
        document.getElementById("jalinTurnerContainer"),
        document.getElementById("rafaelDosAnjosContainer"),
        document.getElementById("benoitSaintDenisContainer"),
        document.getElementById("renatoMoicanoContainer"),
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
let welterweightFighters = {
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
        document.getElementById("neilMagnyContainer"),
        document.getElementById("vicenteLuqueContainer"),
        document.getElementById("michaelPageContainer"),
        document.getElementById("michaelMoralesContainer"),
        document.getElementById("joaquinBuckleyContainer"),
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
let flyweightUpgrades = {
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
const elements = {
    codyDurden: document.getElementById("codyDurden"),
    codyDurdenXp: document.getElementById("codyDurdenXp"),
    codyDurdenXpThresh: document.getElementById("codyDurdenXpThresh"),
    codyDurdenPower: document.getElementById("codyDurdenPower"),
    codyDurdenSpeed: document.getElementById("codyDurdenSpeed"),
    codyDurdenLevel: document.getElementById("codyDurdenLevel"),
    codyDurdenProgress: document.getElementById("codyDurdenBar"),
    asuAlmabayev: document.getElementById("asuAlmabayev"),
    asuAlmabayevXp: document.getElementById("asuAlmabayevXp"),
    asuAlmabayevXpThresh: document.getElementById("asuAlmabayevXpThresh"),
    asuAlmabayevPower: document.getElementById("asuAlmabayevPower"),
    asuAlmabayevSpeed: document.getElementById("asuAlmabayevSpeed"),
    asuAlmabayevLevel: document.getElementById("asuAlmabayevLevel"),
    asuAlmabayevProgress: document.getElementById("asuAlmabayevBar"),
    brunoSilva: document.getElementById("brunoSilva"),
    brunoSilvaXp: document.getElementById("brunoSilvaXp"),
    brunoSilvaXpThresh: document.getElementById("brunoSilvaXpThresh"),
    brunoSilvaPower: document.getElementById("brunoSilvaPower"),
    brunoSilvaSpeed: document.getElementById("brunoSilvaSpeed"),
    brunoSilvaLevel: document.getElementById("brunoSilvaLevel"),
    brunoSilvaProgress: document.getElementById("brunoSilvaBar"),
    tagirUlanbekov: document.getElementById("tagirUlanbekov"),
    tagirUlanbekovXp: document.getElementById("tagirUlanbekovXp"),
    tagirUlanbekovXpThresh: document.getElementById("tagirUlanbekovXpThresh"),
    tagirUlanbekovPower: document.getElementById("tagirUlanbekovPower"),
    tagirUlanbekovSpeed: document.getElementById("tagirUlanbekovSpeed"),
    tagirUlanbekovLevel: document.getElementById("tagirUlanbekovLevel"),
    tagirUlanbekovProgress: document.getElementById("tagirUlanbekovBar"),
    mattSchnell: document.getElementById("mattSchnell"),
    mattSchnellXp: document.getElementById("mattSchnellXp"),
    mattSchnellXpThresh: document.getElementById("mattSchnellXpThresh"),
    mattSchnellPower: document.getElementById("mattSchnellPower"),
    mattSchnellSpeed: document.getElementById("mattSchnellSpeed"),
    mattSchnellLevel: document.getElementById("mattSchnellLevel"),
    mattSchnellProgress: document.getElementById("mattSchnellBar"),
    montelJackson: document.getElementById("montelJackson"),
    montelJacksonXp: document.getElementById("montelJacksonXp"),
    montelJacksonXpThresh: document.getElementById("montelJacksonXpThresh"),
    montelJacksonPower: document.getElementById("montelJacksonPower"),
    montelJacksonSpeed: document.getElementById("montelJacksonSpeed"),
    montelJacksonLevel: document.getElementById("montelJacksonLevel"),
    montelJacksonProgress: document.getElementById("montelJacksonBar"),
    dominickCruz: document.getElementById("dominickCruz"),
    dominickCruzXp: document.getElementById("dominickCruzXp"),
    dominickCruzXpThresh: document.getElementById("dominickCruzXpThresh"),
    dominickCruzPower: document.getElementById("dominickCruzPower"),
    dominickCruzSpeed: document.getElementById("dominickCruzSpeed"),
    dominickCruzLevel: document.getElementById("dominickCruzLevel"),
    dominickCruzProgress: document.getElementById("dominickCruzBar"),
    jonathanMartinez: document.getElementById("jonathanMartinez"),
    jonathanMartinezXp: document.getElementById("jonathanMartinezXp"),
    jonathanMartinezXpThresh: document.getElementById("jonathanMartinezXpThresh"),
    jonathanMartinezPower: document.getElementById("jonathanMartinezPower"),
    jonathanMartinezSpeed: document.getElementById("jonathanMartinezSpeed"),
    jonathanMartinezLevel: document.getElementById("jonathanMartinezLevel"),
    jonathanMartinezProgress: document.getElementById("jonathanMartinezBar"),
    kylerPhillips: document.getElementById("kylerPhillips"),
    kylerPhillipsXp: document.getElementById("kylerPhillipsXp"),
    kylerPhillipsXpThresh: document.getElementById("kylerPhillipsXpThresh"),
    kylerPhillipsPower: document.getElementById("kylerPhillipsPower"),
    kylerPhillipsSpeed: document.getElementById("kylerPhillipsSpeed"),
    kylerPhillipsLevel: document.getElementById("kylerPhillipsLevel"),
    kylerPhillipsProgress: document.getElementById("kylerPhillipsBar"),
    marioBautista: document.getElementById("marioBautista"),
    marioBautistaXp: document.getElementById("marioBautistaXp"),
    marioBautistaXpThresh: document.getElementById("marioBautistaXpThresh"),
    marioBautistaPower: document.getElementById("marioBautistaPower"),
    marioBautistaSpeed: document.getElementById("marioBautistaSpeed"),
    marioBautistaLevel: document.getElementById("marioBautistaLevel"),
    marioBautistaProgress: document.getElementById("marioBautistaBar"),
    edsonBarboza: document.getElementById("edsonBarboza"),
    edsonBarbozaXp: document.getElementById("edsonBarbozaXp"),
    edsonBarbozaXpThresh: document.getElementById("edsonBarbozaXpThresh"),
    edsonBarbozaPower: document.getElementById("edsonBarbozaPower"),
    edsonBarbozaSpeed: document.getElementById("edsonBarbozaSpeed"),
    edsonBarbozaLevel: document.getElementById("edsonBarbozaLevel"),
    edsonBarbozaProgress: document.getElementById("edsonBarbozaBar"),
    danIge: document.getElementById("danIge"),
    danIgeXp: document.getElementById("danIgeXp"),
    danIgeXpThresh: document.getElementById("danIgeXpThresh"),
    danIgePower: document.getElementById("danIgePower"),
    danIgeSpeed: document.getElementById("danIgeSpeed"),
    danIgeLevel: document.getElementById("danIgeLevel"),
    danIgeProgress: document.getElementById("danIgeBar"),
    bryceMichell: document.getElementById("bryceMichell"),
    bryceMichellXp: document.getElementById("bryceMichellXp"),
    bryceMichellXpThresh: document.getElementById("bryceMichellXpThresh"),
    bryceMichellPower: document.getElementById("bryceMichellPower"),
    bryceMichellSpeed: document.getElementById("bryceMichellSpeed"),
    bryceMichellLevel: document.getElementById("bryceMichellLevel"),
    bryceMichellProgress: document.getElementById("bryceMichellBar"),
    diegoLopez: document.getElementById("diegoLopez"),
    diegoLopezXp: document.getElementById("diegoLopezXp"),
    diegoLopezXpThresh: document.getElementById("diegoLopezXpThresh"),
    diegoLopezPower: document.getElementById("diegoLopezPower"),
    diegoLopezSpeed: document.getElementById("diegoLopezSpeed"),
    diegoLopezLevel: document.getElementById("diegoLopezLevel"),
    diegoLopezProgress: document.getElementById("diegoLopezBar"),
    leroneMurphy: document.getElementById("leroneMurphy"),
    leroneMurphyXp: document.getElementById("leroneMurphyXp"),
    leroneMurphyXpThresh: document.getElementById("leroneMurphyXpThresh"),
    leroneMurphyPower: document.getElementById("leroneMurphyPower"),
    leroneMurphySpeed: document.getElementById("leroneMurphySpeed"),
    leroneMurphyLevel: document.getElementById("leroneMurphyLevel"),
    leroneMurphyProgress: document.getElementById("leroneMurphyBar"),
    paddyPimblett: document.getElementById("paddyPimblett"),
    paddyPimblettXp: document.getElementById("paddyPimblettXp"),
    paddyPimblettXpThresh: document.getElementById("paddyPimblettXpThresh"),
    paddyPimblettPower: document.getElementById("paddyPimblettPower"),
    paddyPimblettSpeed: document.getElementById("paddyPimblettSpeed"),
    paddyPimblettLevel: document.getElementById("paddyPimblettLevel"),
    paddyPimblettProgress: document.getElementById("paddyPimblettBar"),
    jalinTurner: document.getElementById("jalinTurner"),
    jalinTurnerXp: document.getElementById("jalinTurnerXp"),
    jalinTurnerXpThresh: document.getElementById("jalinTurnerXpThresh"),
    jalinTurnerPower: document.getElementById("jalinTurnerPower"),
    jalinTurnerSpeed: document.getElementById("jalinTurnerSpeed"),
    jalinTurnerLevel: document.getElementById("jalinTurnerLevel"),
    jalinTurnerProgress: document.getElementById("jalinTurnerBar"),
    rafaelDosAnjos: document.getElementById("rafaelDosAnjos"),
    rafaelDosAnjosXp: document.getElementById("rafaelDosAnjosXp"),
    rafaelDosAnjosXpThresh: document.getElementById("rafaelDosAnjosXpThresh"),
    rafaelDosAnjosPower: document.getElementById("rafaelDosAnjosPower"),
    rafaelDosAnjosSpeed: document.getElementById("rafaelDosAnjosSpeed"),
    rafaelDosAnjosLevel: document.getElementById("rafaelDosAnjosLevel"),
    rafaelDosAnjosProgress: document.getElementById("rafaelDosAnjosBar"),
    benoitSaintDenis: document.getElementById("benoitSaintDenis"),
    benoitSaintDenisXp: document.getElementById("benoitSaintDenisXp"),
    benoitSaintDenisXpThresh: document.getElementById("benoitSaintDenisXpThresh"),
    benoitSaintDenisPower: document.getElementById("benoitSaintDenisPower"),
    benoitSaintDenisSpeed: document.getElementById("benoitSaintDenisSpeed"),
    benoitSaintDenisLevel: document.getElementById("benoitSaintDenisLevel"),
    benoitSaintDenisProgress: document.getElementById("benoitSaintDenisBar"),
    renatoMoicano: document.getElementById("renatoMoicano"),
    renatoMoicanoXp: document.getElementById("renatoMoicanoXp"),
    renatoMoicanoXpThresh: document.getElementById("renatoMoicanoXpThresh"),
    renatoMoicanoPower: document.getElementById("renatoMoicanoPower"),
    renatoMoicanoSpeed: document.getElementById("renatoMoicanoSpeed"),
    renatoMoicanoLevel: document.getElementById("renatoMoicanoLevel"),
    renatoMoicanoProgress: document.getElementById("renatoMoicanoBar"),
    neilMagny: document.getElementById("neilMagny"),
    neilMagnyXp: document.getElementById("neilMagnyXp"),
    neilMagnyXpThresh: document.getElementById("neilMagnyXpThresh"),
    neilMagnyPower: document.getElementById("neilMagnyPower"),
    neilMagnySpeed: document.getElementById("neilMagnySpeed"),
    neilMagnyLevel: document.getElementById("neilMagnyLevel"),
    neilMagnyProgress: document.getElementById("neilMagnyBar"),
    vicenteLuque: document.getElementById("vicenteLuque"),
    vicenteLuqueXp: document.getElementById("vicenteLuqueXp"),
    vicenteLuqueXpThresh: document.getElementById("vicenteLuqueXpThresh"),
    vicenteLuquePower: document.getElementById("vicenteLuquePower"),
    vicenteLuqueSpeed: document.getElementById("vicenteLuqueSpeed"),
    vicenteLuqueLevel: document.getElementById("vicenteLuqueLevel"),
    vicenteLuqueProgress: document.getElementById("vicenteLuqueBar"),
    michaelPage: document.getElementById("michaelPage"),
    michaelPageXp: document.getElementById("michaelPageXp"),
    michaelPageXpThresh: document.getElementById("michaelPageXpThresh"),
    michaelPagePower: document.getElementById("michaelPagePower"),
    michaelPageSpeed: document.getElementById("michaelPageSpeed"),
    michaelPageLevel: document.getElementById("michaelPageLevel"),
    michaelPageProgress: document.getElementById("michaelPageBar"),
    michaelMorales: document.getElementById("michaelMorales"),
    michaelMoralesXp: document.getElementById("michaelMoralesXp"),
    michaelMoralesXpThresh: document.getElementById("michaelMoralesXpThresh"),
    michaelMoralesPower: document.getElementById("michaelMoralesPower"),
    michaelMoralesSpeed: document.getElementById("michaelMoralesSpeed"),
    michaelMoralesLevel: document.getElementById("michaelMoralesLevel"),
    michaelMoralesProgress: document.getElementById("michaelMoralesBar"),
    joaquinBuckley: document.getElementById("joaquinBuckley"),
    joaquinBuckleyXp: document.getElementById("joaquinBuckleyXp"),
    joaquinBuckleyXpThresh: document.getElementById("joaquinBuckleyXpThresh"),
    joaquinBuckleyPower: document.getElementById("joaquinBuckleyPower"),
    joaquinBuckleySpeed: document.getElementById("joaquinBuckleySpeed"),
    joaquinBuckleyLevel: document.getElementById("joaquinBuckleyLevel"),
    joaquinBuckleyProgress: document.getElementById("joaquinBuckleyBar"),
    hampaitaEl: document.getElementById("hampaita"),
    hampaitaPerSekuntiEl: document.getElementById("hampaitaPerSekunti"),
    trainersEl: document.getElementById("trainers"),
    shopItemsArr: Array.from(document.querySelectorAll(".shopItem")),
    avaaSatunnainenHintaEl: document.getElementById("avaaSatunnainenHinta"),
    rebirthForEl: document.getElementById("rebirthFor"),
    upgradeEl: document.getElementById("upgradeContainer"),
    versionEl: document.getElementById("version"),
    shopButton: document.getElementById("shop"),
    avaaSatunnainenButton: document.getElementById("avaaSatunnainen"),
    rebirthButton: document.getElementById("rebirth"),
    resetButton: document.getElementById("reset"),
    saveButton: document.getElementById("save"),
    loadButton: document.getElementById("load"),
    weightClassMenu: document.getElementById("weightContainer"),
    flyweightLevel: document.getElementById("flyweightLevel"),
    bantamweightLevel: document.getElementById("bantamweightLevel"),
    featherweightLevel: document.getElementById("featherweightLevel"),
    lightweightLevel: document.getElementById("lightweightLevel"),
    welterweightLevel: document.getElementById("welterweightLevel"),
};
function offlineGains(index) {
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
        while (flyweightRemainingXp >= game.flyweightXpThresh) {
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
        while (bantamweightRemainingXp >= game.bantamweightXpThresh) {
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
        while (featherweightRemainingXp >= game.featherweightXpThresh) {
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
        while (lightweightRemainingXp >= game.lightweightXpThresh) {
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
        while (welterweightRemainingXp >= game.welterweightXpThresh) {
            game.welterweightLevel++;
            welterweightRemainingXp -= game.welterweightXpThresh;
            game.welterweightXpThresh *= 1.3;
        }
        game.welterweightXp += welterweightRemainingXp;
    }
}
function flyweightInterval(intervalIndex) {
    if (intervalIndex !== undefined) {
        clearInterval(intervalIndex);
    }
    const progressBar = flyweightFighters.id[intervalIndex] + "Bar";
    const progressBarEl = document.getElementById(progressBar);
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
        }
        else {
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
function bantamweightInterval(index) {
    const progressBar = bantamweightFighters.id[index] + "Bar";
    const progressBarEl = document.getElementById(progressBar);
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
        }
        else {
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
function featherweightInterval(index) {
    const progressBar = featherweightFighters.id[index] + "Bar";
    const progressBarEl = document.getElementById(progressBar);
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
        }
        else {
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
function lightweightInterval(index) {
    const progressBar = lightweightFighters.id[index] + "Bar";
    const progressBarEl = document.getElementById(progressBar);
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
        }
        else {
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
function welterweightInterval(index) {
    const progressBar = welterweightFighters.id[index] + "Bar";
    const progressBarEl = document.getElementById(progressBar);
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
        }
        else {
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
        elements.versionEl.innerHTML = game.version;
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
                flyweightFighters.intervalIndex = flyweightFighters.numero[i];
                game.activeWeightclass = "flyweight";
                updateUi();
                saveGame();
            }
            else {
                clearInterval(flyweightFighters.interval[i]);
                clearInterval(flyweightFighters.intervalIndex);
                flyweightFighters.interval[i] = null;
                game.activeTrainers--;
                flyweightFighters.isActive[i] = false;
                game.flyweightActive = false;
                game.intervalId = -1;
                updateUi();
                saveGame();
            }
        });
    }
}
if (elements.montelJackson) {
    for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
        bantamweightFighters.divEl[i].addEventListener("click", () => {
            if (!bantamweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
                bantamweightInterval(i);
                game.activeTrainers++;
                game.activeFighter = bantamweightFighters.id[i];
                bantamweightFighters.intervalIndex = bantamweightFighters.numero[i];
                bantamweightFighters.isActive[i] = true;
                game.activeWeightclass = "bantamweight";
                updateUi();
                saveGame();
            }
            else {
                clearInterval(bantamweightFighters.interval[i]);
                clearInterval(bantamweightFighters.intervalIndex);
                bantamweightFighters.interval[i] = null;
                game.activeTrainers--;
                bantamweightFighters.isActive[i] = false;
                game.bantamweightActive = false;
                game.intervalId = -1;
                updateUi();
                saveGame();
            }
        });
    }
}
if (elements.edsonBarboza) {
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        featherweightFighters.divEl[i].addEventListener("click", () => {
            if (!featherweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
                featherweightInterval(i);
                game.activeTrainers++;
                game.activeFighter = featherweightFighters.id[i];
                featherweightFighters.intervalIndex = featherweightFighters.numero[i];
                featherweightFighters.isActive[i] = true;
                game.activeWeightclass = "featherweight";
                updateUi();
                saveGame();
            }
            else {
                clearInterval(featherweightFighters.interval[i]);
                clearInterval(featherweightFighters.intervalIndex);
                featherweightFighters.interval[i] = null;
                game.activeTrainers--;
                featherweightFighters.isActive[i] = false;
                game.featherweightActive = false;
                game.intervalId = -1;
                updateUi();
                saveGame();
            }
        });
    }
}
if (elements.paddyPimblett) {
    for (let i = 0; i < lightweightFighters.nimi.length; i++) {
        lightweightFighters.divEl[i].addEventListener("click", () => {
            if (!lightweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
                lightweightInterval(i);
                game.activeTrainers++;
                game.activeFighter = lightweightFighters.id[i];
                lightweightFighters.intervalIndex = lightweightFighters.numero[i];
                lightweightFighters.isActive[i] = true;
                game.activeWeightclass = "lightweight";
                updateUi();
                saveGame();
            }
            else {
                clearInterval(lightweightFighters.interval[i]);
                clearInterval(lightweightFighters.intervalIndex);
                lightweightFighters.interval[i] = null;
                game.activeTrainers--;
                lightweightFighters.isActive[i] = false;
                game.lightweightActive = false;
                game.intervalId = -1;
                updateUi();
                saveGame();
            }
        });
    }
}
if (elements.neilMagny) {
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        welterweightFighters.divEl[i].addEventListener("click", () => {
            if (!welterweightFighters.interval[i] && game.maxTrainers > game.activeTrainers) {
                welterweightInterval(i);
                game.activeTrainers++;
                game.activeFighter = welterweightFighters.id[i];
                welterweightFighters.intervalIndex = welterweightFighters.numero[i];
                welterweightFighters.isActive[i] = true;
                game.activeWeightclass = "welterweight";
                updateUi();
                saveGame();
            }
            else {
                clearInterval(welterweightFighters.interval[i]);
                clearInterval(welterweightFighters.intervalIndex);
                welterweightFighters.interval[i] = null;
                game.activeTrainers--;
                welterweightFighters.isActive[i] = false;
                game.welterweightActive = false;
                game.intervalId = -1;
                updateUi();
                saveGame();
            }
        });
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
};
window.addEventListener("beforeunload", () => {
    let lastPlayed = Date.now();
    game.lastPlayed = lastPlayed;
    //saveGame();
});
