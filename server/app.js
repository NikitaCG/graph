const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./shema.js');

const app = express();
const PORT = 5005;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});