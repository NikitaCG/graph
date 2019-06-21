const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./shema.js');
const mongoose = require('mongoose');

const app = express();
const PORT = 5005;

mongoose.connect('mongodb+srv://dallas:fidelio1324@cluster0-3rgg2.mongodb.net/graphQL?retryWrites=true&w=majority', { useNewUrlParser: true});

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