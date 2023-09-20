/**************************************************************
 * Objetivo: Calcular as médias de um aluno
 * Data: 13/09
 * Autor: Paloma Vessoleck
 * Versão: 1.0
 ************************************************************/

function calcularMedia(nomeAluno,nomeProfessor,sexoProfessor,sexoAluno,curso,disciplina,nota1,nota2,nota3,nota4){
    let nomeAluno = alunoNome
    let nomeProfessor = professorNome
    let sexoProfessor = professorSexo
    let sexoAluno = alunoSexo
    let curso = cursoAluno
    let disciplina = disciplinaAluno
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let status

    if(nota1=='' || nota2=='' || nota3=='' || nota4==''){
        console.log('ERRO: É obrigatório o preenchimento de todos os campos')
    }else if(nota1<0 || nota1>100 || nota2<0 || nota2>100 || nota3<0 || nota3>100 || nota4<0 || nota4>100){
        console.log('ERRO: Os valores devem estra entre 0 e 100')
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: Só é permitida a entrada de valores numéricos')
    } else {
        media = (nota1+nota2+nota3+nota4)/4

    }if(media>70){
        return status = 'APROVADO!!'
    }else if(media<50){
        return status = 'REPROVADO!!'
    }else(media>50 && media<69){
        return status = 'ALUNO DE EXAME!!'
    }

}


    function calcularExame(){
        let exame = valorExame
        let media = valorMedia

    if(exame==''){
        console.log('ERRO: É obrigatório o preenchimento desse campo')
    }else if(isNaN(exame)){
        console.log('ERRO: Só é permitida a entrada de valores numéricos')
    }else if(exame<0||exame>100){
        console.log('ERRO: O valor deve estar entre 0 e 100')
    }else{
        mediaFinal = (media+exame)/2
    }

    }


modulo.exports={calcularMedia,calcularExame}