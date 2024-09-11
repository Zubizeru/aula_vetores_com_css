/* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
mostre o salário líquido de todos, considerando 12% de INSS a descontar */
function executarExercicio4_v1() {
    let salarios = lerSalario(5);
    exibirSalarios(salarios);
}

function lerSalario(quantidade) {
    let salarios = [];
    for (let i = 0; i < quantidade; i++) {
        let salario
        do {
        salario = (parseFloat(prompt(`Informe o ${i + 1}° salário:`)));
        } while (isNaN(salario))
        salarios.push(salario)
        salarios[i] = salarios[i] - (salarios[i] * 12 / 100); // Calcula o salário líquido
    }
    return salarios;
}

function exibirSalarios(salarios) {
    let mensagem = "";
    for (let i = 0; i < salarios.length; i++) { // Use cal.length para acessar o tamanho do array
        mensagem += `O ${i + 1}° salário é: `;
        if (i === (salarios.length - 1)) {
            mensagem += `R$${salarios[i].toFixed(2)}.`; // Último elemento, adicione um ponto.
        } else {
            mensagem += `R$${salarios[i].toFixed(2)}; \n`; // Outros elementos, adicione vírgula e nova linha.
        }
    }
    alert(mensagem);
}