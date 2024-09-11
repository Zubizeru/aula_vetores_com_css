/* Crie um algoritmo que leia 20 números inteiros e armazene-os num 
vetor. Armazene os números pares no vetor PAR e os números IMPARES 
no vetor impar. Deve-se no final mostrar os três vetores. */
function executarExercicio5() {
    let numero = [];
    let impar = [];
    let par = [];
    let mensagem = "";

    // Leitura dos números
    for (let i = 0; i < 20; i++) {
        numero.push(parseInt(prompt(`Informe o ${i + 1}º número:`)));
    }
    // Verificação de par ou ímpar.
    for (let i = 0; i < numero.length; i++) {

        if (numero[i] % 2 === 0) {   // Verifica se o número é par
            par.push(numero[i]);
        } else {                     // Caso contrário, é ímpar
            impar.push(numero[i]);
        }
    }
    // Construção da mensagem de números informados.
    mensagem += "Números informados:\n";
    for (let i = 0; i < numero.length; i++) {

        if (i === numero.length - 1) {
            mensagem += `${numero[i]}.`;
        } else if (i === numero.length - 2) {
            mensagem += `${numero[i]} e `;
        } else {
            mensagem += `${numero[i]}, `;
        }
    }

    // Construção da mensagem de números pares
    mensagem += "\nNúmeros pares:\n";
    for (let i = 0; i < par.length; i++) {
        mensagem += "";

        if (i === par.length - 1) {
            mensagem += `${par[i]}.`;
        } else if (i === par.length - 2) {
            mensagem += `${par[i]} e `;
        } else {
            mensagem += `${par[i]}, `;
        }
    }

    // Construção da mensagem de números ímpares
    mensagem += "\nNúmeros ímpares:\n";
    for (let i = 0; i < impar.length; i++) {
        mensagem += "";

        if (i === impar.length - 1) {
            mensagem += `${impar[i]}.`;
        } else if (i === impar.length - 2) {
            mensagem += `${impar[i]} e `;
        } else {
            mensagem += `${impar[i]}, `;
        }
    }

    // Exibição da mensagem completa
    alert(mensagem);
}