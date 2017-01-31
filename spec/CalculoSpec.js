var Pessoa = require('../pessoa.js');

describe("Calculo", function() {

    var pessoa1;
    var pessoa2;
    var pessoaComBonus;
    var salarioTotal = 0;
    var totalImpostos = 0;
    var totalBonus = 0;

    beforeEach(function() {
        pessoa1 = new Pessoa('Jon Malkovich', '1500', '10/01/2017');
        pessoa2 = new Pessoa('Rafael Malenotti', '2000', '05/03/2017');
        pessoa3 = new Pessoa('Tatiane Aguirres', '2000', '30/01/2017', 'true');
    });

    it("Salario total deve ser R$ 3500", function() {
        salarioTotal = pessoa1.getSalario() + pessoa2.getSalario();

        expect(salarioTotal).toEqual(3500);
    });

    it("Total impostos deve ser R$ 1435", function() {
        totalImpostos =
            pessoa1.valorInss() + pessoa1.seguroVida() + pessoa1.valeRefeicao() + pessoa1.valeTransporte() +
            pessoa2.valorInss() + pessoa2.seguroVida() + pessoa2.valeRefeicao() + pessoa2.valeTransporte();

        expect(totalImpostos).toEqual(1435);
    });

    it("Total geral deve ser R$ 4935", function() {
        var totalGeral = salarioTotal + totalImpostos;
        expect(totalGeral).toEqual(4935);
    });

    it("Total bonus deve ser R$ 100", function() {
        var totalBonus = pessoa3.bonusProducao();
        expect(totalBonus).toEqual(100);
    });
});
