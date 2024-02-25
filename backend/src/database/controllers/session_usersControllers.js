const exp = require('constants')
const connection = require('../connection')
const crypto = require('crypto')

module.exports = {

    async login (request, response){

        const { email, password } = request.body
        const login = await connection('users')
        .where({
            'email': email,
            'password': password,
        })
        .select('*')
        .first()
        if(login){
            return response.json(login)
        }

        return response.status(400).json({ error:'email ou senha incorreta, tente novamente.' })
        
    }

}