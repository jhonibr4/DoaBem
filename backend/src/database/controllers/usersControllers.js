const connection = require('../connection')
const crypto = require('crypto')

module.exports = {
    async create(request, response){
        const id_users = crypto.randomBytes(4).toString('hex');
        const { name, email, password, cpf, phone } = request.body

        const register = await connection('users').insert({
            id_users,
            name,
            email,
            password,
            cpf,
            phone,
        })
        return response.json({ register })
    },
    async update(request, response){
        const id_users = request.headers.authorization;
        const { name, email, password, cpf, phone } = request.body

        const update = await connection('users').where('id_users', id_users).update({
            name,
            email,
            password,
            cpf,
            phone,
        })
        return response.json( update )
    },
    async Allindex(request, response){
  
        const index = await connection('users').select('*')

        return response.json(index)

    },
    async delete(request, response){
        
        const id_users = request.headers.authorization
        const data = await connection('users').where('id_users', id_users).delete()

        return response.status(200).json({ message: 'Pronto' })
    },
    async index (request , response){
        const { name } = request.body
      
        const data = await connection('users')
        .where('name', name)
        .select('*')
        .first()
       return response.json(data)
       
    }
}