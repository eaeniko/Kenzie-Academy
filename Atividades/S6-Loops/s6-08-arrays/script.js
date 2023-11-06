// Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.

function stringMin(string) {
    let stringEmArray = []
    if (string.length < 5) {
        return 'Digite algo maior que 5 caracteres';
    }
    for (let i = 0; i < string.length; i++) {
        stringEmArray.push(string[i]);
    }
    return stringEmArray;
}
console.log(stringMin('2'));

// Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:
// let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠


function arrayNumber(tipoNumber) {
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
   if (typeof(tipoNumber) === 'number') {
     if(tipoNumber > arr.length) {
        return 'valor nao encontrado'
    } else {
        return arr[tipoNumber];
    }
   }
   return 'Digite um numero'
}
console.log(arrayNumber(13));

// Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro.

// Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.

// Caso seja par retorne: "O valor encontrado nesta posição é par",
// Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".


function ehParOuImpar(number) {
    let numerosDoArray = [10,11,12,13,14,15,16,17,18,19,20];

    if (!Number.isInteger(number) || number < 0 || number > numerosDoArray.length) return 'O valor nao é um numero correto.'
    if (numerosDoArray[number] % 2 === 0) {
        return `Posicao do array ${numerosDoArray[number]}. O valor encontrado nesta posição é par`
    } else {
        return `Posicao do array ${numerosDoArray[number]}. O valor encontrado nesta posição é impar`
    }

        
// if (typeof(number) === 'number') {
//     let intNumber = parseInt(number);
//     if (numerosDoArray[intNumber] % 2 === 0) {
//         return `Posicao do array ${numerosDoArray[intNumber]}. O valor encontrado nesta posição é par`
//     } else {
//         return `Posicao do array ${numerosDoArray[intNumber]}. O valor encontrado nesta posição é impar`
//     }
// }
    
}

console.log(ehParOuImpar(5));

// Dado o array de nomes:
// ⁠let nomes = ["Pedro", "Rafael", "José"]⁠

// Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.

// Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.

// Use este formato: "O nome x é o maior da lista";

let nomes = ["Pedro", "Rafael", "José"];
function listOfNames(nomesList) {
    let nomeAnterior = 0;
    let nomeMaior;
    for (let i = 0; i < nomesList.length; i++) {
       if (nomesList[i].length > nomeAnterior) {
        nomeMaior = nomesList[i];
       }
        nomeAnterior = nomesList[i].length;
    }
    return `O nome ${nomeMaior} é o maior da lista`
}

console.log(listOfNames(nomes));

// Dado o array de números como exemplo:
// let numeros = [1,4,6,9,11,8]


// Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.

// Use a variável para testar se o valor da soma é um múltiplo de 2.

// Se sim, retorne: "A soma é um múltiplo de 2".
// Caso contrário: "A soma não é um múltiplo de 2"

let numeros = [1,4,6,9,11,8]
function multiploDe2(listaNumeros) {
    let somaDosNumeros = listaNumeros.slice(-2)[0] + listaNumeros.slice(-1)[0];
    
    if (somaDosNumeros % 2 === 0) {
        return 'A soma é um múltiplo de 2'
    }
    else {
        return 'A soma não é um múltiplo de 2'
    }
}

console.log(multiploDe2(numeros));

// Dado o array de nomes como exemplo:
// ⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠

// Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.

// Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.

// Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.

// Lembre-se de normalizar os dados antes de testar.

// Caso os valores sejam iguais, retorne: "Acertei".
// Caso não sejam, retorne: "Não é quem eu pensava"

let listaDeNomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

function parametroDuplo(nomeLista, nome, posicao) {
    let posicaoCorreta = parseInt(posicao);
    let nomeTestado ='';

    if (posicaoCorreta >= 0 && posicaoCorreta < nomeLista.length) {
        for (let i = 0; i < nomeLista[posicaoCorreta].length; i++) {
            if(nome[i] === nomeLista[posicaoCorreta][i]) {
                nomeTestado += nome[i];
            }
        }
    } else {
        return 'Digite um numero valido'
    }
    if (nomeTestado === nome) {
        return 'Acertei'
    } else {
        return 'Não é quem eu pensava'
    }
}

console.log(parametroDuplo(listaDeNomes, 'Raquel', 10));

// Dado dois arrays numéricos como exemplo.
// ⁠let numeros = [1,2,3,4,5,6,10,7]
// ⁠let outrosNumeros = [5,7,9,4,2,3,9]

// Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.

// Após identificar o maior array, retorne o último elemento do array.

// Use este formato: "A maior lista é a lista cujo último número é: x"

let arrayNumeros = [1,2,3,4,5,6,10,30]
let arrayNumeros2 = [5,7,9,4,2,3,9]

function compararArray (lista1, lista2) {
  if(lista1.length > lista2.length) {
    return `A maior lista é a lista cujo último número é: ${lista1.slice(-1)[0]}`
  } else {
    return `A maior lista é a lista cujo último número é: ${lista2.slice(-1)[0]}`
  }
}

console.log(compararArray(arrayNumeros, arrayNumeros2));