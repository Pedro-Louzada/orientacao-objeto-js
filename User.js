//para poder reaproveitar esta classe User, vamos exporta-la
//apra utilziar o export default temos que dar um npm init -y no terminal para trabalharmos com módulos
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo 
    }

    //método get é utilizado para conseguirmos acessar os atributos de User fora da classe, como por exemplo no Admin
    //nós chamamos como propriedade, n como função... ex: Admin.nome

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    //---------------SET-----------------//
    //usado para modificar propriedades privadas sem riscos
    
    set nome(novoNome){
        if(novoNome === ''){
            throw new Error = 'formato não válido'
        }
        this.#nome = novoNome;
    } /* chamamos o set relacionado a "nome" com o mesmo nome dado ao get para ter interligação, 
        passamos o novoNome como parâmetro e depois subtituímos o nome privado para o nome que damos nos parâmetros*/

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    } //retorno dos gets, n precisamos mais de serquilha
}

