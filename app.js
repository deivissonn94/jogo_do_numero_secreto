/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Bem vindo ao jogo do adivinha ";
*/

let lista = [];
let limiteDenumeros = 50;
let tentativas =1;
let numeroAleatorio =geraNumeroAleatorio();

let botaoReinica = document.getElementById('reiniciar');
botaoReinica.onclick = reiniciaJogo;

exibiMensagemInicial();

function escreveTela(tag,texto){
    let parte = document.querySelector(tag);
    parte.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate :1.2});
}

function geraNumeroAleatorio(){
   let crianumeroA = parseInt(Math.random() * limiteDenumeros +1);
   
   if(lista.length ==limiteDenumeros){
    lista =[];
   }

   if(lista.includes(crianumeroA)){
     return geraNumeroAleatorio();
   }else{
      lista.push(crianumeroA);
      console.log(lista);
      return crianumeroA;
   }
}

function exibiMensagemInicial(){
    escreveTela ('h1',"Bem vindo ao jogo do adivinha");
    escreveTela('p',`Digite um numero de 1 áte 10 !!!`);
}


function verificaChute(){

        let chute = document.querySelector('input').value;

        if(numeroAleatorio == chute){
            escreveTela('h1',"Acertou!!!!");
            let palavraTentativa = tentativas == 1 ? "tentativa": "tentativas";
            let textoParagrafo = `Voce acertou com ${tentativas} ${palavraTentativa}`;
            escreveTela('p',textoParagrafo);
            //uma maneira de selecior o botao pelo id
                //document.querySelector('#reiniciar').removeAttribute('disabled');
            //outra maneira de selecionar o botao pelo id
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if(numeroAleatorio>chute){
                escreveTela('p',"Você errou numero secreto e maior");
                escreveTela('h1',"Você errou !!")
            }else{
                escreveTela('p',"Você errou numero secreto e menor");
                escreveTela('h1',"Você errou!!")
            }
            tentativas++   
            limpaTela(); 
            focar();      
        }
        

}

function limpaTela() {
    
    chute = document.querySelector('input');
    chute.value ="";
}

function focar(){
    chute = document.querySelector('input');
    chute.focus();
    //ou
      //chute = document.querySelector('input').focus();
    
}




function reiniciaJogo(){
    numeroAleatorio =geraNumeroAleatorio();
    tentativas =1;
    limpaTela();
    focar();
    exibiMensagemInicial();
    console.log(numeroAleatorio);
    document.getElementById('reiniciar').setAttribute('disabled',true);

}





console.log(numeroAleatorio);


