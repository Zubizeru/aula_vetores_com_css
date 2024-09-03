function executarExercicio2() {
/* Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela. */
    let nota = [];
    let soma = 0;
    let mensagem = "Notas: ";

    // Leitura das notas
    for (let i = 0; i < 4; i++) {                                  //Esse loop é define a quantidade de notas pedidas ao usuário.
        nota.push(parseFloat(prompt(`Informe a ${i + 1}ª nota:`)));//Lê e armazena os valores que o usuário colocou no array nota.
        soma += nota[i];                                           //soma = soma + [i] , ele calcula a soma das notas à medida que são inseridas.
    }
    // Calculando a média
    let media = soma / 4;

    // Construção da mensagem 
    for (let i = 0; i < 4; i++) {               // Verifica as notas que o usuário colocou.
        mensagem += `${i + 1}° nota: ${nota[i]}`; //Exibe as notas em uma string para serem apresentadas ao usuário na frente da string da mensagem.
        if (i === nota.length - 1) {            //Se for a ultima iteração.
            mensagem += ".";                    //Vai colocar ponto.
        } else {                                //Se não for a ultima iteração.
            mensagem += ", ";                   //Vai colocar virgula e espaço.
        }
    }

    // Adiciona a média à mensagem
    mensagem += `\nMédia: ${media.toFixed(2)}`;

    alert(mensagem);
}