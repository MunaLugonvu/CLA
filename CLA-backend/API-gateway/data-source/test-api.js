const DataSource = require('apollo-datasource-rest').RESTDataSource;
const { ApolloServer, AuthenticationError, ForbiddenError, UserInputError, ApolloError} = require('apollo-server');
const { request } = require('express');

class TestRestAPIs extends DataSource{
    constructor(){
        super();
        this.baseURL = 'http://localhost:8000/api/';
    };

    willSendRequest(request){
        let verified = null;
        let user = null;
        if(this.context.token){
            verified = verifyJwt(this.context.token, "accessTokenPrivateKey");
            if(verified.valid == true){
                user = verified.decoded;
                return user;
            }
            return new AuthenticationError("Token expired: Login required");
        }
        return new AuthenticationError("Login required");
    }

async process(payload){
    return await this.post('process-test', payload).then((response)=>{
        if(response.code == 200){
            data = response.data;
        } else {
            throw new ApolloError(response.message, 401);
        }
    }).catch((err)=>{
        throw new ApolloError("System Error: Could not make process request", 500);
    });
}
}
module.exports = TestRestAPIs;