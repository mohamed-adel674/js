const notes = [{
    title: 'my next trip',
    body: 'i would like to go to spain'
}, {
    title: 'habbits to work on',
    body: 'exercices. eating a bit better.'
}, {
    title: 'Work',
    body: 'work on my new project'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })

}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const findNote = function(notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNotes = function(notes, query){
//     return notes.filter(function (note, index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })

// }

// console.log(findNotes(notes, 'to'))

// // const note = findNote(notes, 'work') 
// // console.log(note)
 sortNotes(notes)
 console.log(notes)
