/*Memotest*/

//Iniciar variables

const tablero = document.getElementById('tablero');
const casillero= document.getElementsByClassName('carta');
const cartasArray = Array.from(casillero);
const start= document.getElementById('startButton');
const emojiList= ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐯', '🐷', '🐸', '🐔' , '🐤',  '🐺', '🐗', '🐴'];

window.onload = function(){};


//Crear tablero
function crearTablero(){
    
    for(let i=0; i<30; i++){
        
        document.getElementsByClassName('tablero').appendChild(document.createElement('div'));
        /*(`<div class="carta"></div>`);*/
    }
}

//Importar imagenes


//Crear cartas

function crearCartas(){
       
        
        
}

//Start Game

start.addEventListener('click', function(){
    start.style.display = 'none';
    crearTablero();
    

});