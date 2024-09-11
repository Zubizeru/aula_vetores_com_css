// Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela.
// Função principal que executa o exercício de cálculo de média de notas
function executarExercicio2_v1() {
    const notas = lerNotas(4);                     // Lê as notas informadas pelo usuário
    const media = calcularMedia(notas);             // Calcula a média das notas
    exibirNotaseMedia(notas, media);                // Constrói e exibe a mensagem final com notas e média
}

// Função para capturar as notas do usuário
function lerNotas(quantidade) {
    let notas = [];
    for (let i = 0; i < quantidade; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Informe a ${i + 1}ª nota:`));
        } while (isNaN(nota)); // Repetir até que o usuário insira um número válido
        notas.push(nota); // Adiciona a nota ao array
    }
    return notas; // Retorna o array com as notas informadas
}

// Função que calcula a média de um array de notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]; // Soma todas as notas
    }
    return soma / notas.length; // Retorna a média
}

// Função para construir e exibir a mensagem de exibição com as notas e a média
function exibirNotaseMedia(notas, media) {
    let mensagem = "Notas: ";

    for (let i = 0; i < notas.length; i++) {
        mensagem += `${i + 1}ª nota: ${notas[i].toFixed(2)}`; // Adiciona cada nota à mensagem com 2 casas decimais

        // Condições para adicionar ponto ou vírgula entre as notas
        if (i === notas.length - 1) {
            mensagem += "."; // Última nota, adiciona ponto final
        } else {
            mensagem += ", "; // Adiciona vírgula e espaço entre as notas
        }
    }

    mensagem += `\nMédia: ${media.toFixed(2)}`; // Adiciona a média à mensagem

    alert(mensagem); 