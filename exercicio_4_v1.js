/* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
mostre o salário líquido de todos, considerando 12% de INSS a descontar */
function executarExercicio4_v1() {
    let salario = lerSalario(5);
    let mensagem = construirMensagem4(salario);
    alert(mensagem);
}

function lerSalario(quantidade) {
    let salario = [];
    for (let i = 0; i < quantidade; i++) {
        salario.push(parseFloat(prompt(`Informe o ${i + 1}° salário:`)));
        salario[i] = salario[i] - (salario[i] * 12 / 100); // Calcula o salário líquido
    }
    return salario;
}

function construirMensagem4(salario) {
    let mensagem = "";
    for (let i = 0; i < salario.length; i++) { // Use cal.length para acessar o tamanho do array
        mensagem += `O ${i + 1}° salário é: `;
        if (i === (salario.length - 1)) {
            mensagem += `R$${salario[i].toFixed(2)}.`; // Último elemento, adicione um ponto.
        } else {
            mensagem += `R$${salario[i].toFixed(2)}; \n`; // Outros elementos, adicione vírgula e nova linha.
        }
    }
    return mensagem;
}
