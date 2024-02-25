const connection = require('../connection')
const crypto = require('crypto')

module.exports = {
    async create(request, response){
        const id_user = request.headers.authorization;
        const id_address = crypto.randomBytes(4).toString('hex');
        const { 
                name_address,
                cep,
                number,
                city,
                state,
                public_place,
                neighborhood,
            } = request.body

        await connection('address').insert({
            id_address,
            name_address,
            cep,
            number,
            city,
            public_place,
            state,
            neighborhood,
            id_user,
        })
        return response.status(200).json({message:'Endereço Cadastrado com sucesso'})
    },
    async update(request, response){
        const id_address = request.headers.authorization;
        const { 
            name_address,
            cep,
            number,
            city,
            state,
            public_place,
            neighborhood,
        } = request.body

        const update = await connection('address').where('id_address', id_address).update({
            name_address,
            cep,
            number,
            city,
            state,
            public_place,
            neighborhood,
        })
        return response.json(update)
    },
    async index(request, response){
        const id_address = request.headers.authorization
        const index = await connection('address').where('id_address', id_address).select('*').first()

        return response.json(index)

    },
    async delete(request, response){
        
        await connection('address').where('id_address', id_address).delete()

        return response.status(200).json({ message: 'Pronto' })
    },
    async Allindex (request , response){
        const id_user = request.headers.authorization
      
        const data = await connection('address')
        .where('id_user', id_user)
        .select('*')
       return response.json(data)
       
    }
}