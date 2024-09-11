// Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela.
function executarExercicio2_v1() {
    const nota = lerNota(4);
    const media = calcularMedia(nota);
    const mensagem = construirMensagem2(nota, media);
    exibirMensagem2(mensagem);
}

function lerNota(quantidade) {
    let nota = [];
    for (let i = 0; i < quantidade; i++) {
        nota.push(parseFloat(prompt(`Informe a ${i + 1}ª nota:`)));
    }
    return nota;
}

function calcularMedia(nota) {
    let soma = 0;
    for (let i = 0; i < nota.length; i++) {
        soma += nota[i];
    }
    return soma / nota.length;
}

function construirMensagem2(nota, media) {
    let mensagem = "Notas: ";
    for (let i = 0; i < nota.length; i++) {
        mensagem += `${i + 1}ª nota: ${nota[i].toFixed(2)}`;
        if (i === nota.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }
    mensagem += `\nMédia: ${media.toFixed(2)}`;
    return mensagem;
}

function exibirMensagem2(mensagem) {
    alert(mensagem);
}