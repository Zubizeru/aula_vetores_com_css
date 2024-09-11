/* Crie um algoritmo que leia 20 números inteiros e armazene-os num 
vetor. Armazene os números pares no vetor PAR e os números IMPARES 
no vetor impar. Deve-se no final mostrar os três vetores. */
function executarExercicio5_v1() {
    lerNumeros(20);
    separarNumeros();
    let mensagem = construirMensagem();
    alert(mensagem);
}
// Variaveis usadas
let numeros = [];
let pares = [];
let impares = [];

// Leitura dos números
function lerNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Informe o ${i + 1}º número:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        }
    }
}

// Verificação de par ou ímpar.
function separarNumeros() {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
}

// Construção da mensagem de números pares.
function listarNumeros(vetor) {
    let resultado = "";
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i];
        if (i < vetor.length - 1) {
            resultado += ", ";
        }
    }
    return resultado;
}

function construirMensagem() {
    let mensagem = "Todos os números:\n" + listarNumeros(numeros) + ".\n\n";
    mensagem += "Números pares:\n" + listarNumeros(pares) + ".\n\n";
    mensagem += "Números ímpares:\n" + listarNumeros(impares) + ".";
    return mensagem;
}