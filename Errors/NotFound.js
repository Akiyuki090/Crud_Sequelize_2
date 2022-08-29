class NotFound extends Error{
    constructor(nome){
        super(`${nome} não foi encontrado`)
        this.name = 'Not Found'
        this.idError = 0
    }
}

module.exports = NotFound;
