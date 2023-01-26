let myAccount = {
    name: 'mohmed adel',
    expenses: 0,
    income: 0
}

let addExpence = function(account, amount){
    account.expenses += amount
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.expenses = 0,
    account.income = 0
}

let getAcountSumary = function (account) {
    let expence = account.income - account.expenses
    return `account for ${account.name} has $${expence}. $${account.incom} in come . $${account.expenses}`
}

addIncome(myAccount, 2000)
addExpence(myAccount,32)
addExpence(myAccount,20)
console.log(getAcountSumary(myAccount))
resetAccount(myAccount)
console.log(getAcountSumary(myAccount))