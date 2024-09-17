

setInterval(() => {
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    const element = document.getElementById(bantamweightFighters.id[i] + "Container");
    if (element) {
      if (game.bantamweightLevel >= bantamweightFighters.unlockReq[i]) {
        bantamweightFighters.isUnlocked[i] = true;
        if (bantamweightFighters.isUnlocked[i]) {
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
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.level[i] >= 10 && !bantamweightFighters.mastery10Unlcked[i]) {
      game.globalSpeedMulti *= 1.1;
      bantamweightFighters.mastery10Unlcked[i] = true;
      bantamweightFighters.mastery10Done += 1;
    }
    if (bantamweightFighters.level[i] >= 20 && !bantamweightFighters.mastery20Unlcked[i]) {
      game.globalPowerMulti *= 1.1;
      bantamweightFighters.mastery20Unlcked[i] = true;
      bantamweightFighters.mastery20Done += 1;
    }
    if (bantamweightFighters.level[i] >= 30 && !bantamweightFighters.mastery30Unlcked[i]) {
      game.flyweightThreshMultiMulti *= 0.99;
      bantamweightFighters.mastery30Unlcked[i] = true;
      bantamweightFighters.mastery30Done += 1;
    }
    if (bantamweightFighters.level[i] >= 40 && !bantamweightFighters.mastery40Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery40Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 50 && !bantamweightFighters.mastery50Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery50Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 60 && !bantamweightFighters.mastery60Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery60Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 70 && !bantamweightFighters.mastery70Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery70Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 80 && !bantamweightFighters.mastery80Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery80Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 90 && !bantamweightFighters.mastery90Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery90Unlcked[i] = true;
    }
    if (bantamweightFighters.level[i] >= 100 && !bantamweightFighters.mastery100Unlcked[i]) {
      bantamweightFighters.step[i] *= 1.1;
      bantamweightFighters.speed[i] *= 1.1;
      bantamweightFighters.mastery100Unlcked[i] = true;
      document.getElementById(bantamweightFighters.id[i] + "Container")!.style.backgroundImage = "url('./assets/belt.png')";
    }
  }
}, 1_000);

setInterval(() => {
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery10Done >= 5 && !bantamweightFighters.mastery10UnlockedFor5) {
      game.flyweightSpeedMulti *= 1.5;
      bantamweightFighters.mastery10UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery20Done >= 5 && !bantamweightFighters.mastery20UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery20UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery30Done >= 5 && !bantamweightFighters.mastery30UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery30UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery40Done >= 5 && !bantamweightFighters.mastery40UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery40UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery50Done >= 5 && !bantamweightFighters.mastery50UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery50UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery60Done >= 5 && !bantamweightFighters.mastery60UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery60UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery70Done >= 5 && !bantamweightFighters.mastery70UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery70UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery80Done >= 5 && !bantamweightFighters.mastery80UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery80UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery90Done >= 5 && !bantamweightFighters.mastery90UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery90UnlockedFor5 = true;
    }
  }
  for (let i = 0; i < bantamweightFighters.nimi.length; i++) {
    if (bantamweightFighters.mastery100Done >= 5 && !bantamweightFighters.mastery100UnlockedFor5) {
      bantamweightFighters.xpThresh[i] *= 0.9;
      bantamweightFighters.mastery100UnlockedFor5 = true;
    }
  }
}, 1_000);