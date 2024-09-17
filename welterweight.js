"use strict";
setInterval(() => {
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        const element = document.getElementById(welterweightFighters.id[i] + "Container");
        if (element) {
            if (game.welterweightLevel >= welterweightFighters.unlockReq[i]) {
                welterweightFighters.isUnlocked[i] = true;
                if (welterweightFighters.isUnlocked[i]) {
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
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.level[i] >= 10 && !welterweightFighters.mastery10Unlcked[i]) {
            game.globalSpeedMulti *= 1.1;
            welterweightFighters.mastery10Unlcked[i] = true;
            welterweightFighters.mastery10Done += 1;
        }
        if (welterweightFighters.level[i] >= 20 && !welterweightFighters.mastery20Unlcked[i]) {
            game.globalPowerMulti *= 1.1;
            welterweightFighters.mastery20Unlcked[i] = true;
            welterweightFighters.mastery20Done += 1;
        }
        if (welterweightFighters.level[i] >= 30 && !welterweightFighters.mastery30Unlcked[i]) {
            game.welterweightThreshMultiMulti *= 0.99;
            welterweightFighters.mastery30Unlcked[i] = true;
            welterweightFighters.mastery30Done += 1;
        }
        if (welterweightFighters.level[i] >= 40 && !welterweightFighters.mastery40Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery40Unlcked[i] = true;
            welterweightFighters.mastery40Done += 1;
        }
        if (welterweightFighters.level[i] >= 50 && !welterweightFighters.mastery50Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery50Unlcked[i] = true;
            welterweightFighters.mastery50Done += 1;
        }
        if (welterweightFighters.level[i] >= 60 && !welterweightFighters.mastery60Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery60Unlcked[i] = true;
            welterweightFighters.mastery60Done += 1;
        }
        if (welterweightFighters.level[i] >= 70 && !welterweightFighters.mastery70Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery70Unlcked[i] = true;
            welterweightFighters.mastery70Done += 1;
        }
        if (welterweightFighters.level[i] >= 80 && !welterweightFighters.mastery80Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery80Unlcked[i] = true;
            welterweightFighters.mastery80Done += 1;
        }
        if (welterweightFighters.level[i] >= 90 && !welterweightFighters.mastery90Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery90Unlcked[i] = true;
            welterweightFighters.mastery90Done += 1;
        }
        if (welterweightFighters.level[i] >= 100 && !welterweightFighters.mastery100Unlcked[i]) {
            welterweightFighters.step[i] *= 1.1;
            welterweightFighters.speed[i] *= 1.1;
            welterweightFighters.mastery100Unlcked[i] = true;
            welterweightFighters.mastery100Done += 1;
            document.getElementById(welterweightFighters.id[i] + "Container").style.backgroundImage = "url('./assets/belt.png')";
        }
    }
}, 1_000);
setInterval(() => {
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery10Done >= 5 && !welterweightFighters.mastery10UnlockedFor5) {
            welterweightFighters.speed[i];
            console.log("speed: ", welterweightFighters.speed[i]);
            game.welterweightSpeedMulti *= 1.5;
            console.log("5x level 10 welterweights");
            console.log("speed: ", welterweightFighters.speed[i]);
            welterweightFighters.speed[i];
            welterweightFighters.mastery10UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery20Done >= 5 && !welterweightFighters.mastery20UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery20UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery30Done >= 5 && !welterweightFighters.mastery30UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery30UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery40Done >= 5 && !welterweightFighters.mastery40UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery40UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery50Done >= 5 && !welterweightFighters.mastery50UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery50UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery60Done >= 5 && !welterweightFighters.mastery60UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery60UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery70Done >= 5 && !welterweightFighters.mastery70UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery70UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery80Done >= 5 && !welterweightFighters.mastery80UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery80UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery90Done >= 5 && !welterweightFighters.mastery90UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery90UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < welterweightFighters.nimi.length; i++) {
        if (welterweightFighters.mastery100Done >= 5 && !welterweightFighters.mastery100UnlockedFor5) {
            welterweightFighters.xpThresh[i] *= 0.9;
            welterweightFighters.mastery100UnlockedFor5 = true;
        }
    }
}, 1_000);
