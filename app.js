require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const dbConfig = require('./config/database.config');

router.use((req, res, next) => {
    console.log('We are connecting to the MongoDB...');
    next();
});

mongoose.connect(dbConfig.userDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 4000;

app.use('/api', router);

require('./routes/user.routes')(app);

app.listen(port, () => 
    console.log(`Listening on port ${port}`)
);