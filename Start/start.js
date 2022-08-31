const startButton = document.getElementById('start')
const firstScreen = document.getElementById('name')
const dialogue = document.getElementById('dialoguePage')
const boy = document.getElementById('boy')
const girl = document.getElementById('girl')



dialogue.style.display = "none"

startButton.addEventListener('click', function(){
    firstScreen.style.display = "none";
    boy.src = 'boy.png'
    girl.src = 'girl.png';
    dialogue.style.display = "inline";
    
})