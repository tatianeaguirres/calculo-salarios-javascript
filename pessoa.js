
module.exports = function Pessoa(nome, salario, data, bonus) {

    var clazz = {

        getNome: function() {
            return nome;
        },

        getSalario: function() {
            return parseInt(salario);
        },

        getData: function() {
            return data;
        },

        getBonus: function() {
            return bonus;
        },

        bonusProducao: function() {
            if (bonus === 'true') {
              return parseInt(this.getSalario() * .05);
            };
        },

        valorInss: function() {
            return parseInt(this.getSalario() * .10);
        },

        seguroVida: function() {
            return parseInt(this.getSalario() * .15);
        },

        valeRefeicao: function() {
            return parseInt(this.getSalario() * .11);
        },

        valeTransporte: function() {
            return parseInt(this.getSalario() * .05);
        },

        custoTotal: function() {
            return this.getSalario() + this.valorInss() + this.seguroVida() + this.valeRefeicao() + this.valeTransporte();
        }
    };

    return clazz;
};
