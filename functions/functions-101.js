let greatUser = function(){
    console.log('welcome user')
}
greatUser()
greatUser()
greatUser()

let ConvretFahrnhiatToCalsuis = function(fahrnhiet){
    let clasuis = (fahrnhiet - 32) * (5/9)
    return clasuis
}

let clasuisFinalOutout = ConvretFahrnhiatToCalsuis(68)
console.log(clasuisFinalOutout)


let convertKelvienToCalsuis = function(fahrnhiet){
    let kelvien = (fahrnhiet + 459.67) * 5/9
    return kelvien
}

let kelvienFinalOutput = convertKelvienToCalsuis(32)
console.log(kelvienFinalOutput)