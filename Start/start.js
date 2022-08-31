const startButton = document.getElementById('start')
const firstScreen = document.getElementById('name')
const dialoge = document.getElementById('dialogePage')
const boy = document.getElementById('boy')
const girl = document.getElementById('girl')



dialoge.style.display = "none"

startButton.addEventListener('click', function(){
    firstScreen.style.display = "none";
    boy.src = 'boy.png'
    girl.src = 'girl.png';
    dialoge.style.display = "inline";
    
})