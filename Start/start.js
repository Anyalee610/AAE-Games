const startButton = document.getElementById('start')
const firstScreen = document.getElementById('name')
const dialogue = document.getElementById('dialoguePage')
const boy = document.getElementById('boy')
const girl = document.getElementById('girl')
const boychatbox = document.getElementById('boychatbox')
const girlchatbox = document.getElementById('girlchatbox')
const next = document.getElementById('next')
const boywords = document.getElementById("wordsOfBoy")
const girlwords = document.getElementById("wordsOfGirl")
const firstgame =document.getElementById("firstgame")
const timeout1 = setTimeout(() => {}, 5000);

dialogue.style.display = "none"
const changeDialoge = (elementId, text) =>{
    elementId.innerText = text;
}
const intro = () => {
    firstScreen.style.display = "none";
    boy.src = 'boy.png'
    girl.src = 'girl.png';
    boychatbox.src = 'boychatbox.png'
    girlchatbox.src ='girlchatbox.png'
    dialogue.style.display = "inline";
    boywords.style.fontSize = '15px'
    girlwords.style.fontSize = '15px'
    boywords.innerText ='Hi, my name is Chopper'
    girlwords.innerText ='Hi, my name is Ann'
    next.src = 'next.png'
    next.style.position ='absolute'
    next.style.bottom ='100px'
    next.style.right ='200px'
    next.style.width = ' 200px'
}

const words2 = () => {
    boywords.innerText = 'Yesterday afternoon our grandfather died.'
    girlwords.style.fontSize = '25px'
    girlwords.innerText ='He Was Murdered'
    next.addEventListener('click', words3)
}

const words3 = ()=>{
    girlwords.style.fontSize = '15px'
    changeDialoge(girlwords,'Will you help us?')
    boychatbox.style.display = 'none'
    boywords.style.display = 'none'
    next.src = 'yes.png'
    next.addEventListener('click', words4)
}
const words4 = () => {
    next.style.display= 'none';
    next.src = 'next.png';
    changeDialoge(girlwords,'OMG thank you so much');
    boywords.innerText = 'All you have to do is help find the murder.';
    boychatbox.style.display = 'block';
    boywords.style.display = 'block';
    next.style.display = 'block';
    next.addEventListener('click', words5)

}
const words5 = () => {
    changeDialoge(girlwords,'You will solve some puzzels that will give you clues')
    boywords.innerText ='And help identify who killed him and toke his will that gave Ann the farm'
    next.addEventListener('click',  words6)

}
const words6 =()=>{
    girl.src = 'question.png'
    girlwords.innerText = "lol, how did you know that."
    boychatbox.style.display = 'none'
    boywords.style.display = 'none'
    next.addEventListener('click',  words7)
}
const words7 = () => {
    changeDialoge(girlwords,'But all you have to do is match two card together for the first one')
    girl.src = 'girl.png';

    next.addEventListener('click',  words8)

}
const words8 =()=>{
    boychatbox.style.display = 'block';
    boywords.style.display = 'block';
    boywords.innerText = "Let just play"
    changeDialoge(girlwords,'The next one you drag and drop the english that corilates to the spanish, and the last one you just choose who did it')
    firstgame.href = 'Ashe.html'
}
startButton.addEventListener('click', intro)

next.addEventListener('click', words2)











   //girlwords.innerText ='Will you help us find who did it?'

