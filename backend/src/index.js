const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const fs = require('fs')
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');
const ExpressFormidable = require('express-formidable');


const app = express()
app.use('/files', express.static('./src/static/uploads'));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)