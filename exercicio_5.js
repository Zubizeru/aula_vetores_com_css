function executarExercicio5() {
    /* Crie um algoritmo que leia 20 números inteiros e armazene-os num 
vetor. Armazene os números pares no vetor PAR e os números IMPARES 
no vetor impar. Deve-se no final mostrar os três vetores. */

    let numero = [];
    let impar = [];
    let par = [];
    let mensagem = "Números informados:\n";

    // Leitura dos números
    for (let i = 0; i < 20; i++) {
        numero.push(parseInt(prompt(`Informe o ${i + 1}º número:`)));
    }

    // Verificação de par ou ímpar e construção da mensagem de números informados
    for (let i = 0; i < numero.length; i++) {
        mensagem += numero[i];

        if (i === numero.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }

        if (numero[i] % 2 === 0) {   // Verifica se o número é par
            par.push(numero[i]);
        } else {                     // Caso contrário, é ímpar
            impar.push(numero[i]);
        }
    }

    // Construção da mensagem de números pares
    mensagem += "\nNúmeros pares:\n";
    for (let i = 0; i < par.length; i++) {
        mensagem += par[i];

        if (i === par.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    // Construção da mensagem de números ímpares
    mensagem += "\nNúmeros ímpares:\n";
    for (let i = 0; i < impar.length; i++) {
        mensagem += impar[i];

        if (i === impar.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    // Exibição da mensagem completa
    alert(mensagem);
}