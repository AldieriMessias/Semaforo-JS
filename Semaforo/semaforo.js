const semaforo = document.getElementById('semaforo');
const btns = document.getElementById('btns');
let colorIndex = 0;
let intervalId=null;

const trafficLight = (event) => {
    //console.log(event.target.id)
    /* if(event.target.id == 'red'){
        turnOnRed
    } */
    stopAutomatic()
    turnOn[event.target.id]();
    
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    
    /* 
    if(colorIndex <2){
        colorIndex++
    }else{
        colorIndex = 0;
    } */
   
const changeColor = () =>{
    //console.log('Teste cor')
    const colors=['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => semaforo.src = './img/semaforoRed.jpg',
    'yellow': () => semaforo.src = './img/semaforoYellow.jpg',
    'green': () => semaforo.src = './img/semaforoGreen.jpg',
    'automatic':() =>intervalId= setInterval(changeColor,1000)
}

btns.addEventListener('click', trafficLight)
