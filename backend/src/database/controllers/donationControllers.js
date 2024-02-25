const connection = require('../connection')
const crypto = require('crypto')

module.exports = {
   
    async update(request, response){
        const id_user = request.headers.authorization;
        const { 
                name,
                type_donation,
                amount,
                type_delivery,
                description,
            } = request.body

        const update = await connection('donation').where('id_user', id_user).update({
                name,
                type_donation,
                amount,
                type_delivery,
                description,
        })
        return response.json(update)
    },
    async Allindex(request, response){
  
        const index = await connection('donation').select('*')

        return response.json(index)

    },
    async delete(request, response){
        
        const { id_donation } = request.body
        await connection('donation').where('id_donation', id_donation).delete()

        return response.status(200).json({ message: 'Pronto' })
    },
    async index (request , response){
        const id_user = request.headers.authorization
      
        const data = await connection('donation')
        .where('id_user', id_user)
        .select('*')
       return response.json(data)  
    },
    async indexDonation (request , response){
        const id_donation = request.headers.authorization
      
        const data = await connection('donation')
        .where('id_donation', id_donation)
        .select('*')
        .first()
       return response.json(data)  
    }
}