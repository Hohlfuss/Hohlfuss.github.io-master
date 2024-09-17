/*type Ottelijat = {
  nimi: string[];
  level: number[];
  hinta: number[];
  totalPower: number[];
  power: number[];
  isUnlocked: boolean[];
  isActive: boolean[];
  mastery: number[];
  progress: number[];
  interval: number[] | undefined[] | NodeJS.Timeout[] | null[];
  xp: number[];
  xpThresh: number[];
  rank: number[];
  img: string[];
  id: string[];
  eiPiirretty: boolean[];
  step: number[];
  speed: number[];
  divEl: HTMLDivElement[]
  stats: {
    wins: number[];
    losses: number[];
    nc: number[];
    winsByKnockout: number[];
    winsBySubmission: number[];
    firstRoundFinishes: number[];
  },
  tags: {
    pelle: boolean[];
    niceGuy: boolean[];
    stan: boolean[];
    afrikanMafia: boolean[];
    lookingAss: boolean[];
    chad: boolean[];
  }
}*/

/*let ottelijat: Ottelijat = {
  flyweight: {
    nimi: [
      "Cody Durden",
    ],
    level: [
      0,
    ],
    hinta: [
      10,
    ],
    totalPower: [
      0,
    ],
    power: [
      1,
    ],
    isUnlocked: [
      true,
    ],
    isActive: [
      false,
    ],
    mastery: [
      0,
    ],
    progress: [
      0,
    ],
    interval: [
      null,
    ],
    xp: [
      0,
    ],
    xpThresh: [
      5,
    ],
    rank: [
      0,
    ],
    img: [
      "../assets/codyDurden.png",
    ],
    id: [
      "codyDurden",
    ],
    eiPiirretty: [
      true,
    ],
    step: [
      0.1,
    ],
    speed: [
      1,
    ],
    divEl: [
      document.getElementById("codyDurden") as HTMLDivElement,
    ],
    tags: {
      jenkki: [
        true,
      ],
      pelle: [
        false,
      ],
      niceGuy: [
        false,
      ],
      stan: [
        false,
      ],
      afrikanMafia: [
        false,
      ],
      lookingAss: [
        false,
      ],
      chad: [
        false,
      ]
    }
  },
  nimi: [

  "Colby Covington",
  "Kamaru Usman",
  "Shavkat Rakhmonov",
  "Sean O'malley",
  "Jon Jones",
  "Alexander Volkanovski",
  "Alex Pereira",
  "Islam Makhachev",
  "Max Holloway",
  "Tom Aspinall",
  "Israel Adesanya",
  "Charles Oliveira"
  ],
  level: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  hinta: [
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10
  ],
  totalPower: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  power: [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
  ],
  isUnlocked: [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
  ],
  isActive: [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
  ],
  mastery: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  progress: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  interval: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  xp: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  xpThresh: [
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5
  ],
  rank: [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
  ],
  img: [
  "./assets/colbyCovington.png",
  "./assets/kamaruUsman.png",
  "./assets/shavkatRakhmonov.png",
  "./assets/seanOmalley.png",
  "./assets/jonJones.png",
  "./assets/alexanderVolkanovski.png",
  "./assets/alexPereira.png",
  "./assets/islamMakhachev.png",
  "./assets/maxHolloway.png",
  "./assets/tomAspinall.png",
  "./assets/israelAdesanya.png",
  "./assets/charlesOliveira.png"
  ],
  id: [
  "colbyCovington",
  "kamaruUsman",
  "shavkatRakhmonov",
  "seanOmalley",
  "jonJones",
  "alexanderVolkanovski",
  "alexPereira",
  "islamMakhachev",
  "maxHolloway",
  "tomAspinall",
  "israelAdesanya",
  "charlesOliveira"
  ],
  eiPiirretty: [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
  ],
  step: [
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1,
  0.1
  ],
  speed: [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ],
  divEl: [
    document.getElementById("colbyCovington") as HTMLDivElement,
    document.getElementById("kamaruUsman") as HTMLDivElement,
    document.getElementById("shavkatRakhmonov") as HTMLDivElement,
    document.getElementById("seanOmalley") as HTMLDivElement,
    document.getElementById("jonJones") as HTMLDivElement,
    document.getElementById("alexanderVolkanovski") as HTMLDivElement,
    document.getElementById("alexPereira") as HTMLDivElement,
    document.getElementById("islamMakhachev") as HTMLDivElement,
    document.getElementById("maxHolloway") as HTMLDivElement,
    document.getElementById("tomAspinall") as HTMLDivElement,
    document.getElementById("israelAdesanya") as HTMLDivElement,
    document.getElementById("charlesOliveira") as HTMLDivElement
  ],
  stats: {
    wins: [
      17,
      20,
      18,
      18,
      27,
      26,
      11,
      26,
      26,
      14,
      24,
      34
    ],
    losses: [
      4,
      4,
      0,
      1,
      1,
      4,
      2,
      1,
      7,
      3,
      3,
      10,
    ],
    nc: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    winsByKnockout: [
      4,
      9,
      8,
      12,
      10,
      13,
      9,
      14,
      12,
      11,
      16,
      10
    ],
    winsBySubmission: [
      4,
      1,
      10,
      0,
      0,
      3,
      0,
      5,
      2,
      3,
      0,
      21
    ],
    firstRoundFinishes: [
      3,
      3,
      9,
      9,
      7,
      7,
      4,
      12,
      0,
      13,
      6,
      0
    ]
  },
  tags: {
    pelle: [
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ],
    niceGuy: [
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true
    ],
    stan: [
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false
    ],
    afrikanMafia: [
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ],
    lookingAss: [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false
    ],
    chad: [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
      false
    ]
  }
}*/

