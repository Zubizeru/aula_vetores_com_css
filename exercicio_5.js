function executarExercicio5() {
    /*Crie um algoritmo que leia 20 números inteiros e armazene-os num 
    vetor. Armazene os números pares no vetor PAR e os números IMPARES 
    no vetor impar. Deve-se no final mostrar os três vetores */

    let impar = [];
    let numero = [];
    let par = [];
    let mensagem = `Considerando os 12% de INSS descontados: \n`;

    // Leitura das notas;
    for (let i = 0; i < 20; i++) {
        numero.push(parseInt(prompt(`Informe o ${i + 1}ª salário:`)));
    }

    // Verificação de par ou impar;
    for (let i = 0; i < numero.length; i++) { // Verifica os números que o usuário colocou; 
        if (numero[i] / 2 == 0) {             // Se número for 
            impar.push(numero[i]);            // Puxa para o vetor impar;
        } else {                              // Se não...
        par.push(numero[i]);                 // Puxa para o vetor par;
        }
    }

    // Construção da mensagem 
    for (let i = 0; i < 5; i++) {                      // Verifica os sálarios que o usuário colocou.
        mensagem += `O ${i + 1}° sálario é:`;          //Exibe os salarios em uma string para serem apresentadas ao usuário na frente da string da mensagem.
        if (i === (cal.length - 1)) {                  //Se for a ultima iteração...
            mensagem += ` R$${cal[i].toFixed(2)}.`;    //Vai colocar ponto.
        } else {                                       //Se não for a ultima iteração...
            mensagem += ` R$${cal[i].toFixed(2)}; \n`; //Vai colocar virgula e espaço.
        }
    }

    alert(mensagem);
}