const veiculos = [
  { marca: "Toyota", modelo: "Corolla", ano: 2023, tipo: "Carro" },
  { marca: "Honda", modelo: "Nmax", ano: 2025, tipo: "Moto" },
  { marca: "Tesla", modelo: "Model 3", ano: 2021, tipo: "Carro" },
  { marca: "BMW", modelo: "G310", ano: 2024, tipo: "Moto" }
];

const apenasMoto = veiculos.filter(veiculo => veiculo.tipo === "Moto");

console.log("Motos do Stand: ", apenasMoto);

const veiculosComDoiAnos = veiculos.filter(veiculo => veiculo.ano >= 2024);

console.log("Veículo com no máximo dois anos de fabricação: ", veiculosComDoiAnos);