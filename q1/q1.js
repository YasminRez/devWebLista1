
alert('HI usuário bem vindo ao jogo do numero secreto');

let numberMax = 50;
let numberSecret = parseInt(Math.random() * numberMax + 1);
let chute;
let tentativas = 1;

console.log(numberSecret);


while(chute != numberSecret){
  chute = prompt(`Escolha um numero entre 1 e ${numberMax}`);

    if (chute == numberSecret) {
      
     break;
    } else {
      
       if(chute > numberSecret){
        alert(`o numero secreto é menor que ${chute}`);
       } else {
        alert(`o numero secreto é maior que ${chute}`);
      }
      
      tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ?  'tentativas' : 'tentativa';
 alert(`Voce acertou o numero secreto ${numberSecret} com ${tentativas} ${palavraTentativa}`);
