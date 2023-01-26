const todos =[{
    text: 'wake up',
    completed: false
}, {
    text: 'sighs',
    completed: true
}, {
    text: 'pray',
    completed: true
}, {
    text: 'eat breakfast',
    completed: false
}, {
    text: 'go to your job',
    completed: true
}]

const incomplateTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incomplateTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)

})

 // listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('add a new todo')
})

// listen for  todo change
document.querySelector('#text').addEventListener('input', function (e) {
    console.log(e.target.value)
})





