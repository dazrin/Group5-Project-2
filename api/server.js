// Dependencies
const express = require('express'); // express 
const { createServer } = require('http'); // create http server
const { ApolloServer } = require('apollo-server-express'); // use apollo-server for graphql
const cors = require('cors'); // package for providing middleware for express
const typeDefs = require('../graphql/schemas'); // require typeDefs from schemas file
const resolvers = require('../graphql/resolvers'); // require resolvers from resolvers file
const context = require('../graphql/context'); // require models from context folder

// setting up instance of express
const app = express();

// use cors as middleware for express
app.use(cors());

// setting up instance of apollo to use for our graphql playground
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
});


// connect middleware with express
apolloServer.applyMiddleware({ app, path: '/api' });

// create server using http and express
const server = createServer(app);

// export it so it can be used
module.exports = server;
