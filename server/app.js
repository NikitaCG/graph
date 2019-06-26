require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./shema.js');
const mongoose = require('mongoose');

const MONGO_CONNECT = process.env.MONGO_CONNECT;

const app = express();
const PORT = 5005;

mongoose.connect(`mongodb+srv://${MONGO_CONNECT}`, { useNewUrlParser: true});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error ${err}`));
dbConnection.on('open', () => console.log(`Connection to DB!`));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});