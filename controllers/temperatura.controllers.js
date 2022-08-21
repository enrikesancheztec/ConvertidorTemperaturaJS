const temperaturaService = require('../services/temperatura.services');
const { validationResult } = require('express-validator');

/**
 * Procesa el request POST para convertir una temperatura
 * @param {Request} req - Request que contiene la URL que incluye la unidad a convertir y el body que incluye la temperatura original
 * @param {Response} res - Response que en caso exitoso retornara la temperatura convertida y status 200, o regresara un error 400 en caso de que una de las entradas sea invalida
 */
exports.postConvertir = function (req, res) {
    let result = validationResult(req);

    if (result.errors.length > 0) {
        res.status(400).json({ success: false, error: result });
    } else {
        let tempraturaOriginal = req.body;
        let unidadAConvertir = req.params.unidadAConvertir.toUpperCase();
        let temperaturaConvertida = temperaturaService.convertir(tempraturaOriginal, unidadAConvertir);
        res.json(temperaturaConvertida).status(200);
    }    
};