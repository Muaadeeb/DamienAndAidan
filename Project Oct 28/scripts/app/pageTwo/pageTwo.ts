let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);

function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.luck = luck;
    this.gamble = gamble;
    this.hack = hack;
    this.health = health;
    this.equipWeapon = (weapon) => {
        this.equipWeapon = weapon;
    }
    this.equipArmor = (armor) => {
        this.equipArmor = armor;
    }

}


let adjustCharacterCreationPoints = () => {
    let totalCCP = totalCharacterCreationPointsSpent();

    document.getElementById("pointsSpent").innerHTML = totalCCP.toString();

    //if (totalCCP > 100) {
    //    alert("You have over spent.  Please adjust your point spend.");
    //}
}

let totalCharacterCreationPointsSpent = () => {
    let ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
    let ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
    let ccp3 = parseInt(document.getElementById("luck")["value"]);
    let ccp4 = parseInt(document.getElementById("gamble")["value"]);
    let ccp5 = parseInt(document.getElementById("hack")["value"]);
    let ccp6 = parseInt(document.getElementById("health")["value"]);

    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
}

let captureBountyHunterData = () => {
    let firstName = document.getElementById("firstName")["value"];
    let lastName = document.getElementById("lastName")["value"];
    let age = parseInt(document.getElementById("age")["value"]);
    let combatOffense = parseInt(document.getElementById("combatOffense")["value"]);
    let combatDefense = parseInt(document.getElementById("combatDefense")["value"]);
    let luck = parseInt(document.getElementById("luck")["value"]);
    let gamble = parseInt(document.getElementById("gamble")["value"]);
    let hack = parseInt(document.getElementById("hack")["value"]);
    let health = parseInt(document.getElementById("health")["value"]);

    let bountyHunter = new BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health);

    sessionStorage.setItem("bountyHunter", JSON.stringify(bountyHunter));

    window.location.href = "bhPurchaseItems.html";
}
