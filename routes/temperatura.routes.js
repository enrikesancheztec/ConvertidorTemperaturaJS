const router = require("express").Router();
const { check, param } = require('express-validator');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

let temperaturaController = require("../controllers/temperatura.controllers");

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.post("/temperatura/:unidadAConvertir", [
        check("valor").not().isEmpty().withMessage("Valor es obligatorio"),
        check("valor").isNumeric().withMessage("Valor debe ser numerico"),
        check("unidad").notEmpty().withMessage("Unidad es obligatorio"),
        check("unidad").isIn(["CELSIUS", "FAHRENHEIT"]).withMessage("Unidad solo acepta valores CELSIUS y FAHRENHEIT"),
        param("unidadAConvertir").toUpperCase().isIn(["CELSIUS", "FAHRENHEIT"]).withMessage("Unidad a convertir solo acepta valores CELSIUS y FAHRENHEIT")
    ], temperaturaController.postConvertir);

module.exports = router;