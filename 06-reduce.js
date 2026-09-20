const infracoes = [
  { tipo: "Excesso de velocidade", valor: 150 },
  { tipo: "Estacionamento proibido", valor: 60 },
  { tipo: "Uso do telemóvel", valor: 120 }
];

const totalAPagar = infracoes.reduce((acumulador, infracao) => {
    return acumulador + infracao.valor;
}, 0)

console.log("O total a pagar em coimas será de: ", 
    totalAPagar.toLocaleString("pt", {style: "currency", currency: "EUR"}))
   
// Agrupamento de veículos por tipo 
const veiculos = [
  { modelo: "Corolla", tipo: "Carro" },
  { modelo: "Nmax", tipo: "Moto" },
  { modelo: "Model 3", tipo: "Carro" },
  { modelo: "CB500", tipo: "Moto" }
];

const agruparPorTipo = veiculos.reduce((acumulador, veiculo) => {
    const tipo = veiculo.tipo;

    if(!acumulador[tipo]) {
        acumulador[tipo] = [];
    }

    acumulador[tipo].push(veiculo.modelo);

    return acumulador;
}, {});

console.log("Veículos Agrupados: ", agruparPorTipo);