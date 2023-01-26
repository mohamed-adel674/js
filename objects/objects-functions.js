/**
 *               (my firt try for tihs example)
 * 
 * let degres ={
    fahrenheitss: 120
}

let calcus = function (){ 
    let kelven = (degres.fahrenheitss + 459.67) * 5/9
    let celes = (degres.fahrenheitss - 32) * (5/9)
    return `celes degree is ${celes} and kelven degree is ${kelven}`

}

let final = calcus(degres)
console.log(final)*/


let fahrenheitCala = function (fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        kelven: (fahrenheit + 459.67) * (5/9),
        celes: (fahrenheit - 32) * (5/9)
    }
}
let finals = fahrenheitCala(344)
console.log(finals)


/**let fahrenheit = 120
let celes = (fahrenheit - 32) * (5/9)
let kelvien = (fahrenheit + 459.67) * 5/9
*/