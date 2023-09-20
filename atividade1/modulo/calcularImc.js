function calcularImc (pesoUsuario,alturaUsuario){
    let peso = pesoUsuario
    let altura= alturaUsuario
    
    if(peso == '' || altura == ''){
        console.log('ERRO!! Insira algum valor');
    } else if(isNaN(altura) || isNaN(peso)){
        console.log('ERRO!! Digite apenas valores numéricos')
    }else{
        imc = (Number(peso)/Number(altura)*Number(altura))
    }

    if(imc <= 18,5){
       resultado = console.log(imc + ': Você está abaixo do peso!')
    }else if(imc>18,5 && imc<=24,9){
        resultado = console.log(imc + ': Você está com o peso normal!')
    }else if(imc>=25 && imc<= 29,9){
        resultado = console.log(imc + ': Você está acima do peso!')
    }else if(imc>=30 && imc<=34,9){
        resultado = console.log(imc + ': Você está com obesidade I!')
    }else if(imc>=35 && imc<=39,9){
        resultado = console.log( imc +': Você está com obesidade II!')
    }else if(imc>=40){
        resultado = console.log(imc +': Você está com obesidade III!')
    }
    


}

module.exports ={
    calcularImc
}