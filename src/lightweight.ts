

setInterval(() => {
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    const element = document.getElementById(lightweightFighters.id[i] + "Container");
    if (element) {
      if (game.lightweightLevel >= lightweightFighters.unlockReq[i]) {
        lightweightFighters.isUnlocked[i] = true;
        if (lightweightFighters.isUnlocked[i]) {
          element.style.display = "flex";
        }
      } else {
        element.style.display = "none";
      }
    }
  }
  updateUi();
  document.getElementById("app")!.style.display = "block";
}, 1_000);

setInterval(() => {
  for (let i: number = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.level[i] >= 10 && !lightweightFighters.mastery10Unlcked[i]) {
      game.globalSpeedMulti *= 1.1;
      lightweightFighters.mastery10Unlcked[i] = true;
      lightweightFighters.mastery10Done += 1;
    }
    if (lightweightFighters.level[i] >= 20 && !lightweightFighters.mastery20Unlcked[i]) {
      game.globalPowerMulti *= 1.1;
      lightweightFighters.mastery20Unlcked[i] = true;
      lightweightFighters.mastery20Done += 1;
    }
    if (lightweightFighters.level[i] >= 30 && !lightweightFighters.mastery30Unlcked[i]) {
      game.flyweightThreshMultiMulti *= 0.99;
      lightweightFighters.mastery30Unlcked[i] = true;
      lightweightFighters.mastery30Done += 1;
    }
    if (lightweightFighters.level[i] >= 40 && !lightweightFighters.mastery40Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery40Unlcked[i] = true;
      lightweightFighters.mastery40Done += 1;
    }
    if (lightweightFighters.level[i] >= 50 && !lightweightFighters.mastery50Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery50Unlcked[i] = true;
      lightweightFighters.mastery50Done += 1;
    }
    if (lightweightFighters.level[i] >= 60 && !lightweightFighters.mastery60Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery60Unlcked[i] = true;
      lightweightFighters.mastery60Done += 1;
    }
    if (lightweightFighters.level[i] >= 70 && !lightweightFighters.mastery70Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery70Unlcked[i] = true;
      lightweightFighters.mastery70Done += 1;
    }
    if (lightweightFighters.level[i] >= 80 && !lightweightFighters.mastery80Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery80Unlcked[i] = true;
      lightweightFighters.mastery80Done += 1;
    }
    if (lightweightFighters.level[i] >= 90 && !lightweightFighters.mastery90Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery90Unlcked[i] = true;
      lightweightFighters.mastery90Done += 1;
    }
    if (lightweightFighters.level[i] >= 100 && !lightweightFighters.mastery100Unlcked[i]) {
      lightweightFighters.step[i] *= 1.1;
      lightweightFighters.speed[i] *= 1.1;
      lightweightFighters.mastery100Unlcked[i] = true;
      lightweightFighters.mastery100Done += 1;
      document.getElementById(lightweightFighters.id[i] + "Container")!.style.backgroundImage = "url('./assets/belt.png')";
    }
  }
}, 1_000);

setInterval(() => {
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery10Done >= 5 && !lightweightFighters.mastery10UnlockedFor5) {
      game.flyweightSpeedMulti *= 1.5;
      lightweightFighters.mastery10UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery20Done >= 5 && !lightweightFighters.mastery20UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery20UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery30Done >= 5 && !lightweightFighters.mastery30UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery30UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery40Done >= 5 && !lightweightFighters.mastery40UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery40UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery50Done >= 5 && !lightweightFighters.mastery50UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery50UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery60Done >= 5 && !lightweightFighters.mastery60UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery60UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery70Done >= 5 && !lightweightFighters.mastery70UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery70UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery80Done >= 5 && !lightweightFighters.mastery80UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery80UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery90Done >= 5 && !lightweightFighters.mastery90UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery90UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < lightweightFighters.nimi.length; i++) {
    if (lightweightFighters.mastery100Done >= 5 && !lightweightFighters.mastery100UnlockedFor5) {
      lightweightFighters.xpThresh[i] *= 0.9;
      lightweightFighters.mastery100UnlockedFor5 = true;
    }
  }
}, 1_000);