// global.env = process.env.NODE_ENV;
// global.configuration = require(`../config/environments/${global.env}`);
const dotenv = require('dotenv');
// const logger = require('./core/logger');
const express = require('express');
const UUID = require('uuid').v4;
const AuthRestAPIs = require('./data-source/auth-api');
const LessonRestAPIs = require('./data-source/lesson-api');
// const BillingRestAPIs = require('./data-source/billing-api');
// const TestRestAPIs = require('./data-source/test-api');
const cors = require('cors');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const { ApolloServer } = require('apollo-server-express');

const app = express();

app.use(cors({
    credentials: true,
    origin: (origin, cb) => cb(null, true),
  }));
let server;
async function startServer(){
    server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req}) => ({
            token: req.headers.authorization
        }),
        dataSources: () => ({   
            authAPI: new AuthRestAPIs(),
            lessonAPI: new LessonRestAPIs()
            // testAPI: new TestRestAPIs(),
            // billingAPI: new BillingRestAPIs()
        }),
    })
    await server.start();
    server.applyMiddleware({app});
}

startServer();




if(!module.parent){
    app.listen({
        port: process.env.PORT || 4000
    }, ()=>{
console.log('server started...');
    });
}