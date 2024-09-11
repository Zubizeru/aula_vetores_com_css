// Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.
// Função principal que executa o programa ao clicar no botão
function executarExercicio1_v1() {
  let numeros = lerNumeros1(5); // Passa o número de entradas para a função
  exibirNumeros1(numeros);
}

// Função para capturar os números do usuário
function lerNumeros1(qtd) { // Aceita o número de entradas como argumento
  let numeros = [];
  for (let i = 0; i < qtd; i++) {
    let numero;
    do {
      numero = parseInt(prompt(`Digite o ${i + 1}° número inteiro:`));
    } while (isNaN(numero)); // Repetir até que o usuário insira um número válido
    numeros.push(numero);
  }
  return numeros; // Certifica-se de retornar o array corretamente
}

// Função para exibir os números armazenados
function exibirNumeros1(numeros) {
  let mensagem = "Os números digitados foram:\n";
  for (let i = 0; i < numeros.length; i++) {
    mensagem += numeros[i];
    if (i === numeros.length - 1) {
      mensagem += "."; // Adiciona ponto no final
    } else if (i === numeros.length - 2) {
      mensagem += " e "; // Adiciona "e" entre os dois últimos números
    } else {
      mensagem += ", "; // Adiciona vírgula e espaço entre os números
    }
  }
  alert(mensagem);
}