let numeroSecreto = 5;
var chute = promp("Digite um numero de 1 a 10")
let chute = prompt("Digite um número 1 e 10");

if(numeroSecreto == chute){
    alert("voce acertou!")
}else{
    alert("Voce errou!")
    if(chute < numeroSecreto){
        alert("O numero secreto é mais que, chute")
    }else{
        alert("O numero secreto é menor que, chute")
      }
    }
        

