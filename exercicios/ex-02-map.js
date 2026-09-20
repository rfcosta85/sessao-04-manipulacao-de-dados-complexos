/*
    Objetivos:
    1- Acesse o array Veiculos utilizando o map;
    2- Retorne um novo array, criando uma nova chave no objeto chamada precoComIva (Leve em consideração o iva de 23%);
    3- Imprima o novo array com a chave e preços calculados.
*/

const veiculos = [
  { marca: "Toyota", modelo: "Corolla", ano: 2023, preco: 30000 },
  { marca: "Honda", modelo: "Nmax", ano: 2025, preco: 4500 },
  { marca: "Tesla", modelo: "Model 3", ano: 2024, preco: 42000 }
];

const resumoVeiculos = veiculos.map(veiculo => {
    return `${veiculo.marca} ${veiculo.modelo} ${veiculo.ano}`
})

console.log("Resumo de veículos do array original: ", resumoVeiculos);

const veiculosComIva = veiculos.map(veiculo => {
    const precoComIva = 1.23;
    return {
        marca: veiculo.marca,
        modelo: veiculo.modelo,
        ano: veiculo.ano,
        preco: veiculo.preco,
        precoComIva: veiculo.preco * precoComIva
    }
})

console.log("Resumo de veículos do arrau modificado: ", veiculosComIva);