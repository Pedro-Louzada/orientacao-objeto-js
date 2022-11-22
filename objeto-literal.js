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

user.exibirInfo(); //vai exibir meu nome e email

// 1º método
// const exibir = user.exibirInfo
// exibir() 

// ou

// 2º método
const exibir =  function(){
    console.log(this.nome, this.email)
}

// exibir()

// o retorno destes dois métodos acima me trará undefined, por que os atributos não teram contexto

// solução

const exibirNome = exibir.bind(user)
exibirNome() // retorno nome
exibir() // retorno undefined

// o bind trabalha junto com o this, pois agora ele ligou a const exibirNome com o obj user, assim dando sentido a nome



