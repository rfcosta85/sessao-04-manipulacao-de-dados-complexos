/* 
    Objetivo, exibir no console a lista das infrações que o condutor ainda não realizou o pagamento
*/

const infracoes = [
  { id: 1, tipo: "Excesso de velocidade", valor: 150, status: "Pendente" },
  { id: 2, tipo: "Estacionamento proibido", valor: 60, status: "Pago" },
  { id: 3, tipo: "Uso do telemóvel", valor: 120, status: "Pendente" }
];

const infracoesPendentes = infracoes.filter(infracao => infracao.status === "Pendente");

console.log("Lista de infrações a pagar do condutor: ", infracoesPendentes);