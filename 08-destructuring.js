// Método tradicional
const utilizador = { nome: "João Silva", idade: 30, email: "joao@example.com" };

// const nome = utilizador.nome;
// const idade = utilizador.idade;

// Utilizando o Destructuring

const {nome, idade , email} = utilizador;

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Email: ", email);

const {nome: firstName, lastName = "Silva", email: correioEletronico} = utilizador;
console.log("-----------------------------------------");
console.log("firstName: ", firstName);
console.log("lastName: ", lastName);
console.log("correioEletronico: ", correioEletronico);

console.log("-----------------------------------------");
console.log("Objeto Original: ", utilizador);

// Exemplo com Arrays

const marcas = ["Toyota", "Honda", "Tesla", "BMW"];
const [primeiraMarca, segundaMarca] = marcas;

console.log("Primeira Marca:", primeiraMarca);
console.log("Segunda Marca:", segundaMarca);

const [primeiro, , terceiro] = marcas
console.log("Primeiro:", primeiro);
console.log("Terceiro:", terceiro);

let a = "Diesel";
let b = "Gasolina";

[a, b] = [b, a];
console.log("Combustível:",a);
console.log("Combustível:",b);