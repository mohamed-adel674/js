//let studentScore = 0
//let TotalPossableScore = 20

let score = function(studentScore, TotalPossableScore, grade=''){
    studentScore = (studentScore /= TotalPossableScore) * 100

    if(studentScore >= 90){
        grade = 'A'
    } else if (studentScore >= 80){
        grade = 'B'
    }else if (studentScore >= 70){
        grade = 'C'

    } else if (studentScore >= 60){
        grade = 'D'
    } else {
        grade = 'F'
    }
    return `You Got a ${grade} (${studentScore}%)` 
}

let yourScore =score(40)
console.log(yourScore)