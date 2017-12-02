var bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health) {
    var _this = this;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.luck = luck;
    this.gamble = gamble;
    this.hack = hack;
    this.health = health;
    this.equipWeapon = function (weapon) {
        _this.equipWeapon = weapon;
    };
    this.equipArmor = function (armor) {
        _this.equipArmor = armor;
    };
}
var adjustCharacterCreationPoints = function () {
    var totalCCP = totalCharacterCreationPointsSpent();
    document.getElementById("pointsSpent").innerHTML = totalCCP.toString();
    //if (totalCCP > 100) {
    //    alert("You have over spent.  Please adjust your point spend.");
    //}
};
var totalCharacterCreationPointsSpent = function () {
    var ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
    var ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
    var ccp3 = parseInt(document.getElementById("luck")["value"]);
    var ccp4 = parseInt(document.getElementById("gamble")["value"]);
    var ccp5 = parseInt(document.getElementById("hack")["value"]);
    var ccp6 = parseInt(document.getElementById("health")["value"]);
    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
};
var captureBountyHunterData = function () {
    var firstName = document.getElementById("firstName")["value"];
    var lastName = document.getElementById("lastName")["value"];
    var age = parseInt(document.getElementById("age")["value"]);
    var combatOffense = parseInt(document.getElementById("combatOffense")["value"]);
    var combatDefense = parseInt(document.getElementById("combatDefense")["value"]);
    var luck = parseInt(document.getElementById("luck")["value"]);
    var gamble = parseInt(document.getElementById("gamble")["value"]);
    var hack = parseInt(document.getElementById("hack")["value"]);
    var health = parseInt(document.getElementById("health")["value"]);
    var bountyHunter = new BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health);
    sessionStorage.setItem("bountyHunter", JSON.stringify(bountyHunter));
    window.location.href = "bhPurchaseItems.html";
};
//# sourceMappingURL=pageOne.js.map