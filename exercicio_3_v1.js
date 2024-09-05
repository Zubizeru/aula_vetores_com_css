function executarExercicio3_v1() {
    // Crie um algoritmo que leia um vetor de 10 letras, e diga quantas consoantes foram lidas e mostre essas consoantes.

    const letras = lerLetras(10);                    // Chama a função para ler 10 letras
    const consoantes = separarConsoantes(letras);           // Calcula a média das notas
    const mensagem = construirMensagem3(consoantes); // Chama a função para construir a mensagem com as notas e a média
    exibirMensagem3(mensagem);                     // Exibe a mensagem final
}

function lerLetras(quantidade) {
    let letras = [];
    for (let i = 0; i < quantidade; i++) {
        letras.push(prompt(`Informe a ${i + 1}ª letra:`).toLowerCase()); // Lê e armazena os valores no array `notas`
    }
    return letras;
}

function separarConsoantes(letras) {
    let consoantes = [];
    let mensagem = "";
    for (let i = 0; i < letras.length; i++) { // Verifica as letras que o usuário colocou; 
        if (!(letras[i] == 'a' ||            //Se o letra não uma vogal...
            letras[i] == 'e' ||              //...
            letras[i] == 'i' ||              //...
            letras[i] == 'o' ||              //...
            letras[i] == 'u')) {             //...
            consoantes.push(letras[i]);      //puxa para o vetor consoante.
        }
    }
    return consoantes;
}

function construirMensagem3(consoantes) {
    let mensagem = ``;
    mensagem += `Foram lidas ${consoantes.length} consoantes! \n`;  //A mensagem final; 

    for (let index = 0; index < consoantes.length; index++) { // Verifica as letras no vetor consoante;

        if (index === (consoantes.length - 1)) {  //Se for a ultima iteração...
            mensagem += consoantes[index] + ".";  //Vai colocar ponto depois do consoantes;
        } else {                                  //Se não for a ultima iteração...
            mensagem += consoantes[index] + ", "; //Vai colocar virgula e espaço depois do consoantes.
        }
    }
    return mensagem;
}

function exibirMensagem3(mensagem) {
    alert(mensagem);
}