/*function offlineGains() {
	const now = Date.now();
	const offlineTime = now - game.lastPlayed;
	//let reducedProductionRate = 0.0008;
	const offlineProgress = offlineTime// * reducedProductionRate;
	const offlineHampaita = game.hampaitaPerSekunti * offlineProgress / 2000;
  
  alert(`Offline tienaus ${Math.round(offlineHampaita).toLocaleString()} hampaita!`);
  game.hampaita += offlineHampaita;
  document.getElementById("hampaita")!.innerHTML = Math.round(game.hampaita).toLocaleString();
}*/

/*function lisääTrainereita() {
  if (game.hampaita >= game.lisääTrainereitaHinta) {
    game.hampaita -= game.lisääTrainereitaHinta;
    game.maxTrainers += 1;
    game.lisääTrainereitaHinta *= 9;
    //game.avaaSatunnainenHinta *= 1.1;
    //game.lisääTrainereitaHinta *= 1.1;
    saveGame();
  }
}*/

/*function renderUpgrades() {
  document.getElementById("upgradeContainer")!.innerHTML = "";
  for (let i = 0; i < upgrades.nimi.length; i++) {
    if (!upgrades.ostettu[i]) {
      if (upgrades.tag[i] == "pelle" && game.pelleCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "niceGuy" && game.niceGuyCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "stanit" && game.stan >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "afrikanMafia" && game.afrikanMafiaCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "lookingAss" && game.lookingAssCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "chad" && game.chadCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
    }
  }
}*/

