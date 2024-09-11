// Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.  
function executarExercicio1() {
    let num = [];
    let mensagem = "";

    // Leitura dos números nos espaços
    for (let i = 0; i < 5; i++) {              // Esse loop define quantos números vão ser pedidos ao usuario
        num.push(prompt("Informe um número:"));// Os números são pedidos e puxados ao array num
    }

    // Construção da mensagem
    for (let i = 0; i < 5; i++) {     // Formata as números que o usuário colocou
        if (i === num.length - 1) {   // Se for o ultima iteração
            mensagem += `${num[i]}.`; // Adiciona ponto no último número
        } else {                      // Se nao for a ultima iteração
            mensagem += `${num[i]}, `;// Adiciona vírgula e espaço
        }
    }

    alert(mensagem);
}



