function executarExercicio3() {
    // Crie um algoritmo que leia um vetor de 10 letras, e diga quantas consoantes foram lidas e mostre essas consoantes.
    let letras = [];
    let consoantes = [];
    let mensagem = "";

    for (let i = 0; i < 10; i++) { //Esse loop é define a quantidade de letras pedidas ao usuário;
        let val = prompt(`Informe a ${i + 1}ª letra:`); //Lê e armazena as letras que o usuário colocou no let val(valor);
        letras.push(val.toLowerCase()); // Puxa para o vetor letras e deixa as letras no diminutivo;
    }

    mensagem += `Você colocou ${letras.length} números: \n`;  //A mensagem final; 

    for (let i = 0; i < letras.length; i++) { // Verifica as letras no vetor consoante;

        if (i === (letras.length - 1)) {  //Se for a ultima iteração...
            mensagem += letras[i] + ".";  //Vai colocar ponto depois do consoantes;
        } else {                                  //Se não for a ultima iteração...
            mensagem += letras[i] + ", "; //Vai colocar virgula e espaço depois do consoantes.
        }
    }

    for (let i = 0; i < letras.length; i++) { // Verifica as letras que o usuário colocou; 
        if (!(letras[i] == 'a' ||            //Se o letra não uma vogal...
            letras[i] == 'e' ||              //...
            letras[i] == 'i' ||              //...
            letras[i] == 'o' ||              //...
            letras[i] == 'u')) {             //...
            consoantes.push(letras[i]);      //puxa para o vetor consoante.
        }
    }

    mensagem += `\n Foram lidas ${consoantes.length} consoantes: \n`;  //A mensagem final; 

    for (let j = 0; j < consoantes.length; j++) { // Verifica as letras no vetor consoante;

        if (j === (consoantes.length - 1)) {  //Se for a ultima iteração...
            mensagem += consoantes[j] + ".";  //Vai colocar ponto depois do consoantes;
        } else {                                  //Se não for a ultima iteração...
            mensagem += consoantes[j] + ", "; //Vai colocar virgula e espaço depois do consoantes.
        }
    }



    // Exibição da mensagem
    alert(mensagem);

}

