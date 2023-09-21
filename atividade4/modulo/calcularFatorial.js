/****************************************************************************************************
 * Objetivo:  Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 21/09/23
 * Autor: Paloma Vessoleck
 * Versão 1.0
 ****************************************************************************************************/

function calcularFatorial(valorFatorialUsuario){
    fatorial = Number(valorFatorialUsuario)
    var resultado = fatorial
    while(fatorial>1){
        fatorial--;
        resultado = resultado*fatorial
    }

    let status = resultado
    return status
}

module.exports={
    calcularFatorial
}