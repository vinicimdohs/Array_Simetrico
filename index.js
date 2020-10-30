// EXERCISE 2 – Lógica de Programação
// Problema: Dado um array de inteiros, verificar se este é simétrico.

// EXEMPLOS:
// [] -> É SIMÉTRICO
// [0] -> É SIMÉTRICO
// [3] -> NÃO É SIMÉTRICO [2,-2] -> É SIMÉTRICO [2,2] -> NÃO É SIMÉTRICO [2,0,-2] -> É
// SIMÉTRICO
// [2,2,-2] -> NÃO É SIMÉTRICO [3,2,0,-2, -3] -> É SIMÉTRICO
// [3,2,0,-3, -2] -> NÃO É SIMÉTRICO

// Escreva um código que recebe um array (vazio ou não) de inteiros, e devolve se aquele
// array é simétrico ou não. Você pode utilizar a linguagem de programação que tenha mais
// familiaridade, ou mesmo pseudocódigo.
// Enviar os arquivos com a resposta OU indicar no e-mail onde acessar o código desenvolvido
const {arraySimetrico} = require('./arraySimetrico');

const array = [3,2,0,-2, -3];

const resposta = arraySimetrico(array);

console.log(resposta);

