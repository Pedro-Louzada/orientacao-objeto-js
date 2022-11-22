// funciton construtora são as únicas que começam com a primeira letra do nome em maiúscula

function User(nome, idade, email){
    this.nome = nome,
    this.idade = idade,
    this.email = email,


    this.exibirInfos = function(){
        return `Olá ${this.nome}, você tem ${this.idade} anos e seu email é ${this.email}.`;
    };
}

// 1º método de utilizar a funcion construtora (New)
const novoUser = new User('Pedro', '20', 'p@p.com');
//new é utilziado para instânciar a function construtora acima ja criada e nela atribuir novas infos

console.log(novoUser.exibirInfos())

//2º método de utilizar a function construtora (Object.create)

function Admin(role){
    User.call(this, 'Pedro', '20', 'p@p.com')
    this.role = role || 'estudante' 
}

Admin.prototype = Object.create(User.prototype);
const novoUser2 = new Admin ('admin')
console.log(novoUser2.exibirInfos())
console.log(novoUser2.role)