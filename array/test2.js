const todos = [{
    text: 'walck the dog',
    completed: true
}, {
    text: 'read a book',
    completed: false
}, {
    text: 'watch tv',
    completed: true
}, {
    text: 'drink your cofe',
    completed: true
}, {
    text: 'play a game',
    completed: false
}]

const deleteTodo = function(todos, thatTodo){
   const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === thatTodo.toLowerCase()
    })
    
    if(index > -1){
        todos.splice(index, 1)
    }
}

const getThingsTodo = function(todos){
   return todos.filter(function(todo){
        return todo.completed === false
    })
}

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }

    })       
}
sortTodos(todos)
console.log(todos)


// console.log(getThingsTodo(todos))


// deleteTodo(todos, 'watch tv')
// console.log(todos)

// todos.splice(2,1)
// todos.push('take a walk')
// todos.shift()

 
// console.log(`you have ${todos.length} todos`)

// todos.forEach(function (item, index){
//     console.log(`${index + 1} . ${item}`)
// })

// for (let todo = 0; todo < todos.length ; todo++){
//     console.log(`${todo + 1} . ${todos[todo]}`)
// }
