var calculoDasMedias = require('./modulo/calcularMedia')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno: ', function(nomeDoAluno){
    let nomeAluno = nomeDoAluno
    entradaDados.question('Digite o nome do professor: ', function(nomeDoProfessor){
        let nomeProfessor = nomeDoProfessor
        entradaDados.question('Digite o sexo do professor: ',function(sexoDoProfessor){
            let sexoProfessor = sexoDoProfessor
            entradaDados.question('Digite o sexo do aluno: ', function(sexoDoAluno){
                let sexoAluno = sexoDoAluno
                entradaDados.question('Digite o nome do curso: ', function(cursoAluno){
                    let curso = cursoAluno
                    entradaDados.question('Digite a disciplina do curso: ', function(disciplinaAluno){
                        let disciplina = disciplinaAluno
                        entradaDados.question('Digite a primeira nota: ',function(nota1Usuario){
                            let nota1 = nota1Usuario
                            entradaDados.question('Digite a segunda nota: ',function(nota2Usuario){
                                let nota2 = nota2Usuario
                                entradaDados.question('Digite a terceira nota: ',function(nota3Usuario){
                                    let nota3 = nota3Usuario
                                    entradaDados.question('Digite a quarta nota: ',function(nota4Usuario){
                                        let nota4 = nota4Usuario
                                        let media = calculoDasMedias.calcularMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, curso, disciplina, nota1,nota2,nota3,nota4)

                                        
                                        entradaDados.close
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})