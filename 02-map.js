const precosAntigos = [2000, 3500, 5000];
const aumentoPercentual = 1.10;

const precosComAumento = precosAntigos.map(preco => { 
    return preco * aumentoPercentual; });

console.log("Preços Antigos:", precosAntigos);
console.log("Preços com Aumento:", precosComAumento);

