const user = {
    nome: 'Pedro',
    idade: '19',
    email: 'p@p.com',
    nascimento: '05/07/2002',
    role: 'admin',
    ativo: true,
    exibirInfo: function (){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    idade: '27',
    email: 'm@m.com',
    role: 'admin',
    criarCurso: function(){
        console.log('Curso criado!')
    }
}

                   /*receber  doa*/
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();

//Object.setPrototypeOf > é uma função que faz com que os parâmetros de um obj possa servir de herança para outro
//estamos passando o obj user como protótipo para admin
//o this vai ser instânciado a admin, q foi colocado para receber a hereança