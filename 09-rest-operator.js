const veiculo = {
  marca: "Honda",
  modelo: "Nmax",
  ano: 2025,
  cor: "Verde",
  combustivel: "Gasolina"
};

const {marca, modelo, ...detalhes} = veiculo;

console.log("Marca: ", marca);
console.log("Modelo: ", modelo);
console.log("Detalhes do veículo: ", detalhes);

// Rest Operator com arrays

const notas = [18, 15, 14, 12, 19];

const notasOrdenadas = [...notas].sort((a,b) => b-a);

const [melhorNota, ...outrasNotas] = notasOrdenadas;

console.log("Melhor Nota:",melhorNota);  
console.log("Outras Notas:",outrasNotas); 