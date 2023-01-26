
const todos =[{
    text: 'wake up',
    completed: true
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
//
const sortTodos = function(todos) {
    todos.sort(function (a, b){
        if (!a.completed && a.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else { 
            return 0
        }
    })
}
//
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    }) 

    if (index > -1) {
        todos.splice(index, 1)
    }
}
//
const getThingsTodo = function(todo){
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)
// console.log(getThingsTodo(todos))

// deleteTodo(todos, 'Pray')
// console.log(todos)
