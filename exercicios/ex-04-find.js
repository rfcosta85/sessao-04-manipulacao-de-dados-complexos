/*
    Objetivo: Encontrar o primeiro número maior que 10
 */

const numeros = [5, 8, 12, 4, 15, 3];

const primeiroMaiorQueDez = numeros.find(numero => numero > 10);

console.log("O primeiro número maior que 10 foi o: ", primeiroMaiorQueDez);