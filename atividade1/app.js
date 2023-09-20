/****************************************************************************
 * Objetivo: Fazer o cálculo do IMC de uma pessoa
 * Data: 13/09/2023
 * Autora: Paloma
 * Versão: 1.0
 *****************************************************************************/

var calculoImc = require('./modulo/calcularImc')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDados.question('Digite o seu peso: ', function(valorPeso){
    let peso = valorPeso;

    entradaDados.question('Digite a sua altura: ', function(valorAltura){
        let altura = valorAltura;

        let imc = calculoImc.calcularImc(peso,altura)
        entradaDados.close
    })
})