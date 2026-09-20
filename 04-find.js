const veiculos = [
  { id: 101, matricula: "AA-00-AA", marca: "Toyota", modelo: "Corolla" },
  { id: 102, matricula: "BB-11-BB", marca: "Honda", modelo: "Nmax" },
  { id: 103, matricula: "CC-22-CC", marca: "Tesla", modelo: "Model 3" }
];

const matriculaProcurada = "BB-11-BB9";

const veiculoEncontrado = veiculos.find(veiculo => veiculo.matricula === matriculaProcurada);

console.log("Resultado da busca: ", 
    veiculoEncontrado ? veiculoEncontrado : "Nenhum veículo encontrado com a matrícula especificada.");

