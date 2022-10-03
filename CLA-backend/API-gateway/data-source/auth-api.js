const DataSource = require('apollo-datasource-rest').RESTDataSource;
const { ApolloError, AuthenticationError, ForbiddenError, UserInputError} = require('apollo-server');
const { response } = require('express');
const {omit} = require("lodash");

class AuthRestAPIs extends DataSource{
    constructor(){
        super();
        this.baseURL = 'http://localhost:1337/api/';
    };
    // willSendRequest(request){
    //     if(this.context.token){
    //         request.headers.set('Authorization', this.context.token);
    //     }
    //     throw new ForbiddenError("Authorization error", 403);
    // }

    async getUsers(){

        // console.log(await this.get(`users`,));
         let users=[];

        return await this.get(`users`,).then((response)=>{  
                for(let i = 0; i<response.length; i++){
                    users.push(omit(response[i], ["password","__v", "_id"]));
                }  
                return users;
            
            

        }).catch((error)=>{
            throw new ApolloError("System Error: Unable to make request," + error, 500);
        });

    }

    async getUser(email){
        let data;
        await this.get(`users/${email}`).then((response)=>{
                data = response;       

        });
        return data;
    }

    async forgotPassword(email){
        let data;
        await this.get(`forgot-password/${email}`).then((response)=>{
                data = response;
        }).catch((error)=>{
            throw ApolloError("internal Error occured", 500);
        });

        return data;
    }

    async login(payload){
        let data;
        await this.post(`login`,payload).then((response)=>{
                data = response.data;

        }).catch((error)=>{
            throw new AuthenticationError("Internal Error occured", 500);
        });
        return data;
    }

    async register(payload){
        let data;
        return await this.post(`users`,payload).then((response)=>{
                console.log(response)
                return data = response.body;
            

        }).catch((error)=>{
            throw new ApolloError("Internal Error occured", 500);
        });
            

        
    }
}

module.exports = AuthRestAPIs;