const multer = require('multer');
const path = require('path');

module.exports = {
    
    storage: multer.diskStorage({
        destination: (req, res, callback) => {
            callback(null, path.resolve('./src/static/uploads'))
        },
        filename: (req, file, callback) => {
            const time = new Date().getTime();
        
            callback(null, `${time}_${file.originalname}`)
        }
    })
}


