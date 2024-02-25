const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer')
const crypto = require('crypto')
const connection = require('./database/connection')

const usersControllers = require('./database/controllers/usersControllers');
const addressControllers = require('./database/controllers/addressControllers');
const sessionUsersControllers = require('./database/controllers/session_usersControllers');
const donationControllers = require('./database/controllers/donationControllers');
const solicitationControllers = require('./database/controllers/solicitationControllers');

routes.post('/users', usersControllers.create);
routes.put('/users', usersControllers.update);
routes.get('/users', usersControllers.Allindex);
routes.delete('/users', usersControllers.delete);

routes.post('/address', addressControllers.create);
routes.put('/address', addressControllers.update);
routes.get('/address', addressControllers.index);
routes.get('/addressT', addressControllers.Allindex);
routes.delete('/address', addressControllers.delete);

routes.post('/solicitation', solicitationControllers.create);
routes.put('/solicitation', solicitationControllers.update);
routes.get('/solicitation', solicitationControllers.index);
routes.post('/solicitationT', solicitationControllers.Allindex);
routes.delete('/solicitation', solicitationControllers.delete);

routes.post('/donation', multer(multerConfig).single('file'), (req, res) => {
    return res.json(req.file)
});
routes.put('/donation', donationControllers.update);
routes.get('/donations', donationControllers.index);
routes.get('/donation', donationControllers.indexDonation);
routes.get('/donationT', donationControllers.Allindex);
routes.delete('/donation', donationControllers.delete);

routes.post('/login', sessionUsersControllers.login);

routes.post('/donations', multer(multerConfig).single('file'), async (request, response) => {
    
        const id_user = request.headers.authorization;
            
        const id_donation = crypto.randomBytes(4).toString('hex');
        const filename = request.file.filename;
        const { 
                name,
                type_donation,
                amount,
                type_delivery,
                description,
                id_addressDonation
            } = request.body
    
        const data = await connection('donation').insert({
                id_donation,
                id_user,
                name,
                type_donation,
                amount,
                type_delivery,
                description,
                img_donation: filename,
                id_addressDonation
        })
        return response.json(data)
});

module.exports = routes