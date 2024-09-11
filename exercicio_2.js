// Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela.
function executarExercicio2() {
    let nota = [];
    let soma = 0;
    let mensagem = "Notas: ";

    // Leitura das notas
    for (let i = 0; i < 4; i++) {
        nota.push(parseFloat(prompt(`Informe a ${i + 1}ª nota:`)));
        soma += nota[i];
    }
    // Calculando a média
    let media = soma / 4;

    // Construção da mensagem 
    for (let i = 0; i < 4; i++) {
        mensagem += `${i + 1}° nota: ${nota[i]}`;
        if (i === nota.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    // Adiciona a média à mensagem
    mensagem += `\nMédia: ${media.toFixed(2)}`;

    alert(mensagem);
}