let numero = parseInt(Math.random() * 100)
let tentativas = 1
let chute

alert("Acerte o número secreto! :D")

let nome = prompt("Digite o seu nome:")

while (chute != numero) {
    let chute = prompt("Escolha um número entre 1 e 100.")
     if (chute == numero) {
break
     } else {
         if (chute > numero) {
             alert('O número secreto é menor...')
         } else {
             alert('O número secreto é maior...')
         }
     }

tentativas++

 }

 let palavra = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numero} e você acertou com ${tentativas} ${palavra}! Parabéns, ${nome}!`)