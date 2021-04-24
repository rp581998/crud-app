require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('./Models/user');
var Country = require('./Models/country');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { nextTick } = require('process');
const router = express.Router();

router.use((req, res, next) => {
    console.log('We are connecting to the MongoDB...');
    next();
})

/*
************* SIMPLE WEB SERVER WHICH RENDERS TEXT TO THE USER ********************
const requestListener  = (req, res) => {
    res.writeHead(200);
    res.end('Hello, World');
}
const server = http.createServer(requestListener);
server.listen(process.env.PORT)
*/
// MONGO_URL == mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb 

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 4000;
router.get('/', (req,res) => {
    res.json({ message: 'Hello from Express'});
});

router.route('/countries').post( (req, res) => {
    var newCountry = new Country();
    newCountry.country = req.body.name;
    newCountry.save(function(err) {
        if(err)
            res.send('Error creating the country', err);
        res.send({ message: 'Created another country'});
    })
}    
)

app.use('/api', router);



app.listen(port, () => 
    console.log(`Listening on port ${port}`)
);