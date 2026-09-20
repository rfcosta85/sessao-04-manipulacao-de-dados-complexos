const utilizadorIMT = {
  id: 1042,
  nome: "João Silva",
  email: "joao@example.com",
  status: "Ativo"
};

const utilizadorAtualizado = {
    ...utilizadorIMT,
    email: "Joao.silva@imt.pt",
    ultimoAcesso: "05-07-2025"
};

console.log("Objeto Original: ", utilizadorIMT);
console.log("Objeto Modificado: ", utilizadorAtualizado);


const frotaGasolina = [
  { id: 1, modelo: "Corolla", tipo: "Combustão" },
  { id: 2, modelo: "Golf", tipo: "Combustão" }
];

const frotaEletrica = [
  { id: 3, modelo: "Model 3", tipo: "Elétrico" },
  { id: 4, modelo: "Leaf", tipo: "Elétrico" }
];

const frotaCompleta = [
    {id: 0, modelo: "Nmax (Moto)", tipo: "Combustão"},
    ...frotaGasolina,
    ...frotaEletrica
];

console.log("Frota de veículos atualizada:", frotaCompleta);


const veiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    cor: "Prata",
    proprietario: "João Silva",
};

const veiculoAtualizado = {
    ...veiculo,
    proprietario: "Luís Montenegro",
    data_da_operacao: "12-03-2021"
};

console.log("Veículo Atualizado: ", veiculoAtualizado);

const notasPrimeiroSemestre = [14, 16, 12];
const notasSegundoSemestre = [18, 15];

const todasAsNotas = [
    ...notasPrimeiroSemestre,
    ...notasSegundoSemestre
]

console.log("Notas finais: ", todasAsNotas);

const todasAsNotasAtualizadas = [
    ...notasPrimeiroSemestre,
    ...notasSegundoSemestre.slice(0,1),
    13,
    ...notasSegundoSemestre.slice(1)
];

console.log("Lista Atualizada: ", todasAsNotasAtualizadas);