"use strict";
function renderUpgrades(i) {
    const upgradeContainer = document.getElementById("upgradeContainer");
    const upgrade = document.createElement("div");
    let upgradeName = document.createElement("p");
    let upgradeCost = document.createElement("p");
    if (upgradeContainer) {
        upgradeContainer.appendChild(upgrade);
    }
    upgrade.appendChild(upgradeName);
    upgrade.appendChild(upgradeCost);
    upgrade.classList.add("upgrade");
    upgradeName.classList.add("upgradeName");
    upgradeCost.classList.add("upgradeCost");
    upgradeName.textContent = `${flyweightUpgrades.globalSpeedName[i]} \u{1F9B6}`;
    upgradeCost.textContent = `${flyweightUpgrades.globalSpeedCost[i]} \u{1F9B7}`;
    upgrade.addEventListener("click", () => {
        if (game.hampaita >= flyweightUpgrades.globalSpeedCost[i]) {
            game.hampaita -= flyweightUpgrades.globalSpeedCost[i];
            game.globalSpeedMulti *= flyweightUpgrades.globalSpeedEffect[i];
            flyweightFighters.mastery10Unlcked[i] = true;
            flyweightFighters.mastery10Done += 1;
            flyweightUpgrades.globalSpeedIsPurchased[i] = true;
        }
    });
}
