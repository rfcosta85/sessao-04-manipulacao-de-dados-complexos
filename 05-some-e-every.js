const infracoes = [
  { id: 1, tipo: "Excesso de velocidade", status: "Pago" },
  { id: 2, tipo: "Estacionamento proibido", status: "Pendente" },
  { id: 3, tipo: "Uso do telemóvel", status: "Pago" },
  { id: 4, tipo: "Estacionamento proibido", status: "Pendente" }
];

const temInfracao = infracoes.some(infracao => infracao.status === "Pendente");

console.log(temInfracao ? 
    "Você possui uma ou mais infrações pendente, consulte o portal para mais informações" : 
    "Você não possui infrações pendentes")


const veiculos = [
  { marca: "Toyota", modelo: "Corolla", inspecaoValida: true },
  { marca: "Honda", modelo: "Nmax", inspecaoValida: true },
  { marca: "Tesla", modelo: "Model 3", inspecaoValida: false }
];

const todosInspecionados = veiculos.every(veiculo => veiculo.inspecaoValida == true);

console.log(todosInspecionados ? "Você não possui veículos com inspeção vencida." :
    "Atenção você possui um ou mais veículos com inspeção vencida!"
);