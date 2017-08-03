
const expect = require('chai').expect
const platzom = require('..').default; //Toma el módulo que esta especificado en el main

describe('#platzom', function () {
    it('Si la palabra termina en ar se le quitan esos dos caracteres', function () {
        const translation = platzom("Programar");
        expect(translation).to.equal("Program");
    });

    it('Si la palabra inicia con Z se le adiciona pe al final', function () {
        const translation = platzom("Zorro");
        const translation2 = platzom("Zarpar");
        expect(translation).to.equal("Zorrope");        
        expect(translation2).to.equal("Zarppe");
    });

    it('Si la palabra traducida tiene diez o más letras se debe partir a la mitad y unir con un - del medio', function () {
        const translation = platzom("estaesunapalabrota");
        expect(translation).to.equal("estaesuna-palabrota");
    });

    it('Si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS");
    });
})