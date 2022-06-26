/*Memotest*/

//init variables

let emojiList=['🐶','🐱','🐭','🐹','🐰','🦊','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔']

let startButton=document.getElementById('startButton');

let tablero=document.getElementById('tablero');

let tarjeta=document.getElementsByClassName('tarjeta');
let ArrayTablero= [];
let ArrayTarjeta=Array.from(tarjeta);
let caraTrasera=document.getElementsByClassName('cara trasera');
let caraFrontal=document.getElementsByClassName('cara frontal');





crearCartas=()=>{
    const a=[...emojiList]
    const b=[...emojiList]
    for (let index = 0; index< ArrayTablero.length; index+=2) {
        ArrayTablero[index].innerHTML=`<div class="cara frontal">${a[index]}</div><div class="cara trasera"></div>`;
        ArrayTablero[index].innerHTML=`<div class="cara frontal">${b[index]}</div><div class="cara trasera"></div>`;
       
    
    }

    ArrayTablero.forEach(element => {
        element.addEventListener('click', () => {
            element.style.transform='rotateY(180deg)';
        });
})
};




crearTablero=()=>{
    
  
    for (let i = 0; i<30; i++) {
        const carta=document.createElement('div');
            carta.classList.add('tarjeta')
            carta.innerHTML=`<div class="cara frontal"></div><div class="cara trasera"></div>`;
            tablero.appendChild(carta);
            tablero.children[i].innerHTML=`<div class="cara frontal">?</div><div class="cara trasera"></div>`;
            ArrayTablero.push(tablero.children[i]);
      }
        console.log(tablero);
        console.log(tablero.children)
        ArrayTablero= [...tablero.children];
        console.log(ArrayTablero);
        crearCartas()
   

};

    
    

    



    



//start game

startButton.addEventListener('click',()=>{
    startButton.style.display='none';
    crearTablero();
}) ;

