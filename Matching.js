const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')


function startTimer(duration, display) {
    
    let timer = duration, minutes, seconds;
    setInterval(function time() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
          document.getElementById("time").innerHTML = "Time Is Up!";
        }
    }, 1000);
    
  }

//   function fadeOut(){
//     // const container = document.getElementById('fade');
//     // container.style.opacity = '0';
//     // container.remove()
//     document.getElementById('fade').removeAttributeNode()
// }

// function youLost(){
//     if(document.getElementById("time").innerHTML === "Time Is Up!"){
//         fadeOut()
//     }
// }
  
  window.onload = function beginningTime() {
    let twoMin = 20 * 1,
        display = document.querySelector('#time');
    startTimer(twoMin, display);
  };

suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){

        //fix the bug of being able to preview the cards
        // front[i].classList.add('show')

        // setInterval(() => {
        //     front[i].classList.remove('show')
        // }, 1000);

        card[i].addEventListener('click' ,()=>{
            //fix the bug of being able to see all the cards at once 
                front[i].classList.add('flip')
                const filppedCard = document.querySelectorAll('.flip')
            if(filppedCard.length === 2 && filppedCard !== match(filppedCard[0] , filppedCard[1]) ){
                container.style.pointerEvents ='none'
                // $('container').click(true);
                setInterval(() => {
                    container.style.pointerEvents ='all'
                    // $('container').click(false);
                }, 2000);
 
                match(filppedCard[0] , filppedCard[1])
            }
            
        })
    }
}

function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
    if ( score.innerHTML <= 6){
        
        setTimeout('nextLevelButton()', 21000)
        
    }
}
function showstatus(object) {
    object.style.opacity = "1";
}

function out (object){
 object.style.opacity="0";
}

// function fadeOut(){
//     const container = document.getElementById('fade');
//     if()
//     container.style.opacity = '0';
// }

// var slideSource = document.getElementById('slideSource');

// document.getElementById('handle').onclick = function () {
//   slideSource.classList.toggle('fade');
// }

function hideGame(){
    document.getElementById('fade').style.visibility = 'hidden';
}
setTimeout('hideGame()', 21000)

function nextLevelButton(){
    document.getElementById('option2').style.visibility = 'visible';
}
// setTimeout('nextLevelButton()', 21000)

function replayButton(){
    document.getElementById('option1').style.visibility = 'visible';
}
setTimeout('replayButton()', 21000)


function Replay(){
    window.location.reload();
}

