const nome = 'Luiz Felipe';
const sobrenome = 'Araújo';
const idade = 20;
const peso = 77;
const altura = 1.79;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);