/**
 * Documentation Comments
 */

console.log("Row 1")
console.log("Row 2")
console.log("Row 3")

//One line comment

/*Multiple
* line
* comment
* */

/*
//Ül 1.1
console.log("Tere, maailm!")

//Ül 1.2
let aasta = 2016
let president = "Kersti Kaljulaid"
let lauseKeskosa = ". aastal valiti Eesti Presidendiks "
var lause = aasta.toString() + lauseKeskosa + president
console.log(lause)

///Ül 1.3
let astmeAlus = parseInt(prompt("Täisarv, mida soovite astendada:"))
let astmeAstendaja = parseInt(prompt("Täisarv, millega soovite astendada:"))
var tulemus = astmeAlus ** astmeAstendaja
console.log(tulemus)

//Ül 1.4

let nimi = prompt("Mis on teie nimi?")
let lubatudKiirus = parseInt(prompt("Lubatud kiirus (km/h)"))
let tegelikKiirus = parseInt(prompt("Tegeliks kiirus (km/h)"))
var yletatudKiirus = (tegelikKiirus - lubatudKiirus)*3
var trahv = Math.min(190, yletatudKiirus)
if(trahv > 0){
    console.log(`${nimi} kiiruse ületamise eest on teile trahv ${trahv} eurot.`)
}else
    console.log(`${nimi}, te ei ületanud kiirust!`)



//Ül 1.5
let ainepunktid = prompt('Sisestage ainepunktide arv:')
let n2dalad = prompt('Sisestage nädalate kogus:')
var ajakulu = Math.round((ainepunktid*26)/n2dalad)

console.log(ajakulu)

//ül 1.6

let inimesteKogus = prompt('Kui palju inimesi soovib reisida?')
let bussiIstekohad
while (bussiIstekohad != 20 & bussiIstekohad !=32){
    bussiIstekohad = prompt('Kui suurt bussi soovite? (20 või 32 istet)')
}
let mahaj22nud = inimesteKogus % bussiIstekohad
let bussid = (inimesteKogus - mahaj22nud) / bussiIstekohad
console.log(`${inimesteKogus} soovivad reisida, ${bussid} bussi, millel on ${bussiIstekohad} istekohta, tuleb tellida ning maha jääb ${mahaj22nud} inimest. `)

//Ül 2.1

let temp = prompt('Sisetage õuetemperatuur:')
if (temp <= 4.0){
    console.log('On jäätumise oht!')
}else console.log('Ei ole jäätumise ohtu.')
*/
//Ül 2.2

let vanus = prompt('Sisetage enda vanus:')
let sugu
let treeninguTyyp
while (sugu !== 'n' & sugu !== 'N' & sugu !== 'm' && sugu !== 'M'){
    sugu = prompt('Sisestage oma sugu(n/N või m/M)')
}
while (treeninguTyyp !== 1 & treeninguTyyp !== 2 && treeninguTyyp !== 3){
    treeninguTyyp = prompt('Sisestage oma treeningutüüp numbrina! (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)')
}
switch (sugu) {
    case "m":
    case "M":
        switch (treeninguTyyp) {
            case 1:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((220 - vanus)*0.5)} kuni ${Math.round((220 - vanus)*0.7)}`);
                break
            case 2:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((220 - vanus)*0.7)} kuni ${Math.round((220 - vanus)*0.8)}`);
                break
            case 3:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((220 - vanus)*0.8)} kuni ${Math.round((220 - vanus)*0.87)}`);
                break
            }
    case "n":
    case "N":
        switch (treeninguTyyp) {
            case 1:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((206 - vanus*0.88)*0.5)} kuni ${Math.round((206 - vanus*0.88)*0.7)}`);
                break
            case 2:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((206 - vanus*0.88)*0.7)} kuni ${Math.round((206 - vanus*0.88)*0.8)}`);
                break
            case 3:
                console.log(`Pulssisagedus peab olema vahemius ${Math.round((206 - vanus*0.88)*0.8)} kuni ${Math.round((206 - vanus*0.88)*0.87)}`);
                break
        }
    default:
        console.log('Test')
}
