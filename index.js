require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression')
const mongoString ="mongodb+srv://prateek:V9z1ntUKFeosJLK5@cluster0.aiuci.mongodb.net/nearme?retryWrites=true&w=majority";

mongoose.connect(mongoString,{ poolSize: 10 });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(compression({level:6}));

app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)


app.listen(port = process.env.PORT, () => {
    console.log(`Server Started at ${3000}`)
})

