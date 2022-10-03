const { gql } = require('apollo-server-express');

module.exports = gql`
type Query {
    users: [User]
    user(email: String!): User
    me: User
}

type Mutation {
    removeUser(id: Int!): Boolean
    register(input: registerInput): User
    login(email: String!, password:String!): Token!
}

input registerInput{
        first_name: String
        last_name: String
        email: String
        password: String
        user_type: String
}


type User {
    id: String
    first_name: String
    last_name: String
    email: String!
    user_type: String
    createdAt: String
    updatedAt: String
}

type Token {
    token: String!
    success: Boolean!
    message: String!
    description: String!
}`;