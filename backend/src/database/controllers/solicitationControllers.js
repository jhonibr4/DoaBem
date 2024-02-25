const connection = require('../connection')
const crypto = require('crypto')

module.exports = {
    async create(request, response){
        const id_solicitation = crypto.randomBytes(4).toString('hex');
        const id_user = request.headers.authorization;
        const { name_donation, date, hour, name_person, id_donations, public_place, neighborhood, city, state, number_address } = request.body

        const register = await connection('solicitation').insert({
            id_solicitation,
            name_donation,
            date,
            hour,
            status: 'Aguardando Resposta',
            name_person,
            public_place,
            neighborhood,
            city,
            state,
            number_address,
            id_user,
            id_donations
        })
        return response.json({ register })
    },
    async update(request, response){
        const id_solicitation = request.headers.authorization

        const { status } = request.body

        const register = await connection('solicitation')
        .where('id_solicitation', id_solicitation)
        .update({
            status,
        })
        return response.json({ register })
    },
    async Allindex(request, response){
        const { status } = request.body
        const id_user = request.headers.authorization

        const [countPending] = await 
        connection('solicitation')
        .where({
            'id_user': id_user,
            'status': 'Aguardando Resposta'
            }).count()
        const [countAccept] = await 
        connection('solicitation')
        .where({
            'id_user': id_user,
            'status': 'Aceito'
            }).count()

        const index = await connection('solicitation').select('*')
        .where({
            'id_user': id_user,
            'status': status
            })
        response.header('X-Total-Count', countPending['count(*)'])
        response.header('Y-Total-Count', countAccept['count(*)'])
        return response.json(index)

    },
    async delete(request, response){
        
        const id_solicitation = request.headers.authorization
        const data = await connection('solicitation').where('id_solicitation', id_solicitation).delete()

        return response.status(200).json({ message: 'Pronto' })
    },
    async index (request , response){
        const id_user = request.headers.authorization

        
      
        const data = await connection('solicitation')
        .where({
            'id_user': id_user,
            'status': 'Aguardando Resposta'
            })
        .select('*')

       return response.json(data)
       
    }
}