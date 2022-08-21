const {Temperatura} = require('../models/temperatura.models');

/**
 * Convierte una temperatura a la unidad a convertir
 * @param {Temperatura} temperatura - Objeto que contiene un valor y una unidad que representan a una temperatura
 * @param {string} unidad - La unidad a convertir. Valores validos son: CELSIUS y FAHRENHEIT.
 * @returns {Temperatura} - Objeto que contiene un valor y una unidad que representan a la temperatura convertida
 */
exports.convertir = function(temperatura, unidadAConvertir) {
    if (temperatura.unidad == "CELSIUS" && unidadAConvertir == "FAHRENHEIT") {
        let valorConvertido = (temperatura.valor * 9/5) + 32;
        return new Temperatura(valorConvertido, unidadAConvertir);
    } else if (temperatura.unidad == "FAHRENHEIT" && unidadAConvertir == "CELSIUS") {
        let valorConvertido = (temperatura.valor - 32) * 5/9;
        return new Temperatura(valorConvertido, unidadAConvertir);
    } else {
        return new Temperatura(temperatura.valor, unidadAConvertir);
    }        
}