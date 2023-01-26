let tip = function (total, tipPercent = .2){
    return `tippercent: ${tipPercent * 100}% of total: ${total} is ${total * tipPercent}`
    //return total * tipPercent
}
let Total = tip(400, .25)
console.log(Total)