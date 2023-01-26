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



document.querySelector('button').addEventListener('click', function (e) {
   e.target.textContent = 'the button was clicked'
})