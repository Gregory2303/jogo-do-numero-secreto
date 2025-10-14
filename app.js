let  listaDeNúmerosSorteados =[];
let massimoDeNumeros = 150;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirMensagemInicial();
function exibirMensagemInicial(){
   exibirTextoNaTela('h1','jogo do número secreto');
   exibirTextoNaTela('p','escolha um número entre 1 e 100');
}
   
function verificarChute(){
  let chute =document.querySelector('input').value;
  if (chute == numeroSecreto){
   exibirTextoNaTela('h1','acertou!');
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
   let mesagemTentativas = `você descobri o número secreto com ${tentativas} ${palavraTentativa}`;
   exibirTextoNaTela('p',mesagemTentativas   );
   document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
   if (chute > numeroSecreto){
      exibirTextoNaTela('p','o número secreto é menor ');
  }else{
   exibirTextoNaTela('p','o número secreto é maior');
  }
  tentativas++;
  limpaeCampo();
}
}
console.log (numeroSecreto)
function gerarNumeroAleatorio(){
   let númeroEscolhido = parseInt(Math.random() *massimoDeNumeros + 1);
   let quantidadesDeElementosNaLista = listaDeNúmerosSorteados.length
   if (quantidadesDeElementosNaLista == massimoDeNumeros){
      listaDeNúmerosSorteados = [];
   }
   if (listaDeNúmerosSorteados.includes(númeroEscolhido)){
      return gerarNumeroAleatorio();
   }else{
      listaDeNúmerosSorteados.push(númeroEscolhido);
      console.log (listaDeNúmerosSorteados);
      return númeroEscolhido;
   }
}   

function limpaeCampo () {
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limpaeCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}

