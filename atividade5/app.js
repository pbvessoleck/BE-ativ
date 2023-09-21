var mostrarNumeros = require('./modulo/paresEImpares')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número inicial (o valor deve ser entre 0 e 500): ', function(numeroInicial){
    let inicial = numeroInicial
        if(inicial==''){
            console.log('ERRO!! É necessária  aentrada de algum valor numérico')
            entradaDados.close
        }else{
            entradaDados.question('Digite o número final (o valor deve ser entre 100 e 1000): ', function(numeroFinal){
                let final = numeroFinal
                if(inicial==''){
                    console.log('ERRO!! É necessária  aentrada de algum valor numérico')
                    entradaDados.close
                }else if(final>inicial){
                    console.log('ERRO!! O número final deve ser maios que o inicial')
                    entradaDados.close
                }else if(final==inicial){
                    console.log('ERRO!!  Não é permitido a entrada de dois valores iguais')
                }else{
                   console.log(mostrarNumeros.paresEImpares(numeroFinal,numeroInicial))
                    entradaDados.close
                }
            })

        }
})
   
   
   
   
   
