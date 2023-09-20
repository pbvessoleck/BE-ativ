/**************************************************************************
 * Objetivo: Cria um sistema gerenciador de tabuadas
 * Data: 20/09/23
 * Autor: Paloma Vessoleck
 * Versão 1.0
 **************************************************************************/

function calcularTabuada(){
    let tabuada1 = tabuadaInicial
    let tabuada2 = tabuadaFinal
    let contador1 = contadorInicial
    let contador2 = contadorFinal

    if(tabuada1>100 || tabuada2>100 || tabuada1<2 || tabuada2<2){
        console.log('ERRO!! Só é permitido a entrada de valores entre 2 e 100')
    }else if(tabuada1=='' || tabuada2=='' || contador1=='' || contador2 == ''){
        console.log('ERRO!! É obrigatório o preenchimento de todos os campos')
    }else if(contador1>50 || contador1<1 || contador2>50 || contador2<1){
        console.log('ERRO! Só é aceito valores entre 1 e 50')
    }else{
        
    }

    }
