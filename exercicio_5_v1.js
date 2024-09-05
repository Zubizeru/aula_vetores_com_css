function executarExercicio5_v1() {
    /* Crie um algoritmo que leia 20 números inteiros e armazene-os num 
    vetor. Armazene os números pares no vetor PAR e os números IMPARES 
    no vetor IMPAR. Deve-se no final mostrar os três vetores. */

    const numero = lerNumero(20); // Lê os 20 números
    const par = separarPar(numero); // Separa os números pares
    const impar = separarImpar(numero); // Separa os números ímpares
    const mensagem = construirMensagem5(numero, par, impar); // Constrói a mensagem final
    exibirMensagem5(mensagem); // Exibe a mensagem
}

function lerNumero(quantidade) {
    let numero = [];
    for (let i = 0; i < quantidade; i++) {
        numero.push(parseInt(prompt(`Informe o ${i + 1}º número:`)));
    }
    return numero;
}

function separarPar(numero) {
    let par = [];
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 === 0) {   // Verifica se o número é par
            par.push(numero[i]);
        }
    }
    return par;
}

function separarImpar(numero) {
    let impar = [];
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 !== 0) {   // Verifica se o número é ímpar
            impar.push(numero[i]);
        }
    }
    return impar;
}

function construirMensagem5(numero, par, impar) {
    let mensagem = "Todos os números:\n";

    // Exibe todos os números lidos
    for (let i = 0; i < numero.length; i++) {
        mensagem += numero[i];
        if (i === numero.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    // Exibe os números pares
    mensagem += "\n\nNúmeros pares:\n";
    for (let i = 0; i < par.length; i++) {
        mensagem += par[i];
        if (i === par.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    // Exibe os números ímpares
    mensagem += "\n\nNúmeros ímpares:\n";
    for (let i = 0; i < impar.length; i++) {
        mensagem += impar[i];
        if (i === impar.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    return mensagem;
}

function exibirMensagem5(mensagem) {
    alert(mensagem);
}