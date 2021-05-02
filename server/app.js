require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var Country = require('./Models/country');
var User = require('./Models/user');
const router = express.Router();
const dbConfig = require('./config/database.config');

var corsOptions = {
    origin: 'http://localhost:9001',
    optionsSuccessStatus: 200 // For legacy browser support
}


router.use((req, res, next) => {
    console.log('We are connecting to the MongoDB...');
    next();
})

mongoose.connect(dbConfig.dbURI, { useNewUrlParser: true });
const app = express();
app.use(cors(corsOptions));

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

router.route('/register').post( (req, res) => {
    var user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.password = req.body.password;
    user.save(function(err) {
        if(err)
            res.send('Error creating the country', err);
        res.send({ message: 'Created a user in the database'});
    })
}    
)



app.use('/api', router);

require('./routes/user.routes')(app);

app.listen(port, () => 
    console.log(`Listening on port ${port}`)
);