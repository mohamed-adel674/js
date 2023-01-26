let myAccount = {
    name: 'Mohamed Adel',
    expenses: 0,
    income: 0
}

let addExpence = function(accounet, amount) {
    accounet.expenses += amount
}

//addExpence(myAcount, 2.50)
//console.log(myAcount)


// chalange
let addIncome = function (account, income) {
    account.income += income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAcountSumary = function (account) {
    let balance = account.income - account.expenses
    return `Acount for $(account.name} has $${balance} in come . $${account.income}. $${account.expenses} in expense`
}
addIncome(myAccount, 2000)
addExpence(myAccount,32)
addExpence(myAccount,20)
console.log(getAcountSumary(myAccount))
resetAccount(myAccount)
console.log(getAcountSumary(myAccount))






