function Calcular() {
    let n1 = parseInt(document.getElementById('num1'))
    let n2 = parseInt(document.getElementById('num2'))
    let operação = document.getElementById('operação')
    let resultado;

    // validação para o usuário não digitar palavras, mas apenas números

    if (NaN(n1) && NaN(n2)) {
        alert("Somente números")
    }
    switch (operacao) {
        case 'Somar':
            resultado = n1 + n2
            alert (`o resultado da soma é: $(resultado)`)
        break;

        case 'Subtrair':
            resultado = n1 - n2
            alert (`o resultado da subtração é: $(resultado)`)
        break;

        case 'Multiplicar':
            resultado = n1 * n2
            alert (`o resultado da multiplicação é: $(resultado)`)
        break;

        case 'Dividir':
            resultado = n1 / n2
            alert (`o resultado da divisão é: $(resultado)`)
        break;

        default:
            alert("Opção inválida")
            break;

    }
}