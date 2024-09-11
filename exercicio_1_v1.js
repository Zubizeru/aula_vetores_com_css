// Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.
function executarExercicio1_v1() {
    const numeros = lerNumeros(5);   // Chama a função para ler os números, o 5 é o parametro quantidade
    const mensagem = construirMensagem1(numeros); // Chama a função para construir a mensagem com os números
    exibirMensagem1(mensagem);        // Chama a função para exibir a mensagem
}

function lerNumeros(quantidade) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        numeros.push(parseInt(prompt("Informe um número:")));
    }
    return numeros;
}

function construirMensagem1(numeros) {
    let mensagem = "";
    for (let i = 0; i < numeros.length; i++) {
        if (i === numeros.length - 1) {
            mensagem += `${numeros[i]}.`;
        } else {
            mensagem += `${numeros[i]}, `;
        }
    }
    return mensagem;
}

function exibirMensagem1(mensagem) {
    alert(mensagem);
}
