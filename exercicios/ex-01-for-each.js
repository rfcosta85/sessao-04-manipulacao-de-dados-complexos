/* Objetivos 

    1. Calcular as horas extra de cada funcionário 
    (considerando jornada padrão de 8h/dia);

    2. Categorizar se o funcionário tem banco de horas a receber ou se 
    esteve em falta;

    3. Atualizar um sumário financeiro global de horas extra a serem pagas.
*/

const registosPonto = [
  { funcionario: "Ana Sousa", horasTrabalhadas: [8, 9, 8, 10, 8] },   
  { funcionario: "Carlos Lima", horasTrabalhadas: [8, 7, 8, 6, 8] },  
  { funcionario: "Marta Rocha", horasTrabalhadas: [9, 9, 9, 9, 9] },
  { funcionario: "Pedro Manuel", horasTrabalhadas: [8, 8, 8, 8, 8] }     
];

const JORNADA_SEMANAL_PADRAO = 40;
let totalHorasExtrasEmpresa = 0;

console.log("=== RELATÓRIO PROCESSADO VIA FOREACH ===");

// 1. Primeiro forEach: Percorre cada funcionário
registosPonto.forEach((registo, index) => {
  let horasTotaisNaSemana = 0;

  // 2. forEach aninhado: Soma as horas trabalhadas nos dias da semana
  registo.horasTrabalhadas.forEach(horasDoDia => {
    horasTotaisNaSemana += horasDoDia;
  });

  // Lógica de negócio dentro do forEach
  if (horasTotaisNaSemana > JORNADA_SEMANAL_PADRAO) {
    const horasExtras = horasTotaisNaSemana - JORNADA_SEMANAL_PADRAO;
    totalHorasExtrasEmpresa += horasExtras;
    
    console.log(`[${index + 1}] ${registo.funcionario}: ${horasTotaisNaSemana}h registradas (+${horasExtras}h extra)`);
  } else if (horasTotaisNaSemana < JORNADA_SEMANAL_PADRAO) {
    const horasFalta = JORNADA_SEMANAL_PADRAO - horasTotaisNaSemana;
    
    console.log(`[${index + 1}] ${registo.funcionario}: ${horasTotaisNaSemana}h registradas (-${horasFalta}h devidas)`);
  } else {
    console.log(`[${index + 1}] ${registo.funcionario}: ${horasTotaisNaSemana}h registradas (Jornada cumprida)`);
  }
});

console.log("----------------------------------------");
console.log(`Total acumulado de horas extra a pagar: ${totalHorasExtrasEmpresa}h`);