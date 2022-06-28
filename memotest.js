/*Memotest*/

//init variables

let emojiList=['🐶','🐱','🐭','🐹','🐰','🦊','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐶','🐱','🐭','🐹','🐰','🦊','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔']

let startButton=document.getElementById('startButton');

let tablero=document.getElementById('tablero');

let tarjeta=document.getElementsByClassName('tarjeta');
let ArrayTablero= [];
let ArrayTarjeta=Array.from(tarjeta);
let caraTrasera=document.getElementsByClassName('cara trasera');
let caraFrontal=document.getElementsByClassName('cara frontal');
let contadorCartasActive=0;
let primeraCarta='';
let segundaCarta='';
let aciertos=0;

verificarFinJuego=()=>{
    if(aciertos==15){
        tarjeta.style.animation='rotar 5s ease-in-out';
        startButton.style.display='';
    }
}

    pintarAciertos=()=>{}





mezclarCartas=()=>{
    for(let i=0;i<caraTrasera.length;i++){
        let random=Math.floor(Math.random()*emojiList.length);
        caraTrasera[i].innerHTML=emojiList[random];
        emojiList.splice(random,1);
    }
}
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
        pintarAciertos();
        verificarFinJuego();
        console.log(aciertos);
        console.log(a.classList);
        console.log(b.classList);
    }
    

}

verificarCartas=(element)=>{
    if(contadorCartasActive===1){
        primeraCarta=element;
        return;
    }
   
    if(contadorCartasActive===2){
        segundaCarta=element;
        contadorCartasActive=0;
        verificarCoincidencia(primeraCarta,segundaCarta);
        return;
        
        }
    
    }
    
   

crearCartas=()=>{
    
    mezclarCartas();

    ArrayTablero.forEach(element => {
        
      
        element.addEventListener('click', () => { 
            //check si la carta esta activa o descubierta
            if(element.classList.contains('active')||element.classList.contains('match')){
                return;
            }else{ element.style.transform='rotateY(180deg)';  
                    element.classList.add('active');
                    contadorCartasActive++;
                    verificarCartas(element)}
                   
            
           
            
        });
})
};




crearTablero=()=>{
    ArrayTablero=[];
    
  
    for (let i = 0; i<30; i++) {

       const carta=document.createElement('div');
            carta.classList.add('tarjeta');
            tablero.appendChild(carta);
            tablero.children[i].innerHTML=`<div class="cara frontal">?</div><div class="cara trasera">${emojiList[i]}</div>`;
        setTimeout(()=>{
             
            
            
            ArrayTablero.push(tablero.children[i]);
            ArrayTablero= [...tablero.children];

        
    },1000)

        
            
            
      }
     
    
   
    
    console.log(ArrayTablero);
    crearCartas()


    }


    
    

    



    



//start game

startButton.addEventListener('click',()=>{
    if (ArrayTablero.length===0){
        crearTablero();
        aciertos=0;
        startButton.style.display='none';
    }
    }
    );
