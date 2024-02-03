const readlineSync = require('readline-sync')


console.log("Escolha uma das alternativas: ")

console.log("1 - Listar os salários minímos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")

const data = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
]

const dataIpca = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.5},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
    
]

const dataCrescimentoSalarial = [
    {crescimento: 0},
    {crescimento: 6.862745098039216},
    {crescimento: 14.12844036697248},
    {crescimento: 9.003215434083601},
    {crescimento: 6.784660766961652},
    {crescimento: 8.839779005524862},
    {crescimento: 11.6751269035533},
    {crescimento: 6.477272727272727},
    {crescimento: 1.814300960512273},
    {crescimento: 4.709418837675351},
]

const numeroEscolhido = readlineSync.question("Digite o numero da sua escolha: ")

switch (numeroEscolhido) {
case "1":

for (let i = 0; i < data.length; i++) {
    let ano = data[i].ano.toString();
    let salario = data[i].salario.toString();

    let labelAno = "Ano: "
    let labelSalario = "Salário mínimo: "

    console.log(labelAno.padEnd(25, ".") + ano)
    console.log(labelSalario.padEnd(25, ".") + "R$ " + salario + ",00")
}
    break;

case "2":

for (let i = 0; i < dataIpca.length; i++) {
    let ano2 = dataIpca[i].ano.toString();
    let ipca = dataIpca[i].ipca.toString();

    let labelAno1 = "Ano: "
    let labelIpca = "Inflação IPCA: "

    console.log(labelAno1.padEnd(25, ".") + ano2)
    console.log(labelIpca.padEnd(25, ".") + ipca + "%")
    
}
break;

case "3":
    
for (let i = 0; i < data.length && i < dataIpca.length && dataCrescimentoSalarial.length; i++) {
    let ano3 = dataIpca[i].ano.toString(); 
    let salario2 = data[i].salario.toString();
    let ipca2 = dataIpca[i].ipca.toString();
    if (dataCrescimentoSalarial[i] && dataCrescimentoSalarial[i].hasOwnProperty('crescimento')) {
        let crescimentoSalarial = parseFloat(dataCrescimentoSalarial[i].crescimento.toString());

        let labelAno3 = "Ano: ";
        let labelSalario2 = "Salário mínimo: ";
        let labelIpca2 = "IPCA: ";
        let labelCrescimentoSalarial = "Crescimento salarial: ";
    
        console.log(labelAno3.padEnd(40, ".") + ano3);
        console.log(labelSalario2.padEnd(40, ".") + "R$ " + salario2);
        console.log(labelIpca2.padEnd(40, ".") + ipca2 + "%") ;
        console.log(labelCrescimentoSalarial.padEnd(40, ".") + crescimentoSalarial.toFixed(2) + "%");
    } else {
        console.log("Dados de crescimento salarial não disponíveis para o ano " + ano3);
    }
    }
break;

default:
    console.log("Error: you need to type one of the three numbers")
}

