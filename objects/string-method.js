let valiDatePassword = function (password){
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(valiDatePassword('11123dd'))
console.log(valiDatePassword('sd890hghjkldkhcccccc'))
console.log(valiDatePassword('sssssssssssdpassword'))