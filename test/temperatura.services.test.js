const service = require('../services/temperatura.services');
const {Temperatura} = require('../models/temperatura.models');

describe("Temperatura Service Tests", () => {
    test("Conversion de Celsius a Fahrenheit", () => {
        // GIVEN
        let temperaturaOriginal = new Temperatura(0, "CELSIUS");

        // WHEN
        let temperaturaConvertida = service.convertir(temperaturaOriginal, "FAHRENHEIT");

        // THEN
        expect(temperaturaConvertida.valor).toBe(32);
        expect(temperaturaConvertida.unidad).toBe("FAHRENHEIT");
    });

    test("Conversion de Fahrenheit a Celsius", () => {
        // GIVEN
        let temperaturaOriginal = new Temperatura(32, "FAHRENHEIT");
    
        // WHEN
        let temperaturaConvertida = service.convertir(temperaturaOriginal, "CELSIUS");
    
        // THEN
        expect(temperaturaConvertida.valor).toBe(0);
        expect(temperaturaConvertida.unidad).toBe("CELSIUS");
    });    

    test("Conversion de Celsius a Celsius", () => {
        // GIVEN
        let temperaturaOriginal = new Temperatura(0, "CELSIUS");

        // WHEN
        let temperaturaConvertida = service.convertir(temperaturaOriginal, "CELSIUS");

        // THEN
        expect(temperaturaConvertida.valor).toBe(0);
        expect(temperaturaConvertida.unidad).toBe("CELSIUS");
    }); 
    
    test("Conversion de Fahrenheit a Fahrenheit", () => {
        // GIVEN
        let temperaturaOriginal = new Temperatura(32, "FAHRENHEIT");

        // WHEN
        let temperaturaConvertida = service.convertir(temperaturaOriginal, "FAHRENHEIT");

        // THEN
        expect(temperaturaConvertida.valor).toBe(32);
        expect(temperaturaConvertida.unidad).toBe("FAHRENHEIT");
    });      
})