/*
if (elements.colbyCovington) {
  elements.colbyCovington!.addEventListener("click", (() => {
    if (!ottelijat.interval[0]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[0] = true;
        ottelijat.interval[0] = setInterval(() => {
          if (ottelijat.progress[0] >= 100) {
            ottelijat.progress[0] = 0;
            ottelijat.xp[0] += 1;
            updateUi();
            if (ottelijat.xp[0] >= ottelijat.xpThresh[0]) {
              ottelijat.xp[0] = 0;
              ottelijat.xpThresh[0] *= 1.2;
              ottelijat.level[0] += 1;
              game.pelleCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[0];
            updateUi();
            } else {
              ottelijat.progress[0] += ottelijat.step[0]
              document.getElementById('colbyCovingtonBar')!.style.width = `${ottelijat.progress[0]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[0]);
        ottelijat.interval[0] = null;
        game.activeTrainers--;
        ottelijat.isActive[0] = false;
        updateUi();
      }
  }));
}

if (elements.kamaruUsman) {
  elements.kamaruUsman!.addEventListener("click", (() => {
    if (!ottelijat.interval[1]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[1] = true;
        ottelijat.interval[1] = setInterval(() => {
          if (ottelijat.progress[1] >= 100) {
            ottelijat.progress[1] = 0;
            ottelijat.xp[1] += 1;
            updateUi();
            if (ottelijat.xp[1] >= ottelijat.xpThresh[1]) {
              ottelijat.xp[1] = 0;
              ottelijat.xpThresh[1] *= 1.2;
              ottelijat.level[1] += 1;
              game.niceGuyCount++;
              game.afrikanMafiaCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[0];
            updateUi();
            } else {
              ottelijat.progress[1] += ottelijat.step[1]
              document.getElementById('kamaruUsmanBar')!.style.width = `${ottelijat.progress[1]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[1]);
        ottelijat.interval[1] = null;
        game.activeTrainers--;
        ottelijat.isActive[1] = false;
        updateUi();
      }
  }));
}

if (elements.shavkatRakhmonov) {
  elements.shavkatRakhmonov!.addEventListener("click", (() => {
    if (!ottelijat.interval[2]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[2] = true;
        ottelijat.interval[2] = setInterval(() => {
          if (ottelijat.progress[2] >= 100) {
            ottelijat.progress[2] = 0;
            ottelijat.xp[2] += 1;
            updateUi();
            if (ottelijat.xp[2] >= ottelijat.xpThresh[2]) {
              ottelijat.xp[2] = 0;
              ottelijat.xpThresh[2] *= 1.2;
              ottelijat.level[2] += 1;
              game.stan++;
              game.chadCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[0];
            updateUi();
            } else {
              ottelijat.progress[2] += ottelijat.step[2]
              document.getElementById('shavkatRakhmonovBar')!.style.width = `${ottelijat.progress[2]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[2]);
        ottelijat.interval[2] = null;
        game.activeTrainers--;
        ottelijat.isActive[2] = false;
        updateUi();
      }
  }));
}

if (elements.seanOmalley) {
  elements.seanOmalley!.addEventListener("click", (() => {
    if (!ottelijat.interval[3]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[3] = true;
        ottelijat.interval[3] = setInterval(() => {
          if (ottelijat.progress[3] >= 100) {
            ottelijat.progress[3] = 0;
            ottelijat.xp[3] += 1;
            updateUi();
            if (ottelijat.xp[3] >= ottelijat.xpThresh[3]) {
              ottelijat.xp[3] = 0;
              ottelijat.xpThresh[3] *= 1.2;
              ottelijat.level[3] += 1;
              game.pelleCount++;
              game.lookingAssCount++;
              game.championCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[3];
            updateUi();
            } else {
              ottelijat.progress[3] += ottelijat.step[3]
              document.getElementById('seanOmalleyBar')!.style.width = `${ottelijat.progress[3]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[3]);
        ottelijat.interval[3] = null;
        game.activeTrainers--;
        ottelijat.isActive[3] = false;
        updateUi();
      }
  }));
}

if (elements.jonJones) {
  elements.jonJones!.addEventListener("click", (() => {
    if (!ottelijat.interval[4]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[4] = true;
        ottelijat.interval[4] = setInterval(() => {
          if (ottelijat.progress[4] >= 100) {
            ottelijat.progress[4] = 0;
            ottelijat.xp[4] += 1;
            updateUi();
            if (ottelijat.xp[4] >= ottelijat.xpThresh[4]) {
              ottelijat.xp[4] = 0;
              ottelijat.xpThresh[4] *= 1.2;
              ottelijat.level[4] += 1;
              game.pelleCount++;
              game.chadCount++;
              game.championCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[4];
            updateUi();
            } else {
              ottelijat.progress[4] += ottelijat.step[4]
              document.getElementById('jonJonesBar')!.style.width = `${ottelijat.progress[4]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[4]);
        ottelijat.interval[4] = null;
        game.activeTrainers--;
        ottelijat.isActive[4] = false;
        updateUi();
      }
  }));
}

if (elements.alexanderVolkanovski) {
  elements.alexanderVolkanovski!.addEventListener("click", (() => {
    if (!ottelijat.interval[5]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[5] = true;
        ottelijat.interval[5] = setInterval(() => {
          if (ottelijat.progress[5] >= 100) {
            ottelijat.progress[5] = 0;
            ottelijat.xp[5] += 1;
            updateUi();
            if (ottelijat.xp[5] >= ottelijat.xpThresh[5]) {
              ottelijat.xp[5] = 0;
              ottelijat.xpThresh[5] *= 1.2;
              ottelijat.level[5] += 1;
              game.niceGuyCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[5];
            updateUi();
            } else {
              ottelijat.progress[5] += ottelijat.step[5]
              document.getElementById('alexanderVolkanovskiBar')!.style.width = `${ottelijat.progress[5]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[5]);
        ottelijat.interval[5] = null;
        game.activeTrainers--;
        ottelijat.isActive[5] = false;
        updateUi();
      }
  }));
}

if (elements.alexPereira) {
  elements.alexPereira!.addEventListener("click", (() => {
    if (!ottelijat.interval[6]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[6] = true;
        ottelijat.interval[6] = setInterval(() => {
          if (ottelijat.progress[6] >= 100) {
            ottelijat.progress[6] = 0;
            ottelijat.xp[6] += 1;
            updateUi();
            if (ottelijat.xp[6] >= ottelijat.xpThresh[6]) {
              ottelijat.xp[6] = 0;
              ottelijat.xpThresh[6] *= 1.2;
              ottelijat.level[6] += 1;
              game.chadCount++;
              game.championCount += 2;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[6];
            updateUi();
            } else {
              ottelijat.progress[6] += ottelijat.step[6]
              document.getElementById('alexPereiraBar')!.style.width = `${ottelijat.progress[6]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[6]);
        ottelijat.interval[6] = null;
        game.activeTrainers--;
        ottelijat.isActive[6] = false;
        updateUi();
      }
  }));
}

if (elements.islamMakhachev) {
  elements.islamMakhachev!.addEventListener("click", (() => {
    if (!ottelijat.interval[7]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[7] = true;
        ottelijat.interval[7] = setInterval(() => {
          if (ottelijat.progress[7] >= 100) {
            ottelijat.progress[7] = 0;
            ottelijat.xp[7] += 1;
            updateUi();
            if (ottelijat.xp[7] >= ottelijat.xpThresh[7]) {
              ottelijat.xp[7] = 0;
              ottelijat.xpThresh[7] *= 1.2;
              ottelijat.level[7] += 1;
              game.stan++;
              game.lookingAssCount++;
              game.championCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[7];
            updateUi();
            } else {
              ottelijat.progress[7] += ottelijat.step[7]
              document.getElementById('islamMakhachevBar')!.style.width = `${ottelijat.progress[7]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[7]);
        ottelijat.interval[7] = null;
        game.activeTrainers--;
        ottelijat.isActive[7] = false;
        updateUi();
      }
  }));
}

if (elements.maxHolloway) {
  elements.maxHolloway!.addEventListener("click", (() => {
    if (!ottelijat.interval[8]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[8] = true;
        ottelijat.interval[8] = setInterval(() => {
          if (ottelijat.progress[8] >= 100) {
            ottelijat.progress[8] = 0;
            ottelijat.xp[8] += 1;
            updateUi();
            if (ottelijat.xp[8] >= ottelijat.xpThresh[8]) {
              ottelijat.xp[8] = 0;
              ottelijat.xpThresh[8] *= 1.2;
              ottelijat.level[8] += 1;
              game.chadCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[8];
            updateUi();
            } else {
              ottelijat.progress[8] += ottelijat.step[8]
              document.getElementById('maxHollowayBar')!.style.width = `${ottelijat.progress[8]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[8]);
        ottelijat.interval[8] = null;
        game.activeTrainers--;
        ottelijat.isActive[8] = false;
      }
  }));
}

if (elements.tomAspinall) {
  elements.tomAspinall!.addEventListener("click", (() => {
    if (!ottelijat.interval[9]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[9] = true;
        ottelijat.interval[9] = setInterval(() => {
          if (ottelijat.progress[9] >= 100) {
            ottelijat.progress[9] = 0;
            ottelijat.xp[9] += 1;
            updateUi();
            if (ottelijat.xp[9] >= ottelijat.xpThresh[9]) {
              ottelijat.xp[9] = 0;
              ottelijat.xpThresh[9] *= 1.2;
              ottelijat.level[9] += 1;
              game.niceGuyCount++;
              game.championCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[9];
            updateUi();
            } else {
              ottelijat.progress[9] += ottelijat.step[9]
              document.getElementById('tomAspinallBar')!.style.width = `${ottelijat.progress[9]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[9]);
        ottelijat.interval[9] = null;
        game.activeTrainers--;
        ottelijat.isActive[9] = false;
        updateUi();
      }
  }));
}

if (elements.israelAdesanya) {
  elements.israelAdesanya!.addEventListener("click", (() => {
    if (!ottelijat.interval[10]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[10] = true;
        ottelijat.interval[10] = setInterval(() => {
          if (ottelijat.progress[10] >= 100) {
            ottelijat.progress[10] = 0;
            ottelijat.xp[10] += 1;
            updateUi();
            if (ottelijat.xp[10] >= ottelijat.xpThresh[10]) {
              ottelijat.xp[10] = 0;
              ottelijat.xpThresh[10] *= 1.2;
              ottelijat.level[10] += 1;
              game.pelleCount++;
              game.afrikanMafiaCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[10];
            updateUi();
            } else {
              ottelijat.progress[10] += ottelijat.step[10]
              document.getElementById('israelAdesanyaBar')!.style.width = `${ottelijat.progress[10]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[10]);
        ottelijat.interval[10] = null;
        game.activeTrainers--;
        ottelijat.isActive[10] = false;
        updateUi();
      }
  }));
}

if (elements.charlesOliveira) {
  elements.charlesOliveira!.addEventListener("click", (() => {
    if (!ottelijat.interval[11]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[11] = true;
        ottelijat.interval[11] = setInterval(() => {
          if (ottelijat.progress[11] >= 100) {
            ottelijat.progress[11] = 0;
            ottelijat.xp[11] += 1;
            updateUi();
            if (ottelijat.xp[11] >= ottelijat.xpThresh[11]) {
              ottelijat.xp[11] = 0;
              ottelijat.xpThresh[11] *= 1.2;
              ottelijat.level[11] += 1;
              game.niceGuyCount++;
              game.totalCount++;
              renderUpgrades();
              };
            game.hampaita += ottelijat.power[11];
            updateUi();
            } else {
              ottelijat.progress[11] += ottelijat.step[11]
              document.getElementById('charlesOliveiraBar')!.style.width = `${ottelijat.progress[11]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[11]);
        ottelijat.interval[11] = null;
        game.activeTrainers--;
        ottelijat.isActive[11] = false;
        updateUi();
      }
  }));
}

/*elements.loadButton!.addEventListener("click", (() => {
  loadGame();
}));*/

