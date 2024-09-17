"use strict";
setInterval(() => {
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        const element = document.getElementById(flyweightFighters.id[i] + "Container");
        if (element) {
            if (game.flyweightLevel >= flyweightFighters.unlockReq[i]) {
                flyweightFighters.isUnlocked[i] = true;
                if (flyweightFighters.isUnlocked[i]) {
                    element.style.display = "flex";
                }
            }
            else {
                element.style.display = "none";
            }
        }
    }
    updateUi();
    document.getElementById("app").style.display = "block";
}, 1_000);
setInterval(() => {
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.level[i] >= 10 && !flyweightFighters.mastery10Unlcked[i]) {
            flyweightUpgrades.globalSpeedIsUnlocked[i] = true;
            renderUpgrades(i);
        }
        if (flyweightFighters.level[i] >= 20 && !flyweightFighters.mastery20Unlcked[i]) {
            game.globalPowerMulti *= 1.1;
            flyweightFighters.mastery20Unlcked[i] = true;
            flyweightFighters.mastery20Done += 1;
        }
        if (flyweightFighters.level[i] >= 30 && !flyweightFighters.mastery30Unlcked[i]) {
            game.flyweightThreshMultiMulti *= 0.99;
            flyweightFighters.mastery30Unlcked[i] = true;
            flyweightFighters.mastery30Done += 1;
        }
        if (flyweightFighters.level[i] >= 40 && !flyweightFighters.mastery40Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery40Unlcked[i] = true;
            flyweightFighters.mastery40Done += 1;
        }
        if (flyweightFighters.level[i] >= 50 && !flyweightFighters.mastery50Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery50Unlcked[i] = true;
            flyweightFighters.mastery50Done += 1;
        }
        if (flyweightFighters.level[i] >= 60 && !flyweightFighters.mastery60Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery60Unlcked[i] = true;
            flyweightFighters.mastery60Done += 1;
        }
        if (flyweightFighters.level[i] >= 70 && !flyweightFighters.mastery70Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery70Unlcked[i] = true;
            flyweightFighters.mastery70Done += 1;
        }
        if (flyweightFighters.level[i] >= 80 && !flyweightFighters.mastery80Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery80Unlcked[i] = true;
            flyweightFighters.mastery80Done += 1;
        }
        if (flyweightFighters.level[i] >= 90 && !flyweightFighters.mastery90Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery90Unlcked[i] = true;
            flyweightFighters.mastery90Done += 1;
        }
        if (flyweightFighters.level[i] >= 100 && !flyweightFighters.mastery100Unlcked[i]) {
            flyweightFighters.step[i] *= 1.1;
            flyweightFighters.speed[i] *= 1.1;
            flyweightFighters.mastery100Unlcked[i] = true;
            flyweightFighters.mastery100Done += 1;
            document.getElementById(flyweightFighters.id[i] + "Container").style.backgroundImage = "url('./assets/belt.png')";
        }
    }
}, 1_000);
setInterval(() => {
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery10Done >= 5 && !flyweightFighters.mastery10UnlockedFor5) {
            flyweightFighters.speed[i];
            console.log("speed: ", flyweightFighters.speed[i]);
            game.flyweightSpeedMulti *= 1.5;
            console.log("5x level 10 flyweights");
            console.log("speed: ", flyweightFighters.speed[i]);
            flyweightFighters.speed[i];
            flyweightFighters.mastery10UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery20Done >= 5 && !flyweightFighters.mastery20UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery20UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery30Done >= 5 && !flyweightFighters.mastery30UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery30UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery40Done >= 5 && !flyweightFighters.mastery40UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery40UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery50Done >= 5 && !flyweightFighters.mastery50UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery50UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery60Done >= 5 && !flyweightFighters.mastery60UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery60UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery70Done >= 5 && !flyweightFighters.mastery70UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery70UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery80Done >= 5 && !flyweightFighters.mastery80UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery80UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery90Done >= 5 && !flyweightFighters.mastery90UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery90UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < flyweightFighters.nimi.length; i++) {
        if (flyweightFighters.mastery100Done >= 5 && !flyweightFighters.mastery100UnlockedFor5) {
            flyweightFighters.xpThresh[i] *= 0.9;
            flyweightFighters.mastery100UnlockedFor5 = true;
        }
    }
}, 1_000);
