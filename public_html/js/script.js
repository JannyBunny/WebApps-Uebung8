"use strict";
var Hund = function (name, besitzer) {
    this._name = name;
    this._besitzer = besitzer;
};
Hund.prototype.bellen = function () {
    console.log(this._name + " sagt: Wau wau wau!");
};
var Dackel = function (name, besitzer, club) { //var nötig, da Dackel sonst nicht definiert wäre
    Hund.call(this, name, besitzer); //besitzer, für den call
    this._club = club;
};
Dackel.prototype = new Hund(); // new fehlte
Dackel.prototype.constructor = Dackel;
Dackel.prototype.sageSpruch = function () { // .prototype. weil sonst keine Vererbung stattfindet
    console.log(this._besitzer + " sagt: Ordnung muss sein!");
};
var Boxer = function (name, besitzer, bissig) {
    Hund.call(this, name, besitzer); //Hund.call sowie this.name waren nicht korrekt (.call) und this, fehlte
    this._bissig = bissig; // hier hat this. vor der lokalen Variable gefehlt
};
Boxer.prototype = Object.create(Hund.prototype); //Hund.prototpye, da es sonst nicht überschrieben wird im Hundobjekt
Boxer.prototype.constructor = Boxer;
Boxer.prototype.nenneBeissverhalten = function () {
    var prop = this._bissig ? "bissiger" : "lieber";
    console.log("Ich bin ein " + prop + " Hund."); // hier hat das semikolon sowie die stringkonkatinationen + statt . 
};
var waldi = new Dackel("Waldi", "Krause", "Teckel e.V.");
var prinz = new Boxer("Prinz", "Klitschko", false); // "KGB", war zuviel
waldi.bellen();
waldi.sageSpruch();
prinz.bellen();
prinz.nenneBeissverhalten();// hier hatten die () beim funktionsaufruf gefehlt

function initButtons() {
    var body = document.body,
            button, i;

    for (i = 0; i < 20; i++) {
        button = document.createElement("button");
        button.innerHTML = "Button " + i;
        (function (i) {
            button.addEventListener("click", function (e) {
                alert(i);
            }, false);
        })(i);
        body.appendChild(button);
    }
}
initButtons();