/*elements.lisääTrainereitaButton!.addEventListener("click", (() => {
  lisääTrainereita();
}));*/

/*setInterval(() => {
    let totalPower = 0;
    for (let i = 0; i < ottelijat.isUnlocked.length; i++) {
        const element = document.getElementById(ottelijat.id[i] + "Container");
        if (element) {
            if (ottelijat.isUnlocked[i] === true) {
                element.style.display = "block";
                if (ottelijat.isActive[i] === true) {
                    totalPower +=
                        (ottelijat.power[i] * ottelijat.speed[i]) / 10;
                }
            } else {
                element.style.display = "none";
            }
        }
    }
    game.hampaitaPerSekunti = totalPower;
    updateUi();
}, 100);*/

/*
function osta(index: number) {
  if (!upgrades.ostettu[index] && upgrades.tyyppi[index] === "nopeus") {
      if (game.hampaita >= upgrades.hinta[index]) {
          game.hampaita -= upgrades.hinta[index];
          upgrades.fighters[index].forEach((fighterIndex) => {
              flyweightFighters.step[fighterIndex] *= upgrades.bonus[index];
              flyweightFighters.speed[fighterIndex] *= upgrades.bonus[index];
          });
          upgrades.ostettu[index] = true;
          renderUpgrades();
      }
  }
  if (!upgrades.ostettu[index] && upgrades.tyyppi[index] === "power") {
      if (game.hampaita >= upgrades.hinta[index]) {
          game.hampaita -= upgrades.hinta[index];
          upgrades.fighters[index].forEach((fighterIndex) => {
              flyweightFighters.power[fighterIndex] *= upgrades.bonus[index];
          });
          upgrades.ostettu[index] = true;
          renderUpgrades();
      }
  }
}

function renderUpgrades() {
if (!elements.upgradeEl) return;

elements.upgradeEl.innerHTML = "";

for (let i = 0; i < upgrades.nimi.length; i++) {
if (upgrades.ostettu[i]) continue;

if (
  (upgrades.tag[i] === "pelle" &&
      game.pelleCount >= upgrades.vaatimus[i]) ||
  (upgrades.tag[i] === "niceGuy" &&
      game.niceGuyCount >= upgrades.vaatimus[i]) ||
  (upgrades.tag[i] === "stanit" &&
      game.stanCount >= upgrades.vaatimus[i]) ||
  (upgrades.tag[i] === "afrikanMafia" &&
      game.afrikanMafiaCount >= upgrades.vaatimus[i]) ||
  (upgrades.tag[i] === "lookingAss" &&
      game.lookingAssCount >= upgrades.vaatimus[i]) ||
  (upgrades.tag[i] === "chad" &&
      game.chadCount >= upgrades.vaatimus[i])
) {
  const upgradeDiv = document.createElement("div");
  upgradeDiv.classList.add("upgrade-container");

  const img = document.createElement("img");
  img.setAttribute("draggable", "false");
  img.src = `./assets/${upgrades.kuva[i]}`;
  img.alt = upgrades.nimi[i];

  const titleDiv = document.createElement("div");
  titleDiv.className = "upgrade-title";

  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = upgrades.kuvaus[i];

  const priceSpan = document.createElement("span");
  priceSpan.textContent = `(${upgrades.hinta[i]} hammasta)`;

  titleDiv.appendChild(descriptionSpan);
  titleDiv.appendChild(priceSpan);

  upgradeDiv.appendChild(img);
  upgradeDiv.appendChild(titleDiv);

  titleDiv.addEventListener("click", () => osta(i));

  elements.upgradeEl.appendChild(upgradeDiv);
  }
}
}

function avaaSatunnainen() {
const randomIndex = Math.floor(Math.random() * flyweightFighters.nimi.length);
if (
  !flyweightFighters.isUnlocked[randomIndex] &&
  game.hampaita >= game.avaaSatunnainenHinta
) {
  flyweightFighters.isUnlocked[randomIndex] = true;
  game.hampaita -= game.avaaSatunnainenHinta;
  game.avaaSatunnainenHinta *= 5;
    saveGame();
} else if (game.hampaita < game.avaaSatunnainenHinta) {
    return;
} else {
  avaaSatunnainen();
  saveGame();
}
}

function rebirth() {
game.verta = game.hampaita * game.veriKerroin;
game.rebirths++;
game.hampaita = 1;
game.hampaitaPerSekunti = 0;
game.maxTrainers = 1;
game.activeTrainers = 0;
game.freeTrainers = 1;
game.avaaSatunnainenHinta = 1;
game.afrikanMafiaCount = 0;
game.stanCount = 0;
game.lookingAssCount = 0;
game.niceGuyCount = 0;
game.pelleCount = 0;
game.chadCount = 0;
game.totalCount = 0;
for (let i = 0; i < flyweightFighters.isUnlocked.length; i++) {
  flyweightFighters.isUnlocked[i] = false;
  flyweightFighters.isActive[i] = false;
  flyweightFighters.power[i] = 1;
  flyweightFighters.speed[i] = 1;
  flyweightFighters.level[i] = 0;
  flyweightFighters.progress[i] = 0;
  flyweightFighters.step[i] = 0.1;
  flyweightFighters.xp[i] = 0;
  flyweightFighters.xpThresh[i] = 5;
  flyweightFighters.interval[i] = null;
}
updateUi();
saveGame();
}
*/

