/**
 * Documentation Comments
 */
/**
 *  Juhul kui vaja midagi debuggida, siis selleks all kirjutatud pisike koodiriba.
 */
// "use strict";
// const ps = require("prompt-sync");
// const prompt = ps();


// console.log("Row 1")
// console.log("Row 2")
// console.log("Row 3")

//One line comment

/*Multiple
* line
* comment
* */

/*
//Ül 1.1
console.log("Tere, maailm!")

//Ül 1.2
var aasta = 2016
var president = "Kersti Kaljulaid"
var lauseKeskosa = ". aastal valiti Eesti Presidendiks "
var lause = aasta.toString() + lauseKeskosa + president
console.log(lause)

///Ül 1.3
var astmeAlus = parseInt(prompt("Täisarv, mida soovite astendada:"))
var astmeAstendaja = parseInt(prompt("Täisarv, millega soovite astendada:"))
var tulemus = astmeAlus ** astmeAstendaja
console.log(tulemus)

//Ül 1.4

var nimi = prompt("Mis on teie nimi?")
var lubatudKiirus = parseInt(prompt("Lubatud kiirus (km/h)"))
var tegelikKiirus = parseInt(prompt("Tegeliks kiirus (km/h)"))
var yletatudKiirus = (tegelikKiirus - lubatudKiirus)*3
var trahv = Math.min(190, yletatudKiirus)
if(trahv > 0){
    console.log(`${nimi} kiiruse ületamise eest on teile trahv ${trahv} eurot.`)
}else
    console.log(`${nimi}, te ei ületanud kiirust!`)



//Ül 1.5
var ainepunktid = prompt('Sisestage ainepunktide arv:')
var n2dalad = prompt('Sisestage nädalate kogus:')
var ajakulu = Math.round((ainepunktid*26)/n2dalad)

console.log(ajakulu)

//ül 1.6

var inimesteKogus = prompt('Kui palju inimesi soovib reisida?')
let bussiIstekohad
while (bussiIstekohad != 20 & bussiIstekohad !=32){
    bussiIstekohad = prompt('Kui suurt bussi soovite? (20 või 32 istet)')
}
let mahaj22nud = inimesteKogus % bussiIstekohad
let bussid = (inimesteKogus - mahaj22nud) / bussiIstekohad
if(mahaj22nud == 0){console.log(`${inimesteKogus} soovivad reisida, ${bussid} bussi, millel on ${bussiIstekohad} istekohta, tuleb tellida.`)}
else console.log(`${inimesteKogus} soovivad reisida, ${bussid} bussi, millel on ${bussiIstekohad} istekohta, tuleb tellida ning maha jääb ${mahaj22nud} inimest. `)

//Ül 2.1

let temp = prompt('Sisetage õuetemperatuur:')
if (temp <= 4.0){
    console.log('On jäätumise oht!')
}else console.log('Ei ole jäätumise ohtu.')

//Ül 2.2

let vanus = prompt(`Sisetage enda vanus:`);
while(isNaN(Number(vanus))){
    vanus = prompt(`Sisetage enda vanus:`);
}
let sugu;
while (sugu !== 'n' && sugu !== 'N' && sugu !== 'm' && sugu !== 'M') {
    sugu = prompt('Sisestage oma sugu(n/N või m/M)');
}
let treeninguTyyp;
while (treeninguTyyp != 1 && treeninguTyyp != 2 && treeninguTyyp != 3) {
    treeninguTyyp = prompt('Sisestage oma treeningutüüp numbrina! (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)');
}
switch (sugu) {
    case "N":
    case "n":
        switch (treeninguTyyp) {
            case '1':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((220 - vanus) * 0.5)} kuni ${Math.round((220 - vanus) * 0.7)}.`);
                break
            case '2':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((220 - vanus) * 0.7)} kuni ${Math.round((220 - vanus) * 0.8)}.`);
                break
            case '3':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((220 - vanus) * 0.8)} kuni ${Math.round((220 - vanus) * 0.87)}.`);
                break
        }
        break
    case "M":
    case "m":
        switch (treeninguTyyp) {
            case '1':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((206 - vanus * 0.88) * 0.5)} kuni ${Math.round((206 - vanus * 0.88) * 0.7)}.`);
                break
            case '2':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((206 - vanus * 0.88) * 0.7)} kuni ${Math.round((206 - vanus * 0.88) * 0.8)}.`);
                break
            case '3':
                console.log(`Pulssisagedus peab olema vahemikus ${Math.round((206 - vanus * 0.88) * 0.8)} kuni ${Math.round((206 - vanus * 0.88) * 0.87)}.`);
                break

        }
        break
}


//Ülesanne 2.4

let istekoht = prompt('Kas soovite valida ("ise") või loosida ("loos")?')
while(istekoht !== 'ise' && istekoht !== 'loos'){
    istekoht = prompt('Kas soovite valida ("ise") või loosida ("loos")?')
}
if(istekoht === 'ise'){
    let kasAknasIste = prompt('Kas soovite istuda akna ääres("aken") või mitte("muu")?')
    while(kasAknasIste !== 'aken' && kasAknasIste !== 'muu'){
        kasAknasIste = prompt('Kas soovite istuda akna ääres("aken") või mitte("muu")?')
    }
    switch (kasAknasIste) {
        case "aken":
            console.log('Valisite ise. Aknakoht!')
            break
        case "muu":
            console.log('Valisite ise. Vahekäikukoht!')
            break
    }
}
if(istekoht==='loos'){
    let randInt = Math.floor(Math.random() *3   );
    switch (randInt) {
        case 0:
        case 1:
            console.log('Istekoht loositi. Vahekäigukoht!')
            break
        case 2:
            console.log('Istekoht loositi. Aknakoht!')
            break
    }
}

//Ülesanne 2.5

let kirjaTeema = prompt('Sisestage kirja teema pealkiri:');
let kirjaSuurus;
let kirjaLisa;
//https://bobbyhadz.com/blog/javascript-check-if-value-is-float
function isFloat(value) {
    if (
        typeof value === 'number' &&
        !Number.isNaN(value)
    ) {
        return true;
    }

    return false;
}

while (!isFloat(kirjaSuurus)){
    kirjaSuurus = parseFloat(prompt('Sisestage kirja suurus:'))
}
while (kirjaLisa !== 'jah' && kirjaLisa !== 'ei'){
    kirjaLisa= prompt('Kas kirjaga on kaasas fail?')
}

if(kirjaTeema.length ===0 || (kirjaLisa === 'jah' && kirjaSuurus > 1.0)){
    console.log('Kiri on späm.')
}
else console.log('Kiri ei ole späm.');


//ülesanne 3.1

var kordus = prompt("Sisestage mitu korda äratada")
while(kordus !== 0){
    --kordus
    console.log("Tõuse ja sära")
}


//Ülesanne 3.2

var ringid = prompt("Sisesta ringide arv:")
let i = 0
let a = 0
while(i<ringid){
    ++i
    if(i % 2 ===0){
        a += i
    }
}
console.log(`Porgandite koguarv on ${a}`)



//Ülesanne 3.3

var täringud = prompt("Täringute arv:")
let i = 0
while(i<täringud){
    console.log(Math.floor(Math.random()*6)+1)
    ++i
}

 */
// Ülesanne 3.4

let poialpoissid
let ounad = 14

while(poialpoissid<0 && poialpoissid>7 ){
    poialpoissid = prompt("Mitu pöialpossi tahab õuna?")
}
