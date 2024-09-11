// Crie um algoritmo que leia um vetor de 10 letras, e diga quantas consoantes foram lidas e mostre essas consoantes.
function executarExercicio3_v1() {
    // Função principal que executa o exercício
    const letras = lerLetras(10);                    // Chama a função para ler as letras
    const consoantes = separarConsoantes(letras);    // Separa as consoantes das letras
    exibirConsoantes(consoantes);   // Constrói a mensagem com as consoantes
}

function lerLetras(quantidade) {
    let letras = [];
    let letra;
    for (let i = 0; i < quantidade; i++) {
        {
            letra = prompt(`Informe a ${i + 1}ª letra (somente uma letra):`).toUpperCase();
        }
        letras.push(letra); // Adiciona a letra ao array
    }
    return letras;
}

function separarConsoantes(letras) {
    let consoantes = [];
    for (let i = 0; i < letras.length; i++) {
        if (!(letras[i] === 'A' ||
        letras[i] === 'E' ||
        letras[i] === 'I' ||
        letras[i] === 'O' ||
        letras[i] === 'U')) {
            consoantes.push(letras[i]); // Adiciona a letra ao array de consoantes
        }
    }
    return consoantes;
}

function exibirConsoantes(consoantes) {
    let mensagem = `Foram lidas ${consoantes.length} consoantes!\n`;

    for (let i = 0; i < consoantes.length; i++) {
        mensagem += consoantes[i];
        if (i === consoantes.length - 1) {
            mensagem += "."; // Adiciona ponto no final da última consoante
        } else if (i === consoantes.length - 2) {
            mensagem += " e "; // Adiciona "e" entre os dois últimos números
        } else {
            mensagem += ", "; // Adiciona vírgula e espaço entre as consoantes
        }
    }

    alert(mensagem); // Exibe a mensagem ao usuário diretamente no alert
}