const condutoresNotificar = [
  { nome: "João Silva", email: "joao@example.com" },
  { nome: "Maria Santos", email: "maria@example.com" },
  { nome: "Pedro Costa", email: "pedro@example.com" }
];

condutoresNotificar.forEach((condutor, index) => {
    console.log(`${index + 1}: Email enviado para
        ${condutor.nome}, no seguinte endereço de email:
        ${condutor.email}`)
})