/**
 * Representa una Temperatura.
 * @constructor
 * @param {number} valor - El valor nominal de la temperatura.
 * @param {string} unidad - La unidad de la temperatura. Valores validos son: CELSIUS y FAHRENHEIT.
 */
exports.Temperatura = function (valor, unidad) {
    this.valor = valor;
    this.unidad = unidad;
};