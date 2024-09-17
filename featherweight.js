"use strict";
setInterval(() => {
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        const element = document.getElementById(featherweightFighters.id[i] + "Container");
        if (element) {
            if (game.featherweightLevel >= featherweightFighters.unlockReq[i]) {
                featherweightFighters.isUnlocked[i] = true;
                if (featherweightFighters.isUnlocked[i]) {
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
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.level[i] >= 10 && !featherweightFighters.mastery10Unlcked[i]) {
            game.globalSpeedMulti *= 1.1;
            featherweightFighters.mastery10Unlcked[i] = true;
            featherweightFighters.mastery10Done += 1;
        }
        if (featherweightFighters.level[i] >= 20 && !featherweightFighters.mastery20Unlcked[i]) {
            game.globalPowerMulti *= 1.1;
            featherweightFighters.mastery20Unlcked[i] = true;
            featherweightFighters.mastery20Done += 1;
        }
        if (featherweightFighters.level[i] >= 30 && !featherweightFighters.mastery30Unlcked[i]) {
            game.flyweightThreshMultiMulti *= 0.99;
            featherweightFighters.mastery30Unlcked[i] = true;
            featherweightFighters.mastery30Done += 1;
        }
        if (featherweightFighters.level[i] >= 40 && !featherweightFighters.mastery40Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery40Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 50 && !featherweightFighters.mastery50Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery50Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 60 && !featherweightFighters.mastery60Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery60Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 70 && !featherweightFighters.mastery70Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery70Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 80 && !featherweightFighters.mastery80Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery80Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 90 && !featherweightFighters.mastery90Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery90Unlcked[i] = true;
        }
        if (featherweightFighters.level[i] >= 100 && !featherweightFighters.mastery100Unlcked[i]) {
            featherweightFighters.step[i] *= 1.1;
            featherweightFighters.speed[i] *= 1.1;
            featherweightFighters.mastery100Unlcked[i] = true;
            document.getElementById(featherweightFighters.id[i] + "Container").style.backgroundImage = "url('./assets/belt.png')";
        }
    }
}, 1_000);
setInterval(() => {
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery10Done >= 5 && !featherweightFighters.mastery10UnlockedFor5) {
            game.flyweightSpeedMulti *= 1.5;
            featherweightFighters.mastery10UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery20Done >= 5 && !featherweightFighters.mastery20UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery20UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery30Done >= 5 && !featherweightFighters.mastery30UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery30UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery40Done >= 5 && !featherweightFighters.mastery40UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery40UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery50Done >= 5 && !featherweightFighters.mastery50UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery50UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery60Done >= 5 && !featherweightFighters.mastery60UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery60UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery70Done >= 5 && !featherweightFighters.mastery70UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery70UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery80Done >= 5 && !featherweightFighters.mastery80UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery80UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery90Done >= 5 && !featherweightFighters.mastery90UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery90UnlockedFor5 = true;
        }
    }
    for (let i = 0; i < featherweightFighters.nimi.length; i++) {
        if (featherweightFighters.mastery100Done >= 5 && !featherweightFighters.mastery100UnlockedFor5) {
            featherweightFighters.xpThresh[i] *= 0.9;
            featherweightFighters.mastery100UnlockedFor5 = true;
        }
    }
}, 1_000);
