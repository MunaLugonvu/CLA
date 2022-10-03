const { ApolloError } = require('apollo-server');

const jwt = require('jsonwebtoken');

const authAPI = require('../data-source/auth-api');

const createToken = (user, secret, expiresIn) => {
    const {id, name, username } = user;
    
return jwt.sign({ id, name, username}, secret, { expiresIn});
}

const resolvers = {
    Query: {
        users: (parent, args, {dataSources})=>{
            return dataSources.authAPI.getUsers();
        },
        user: (parent, args, {dataSources})=>{
            console.log(args.email)
            return dataSources.authAPI.getUser(args.email);
        },
        // validate: (parent,args, {dataSources}) => {
        //     return dataSources.authAPI.validate();
        // },
        // logout: (parent, args, {dataSources}) =>{
        //     return dataSources.authAPI.logout();
        // }
    },

    Mutation: {
        // forgotPassword: (parent, {email}, {dataSources}) => {
        //     return dataSources.authAPI.forgotPassword(email);
        // },

        register: (parent, {first_name, last_name, user_type, email, password}, { dataSources}) =>{
            const user = {
                first_name,
                last_name,
                email,
                user_type,
                password
            };
            return dataSources.authAPI.register(user);
        }
    }
}

module.exports = resolvers;