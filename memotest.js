/*Memotest*/

//init variables

let emojiList=['🐶','🐱','🐭','🐹','🐰','🦊','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐶','🐱','🐭','🐹','🐰','🦊','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔']
let startButton=document.getElementById('startButton');
let tablero=document.getElementById('tablero');
let modal=document.getElementById('modal');
let tarjeta=document.getElementsByClassName('tarjeta');
let ArrayTablero= [];
let ArrayTarjeta=Array.from(tarjeta);
let caraTrasera=document.getElementsByClassName('cara trasera');
let caraFrontal=document.getElementsByClassName('cara frontal');
let contadorCartasActive=0;
let primeraCarta='';
let segundaCarta='';
let aciertos=0;
let intentos=0;

//

//Functions

borrarTablero=()=>{
    ArrayTarjeta.length=0;
    ArrayTablero.length=0;
    aciertos=0;
    intentos=0;    
}

verificarFinJuego=()=>{
    if(aciertos==15){
        tablero.innerHTML='';
        tablero.appendChild(document.createElement('h1'));
        tablero.children[0].innerHTML=`<h1>Felicidades, has ganado! con solo ${intentos} intentos</h1>`;
        startButton.style.display='block';
         borrarTablero();
    }}

mezclarCartas=()=>{
    copyEmojiList=[...emojiList];
    for(let i=0;i<caraTrasera.length;i++){
        let random=Math.floor(Math.random()*copyEmojiList.length);
        caraTrasera[i].innerHTML=copyEmojiList[random];
        copyEmojiList.splice(random,1);
        }}

verificarCoincidencia=(a,b)=>{
    if(a.innerText!==b.innerText){
        setTimeout(()=>{
            a.style.transform='rotateY(0deg)';
            b.style.transform='rotateY(0deg)';
            a.classList.remove('active');
            b.classList.remove('active');
        },1000);
    }if(a.innerText==b.innerText){
        a.classList.add('match');
        b.classList.add('match');
        a.classList.remove('active');
        b.classList.remove('active');
        aciertos++;
        document.getElementsByClassName('aciertos')[0].innerHTML=`Aciertos:<div className:'cuadroCont'><span>${aciertos}</span></div>`;
        verificarFinJuego();  
    }}

verificarCartas=(element)=>{
    if(contadorCartasActive===1){
        primeraCarta=element;
        return;
    }
    if(contadorCartasActive===2){
        segundaCarta=element;
        contadorCartasActive=0;    
        intentos++;
        document.getElementsByClassName('intentos')[0].innerHTML=`Intentos:<div className:'cuadroCont'><span>${intentos}</span></div>  `;
        verificarCoincidencia(primeraCarta,segundaCarta);
        return;
    }}

crearCartas=()=>{
    mezclarCartas();
    ArrayTablero.forEach(element => {
        element.addEventListener('click', () => { 
            if(element.classList.contains('active')||element.classList.contains('match')){
                return;
            }else{ element.style.transform='rotateY(180deg)';  
                    element.classList.add('active');
                    contadorCartasActive++;
                    verificarCartas(element)}});
});
};

crearTablero=()=>{
    if (aciertos!==15&&ArrayTarjeta.length==0){
    for (let i = 0; i<30; i++) {
       const carta=document.createElement('div');
            carta.classList.add('tarjeta');
            tablero.appendChild(carta);
            tablero.children[i].innerHTML=`<div class="cara frontal">?</div><div class="cara trasera">${emojiList[i]}</div>`;
            ArrayTablero.push(tablero.children[i]);
            ArrayTablero= [...tablero.children];}

        crearCartas();
    }}
//

//start game

startButton.addEventListener('click',()=>{
    tablero.innerHTML='';
    document.getElementsByClassName('aciertos')[0].innerHTML='';
    document.getElementsByClassName('intentos')[0].innerHTML='';
    startButton.style.display='none';
    crearTablero();
    }
    );
//