const readline = require('readline');
var Pessoa = require('./pessoa.js');

var dadosArray = new Array();
var tempArrayDados;
var pessoa;
var totalImposto = 0;
var totalSalario = 0;
var totalGeral = 0;
var totalBonus = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\n >>> Insira os dados separados por ponto-e-virgula (;) e para cada novo registro pressione ENTER <<< \n' +
          '\n >>> EX: Tatiane;1500;30/01/2017;true (nome;salario;data;bonus) <<< \n' +
          '\n >>> Para enviar pressione CTRL + C <<< \n'
});

rl.prompt();

rl.on('line', (linha) => {
  dadosArray.push(linha);
});


rl.on('close', function () {

    console.log('\n');

    for (var i = 0; i < dadosArray.length; i++) {
        tempArray = dadosArray[i].split(';');
        pessoa = new Pessoa(tempArray[0], tempArray[1], tempArray[2], tempArray[3]);

        console.log(
            'Nome: ' + pessoa.getNome() + '; ' +
            'INSS: R$' + pessoa.valorInss().toFixed(2) + '; ' +
            'SegVida: R$' + pessoa.seguroVida().toFixed(2) + '; ' +
            'VR: R$' + pessoa.valeRefeicao().toFixed(2) + '; ' +
            'VT: R$' + pessoa.valeTransporte().toFixed(2) + '; ' +
            'CustoTotal: R$' + pessoa.custoTotal().toFixed(2)
        );

        // se tem bonus imprime o bonus da pessoa
        if(tempArray[3] === 'true') {
            console.log('Bonus: R$' + pessoa.bonusProducao().toFixed(2));
        }

        totalSalario += pessoa.getSalario();
        totalBonus += pessoa.bonusProducao();
        totalImposto += pessoa.valorInss() + pessoa.seguroVida() + pessoa.valeRefeicao() + pessoa.valeTransporte();
        totalGeral = totalSalario + totalImposto;
    }

    // se tem bonus imprime o total do bonus soma esta total ao total geral
    if (tempArray[3] === 'true') {
        console.log('Total Bonus: R$' + totalBonus);
        totalGeral += totalBonus;
    }

    console.log('Total Impostos: R$' + totalImposto);
    console.log('Total Salários: R$' + totalSalario.toFixed(2));
    console.log('Total Geral: R$' + totalGeral);
    console.log('\n');

    process.exit(0);
});
