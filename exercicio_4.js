function executarExercicio4() {
    /* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
 mostre o salário líquido de todos, considerando 12% de INSS a descontar */
    let salario = [];
    let cal = [];
    let mensagem = `Considerando os 12% de INSS descontados: \n`;

    // Leitura das notas
    for (let i = 0; i < 5; i++) {
        salario.push(prompt(`Informe o ${i + 1}ª salário:`));
        cal[i] = parseFloat(salario[i] - (salario[i] * 12 / 100))
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


