import User from './User.js';

/*Nós extendemos infos de User com a palavra extends.
        class Admin vai extender infos de User
Na nossa nova classe precisamos tbm de uma função construtora com os parâmetros que iremos 
ter dentro de Admine o super é a "Super Classe" nele passamos oq vai ser extendida de User para
dentro de Admin, e logo após nós adicionamos oq queremos criar dentro de Admin,fora do que ja herdamos*/

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCuso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}



