const account = {
    name: 'Mohamed Adel',
    expenses: [],
    income:[],
    addExpenses : function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome : function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
       let totalExpenses = 0
       let totalIncome = 0
       let accountBalnce = 0

       this.expenses.forEach(function(expense) {
        totalExpenses += expense.amount
       })
       this.income.forEach(function(income) {
        totalIncome += income.amount
       })
       accountBalnce = totalIncome - totalExpenses  
       
       return `${this.name} has a balnce of $${accountBalnce}. $${totalIncome} in income. $${totalExpenses} in expence.`
    }
}


account.addExpenses('star', 840)
account.addExpenses('best', 4)
account.addIncome('job', 2000)
console.log(account.getAccountSummary())

