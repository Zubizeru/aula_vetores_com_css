function executarExercicio4_v1() {
    /* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
    mostre o salário líquido de todos, considerando 12% de INSS a descontar */
    const cal = lerSalario(5);
    const mensagem = construirMensagem4(cal);
    exibirMensagem4(mensagem);
}

function lerSalario(quantidade) {
    let salario = [];
    let cal = [];
    for (let i = 0; i < quantidade; i++) {
        salario.push(parseFloat(prompt(`Informe o ${i + 1}° salário:`)));
        cal[i] = salario[i] - (salario[i] * 12 / 100); // Calcula o salário líquido
    }
    return cal;
}

function construirMensagem4(cal) {
    let mensagem = "";
    for (let i = 0; i < cal.length; i++) { // Use cal.length para acessar o tamanho do array
        mensagem += `O ${i + 1}° salário é: `;
        if (i === (cal.length - 1)) {
            mensagem += `R$${cal[i].toFixed(2)}.`; // Último elemento, adicione um ponto.
        } else {
            mensagem += `R$${cal[i].toFixed(2)}; \n`; // Outros elementos, adicione vírgula e nova linha.
        }
    }
    return mensagem;
}

function exibirMensagem4(mensagem) {
    alert(mensagem);
}