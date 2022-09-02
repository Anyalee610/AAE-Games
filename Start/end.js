const startButton = document.getElementById('start')
const firstScreen = document.getElementById('head')
const gameText = document.getElementById('name')
const dialogue = document.getElementById('dialoguePage')
const boy = document.getElementById('boy')
const girl = document.getElementById('girl')
const boychatbox = document.getElementById('boychatbox')
const girlchatbox = document.getElementById('girlchatbox')
const next = document.getElementById('next')
const boywords = document.getElementById("wordsOfBoy")
const girlwords = document.getElementById("wordsOfGirl")
const robber = document.getElementById('robber')
const again = document.getElementById('again')
dialogue.style.display = "none";

const intro = () => {
    firstScreen.style.display = "none";
    boy.src = 'boy.png'
    girl.src = 'girl.png';
    robber.src = 'robber.png'
    boychatbox.src = 'boychatbox.png'
    girlchatbox.src ='girlchatbox.png'
    boychatbox.style.display = "none";
    girlchatbox.style.display = "none";
    dialogue.style.display = "inline";
    boywords.style.fontSize = '15px'
    girlwords.style.fontSize = '15px'
    next.src = 'next.png'
    next.style.position ='absolute'
    next.style.bottom ='100px'
    next.style.right ='200px'
    next.style.width = ' 200px'
    
}

const youLose = () =>{
    firstScreen.style.display = "block";
    dialogue.style.display = "none";
    gameText.style.fontSize = '40px'
    gameText.innerText = 'You lose that not who killed grandpa'
    startButton.innerText = "play again"
    again.href = 'index.html'
}
const youWin = () =>{
    firstScreen.style.display = "block";
    dialogue.style.display = "none";
    gameText.style.fontSize = '40px'
    startButton.innerText = "play again"
    again.href = 'index.html'
    gameText.innerText = 'You Won Chopper didnt like Ann was going to inherit everything'
}


startButton.addEventListener('click', intro)
girl.addEventListener('click',youLose)
robber.addEventListener('click',youLose)
boy.addEventListener('click', youWin)
