const request = require('supertest');
const server = require('../app');

describe("Temperatura Endpoint Tests", () => {
    test("Conversion de Celsius a Fahrenheit", async()=>{
        return request(server)
            .post('/temperatura/fahrenheit')
            .send({
                valor: 0,
                unidad: 'CELSIUS'
            }).expect(200).expect({ valor: 32, unidad: 'FAHRENHEIT' });
     });
     
     test("Unidad Invalida en Temperatura Original", async()=>{
        return request(server)
            .post('/temperatura/fahrenheit')
            .send({
                valor: 0,
                unidad: 'CELIUS'
            }).expect(400);
     });     

     test("Cantidad Invalida en Temperatura Original", async()=>{
        return request(server)
            .post('/temperatura/fahrenheit')
            .send({
                valor: 'A',
                unidad: 'CELSIUS'
            }).expect(400);
     });  
     
     test("Unidad Invalida en Unidad a Convertir", async()=>{
        return request(server)
            .post('/temperatura/fahrenhei')
            .send({
                valor: 0,
                unidad: 'CELSIUS'
            }).expect(400);
     });      
})