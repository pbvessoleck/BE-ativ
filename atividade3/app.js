var calculoTabuada = require('./modulo/calcularTabuada')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite a tabuada inicial:', function(tabuadaInicial){
    let tabuada1 = tabuadaInicial
    entradaDados.question('Digite a tabuada final', function(tabuadaFinal){
        let tabuada2 = tabuadaFinal
        entradaDados.question('Digite o primeiro contador da tabuada: ',function(contadorInicial){
            let contador1 = contadorInicial
            entradaDados.question('Digite o ultimo contador: ', function(contadorFinal){
                let contador2 = contadorFinal

                let tabuada = calculoTabuada.calcularTabuada(tabuada1,tabuada2,contador1,contador2)
                entradaDados.close

        
            })
        }) 
    })
})