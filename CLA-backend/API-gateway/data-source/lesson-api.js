import {verifyJwt} from '../core/jwt.utils';
const DataSource = require('apollo-datasource-rest').RESTDataSource;
const { ApolloServer, AuthenticationError, ForbiddenError, UserInputError} = require('apollo-server');

class LessonRestAPIs extends DataSource{
    constructor(){
        super();
        this.baseURL = 'http://localhost:1338/api/';
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

    async lesson(id){
        let data;
        await this.get(`lessons/${id}`).then((response)=>{
            if(response.code == 200){
                data = response.data;
                return data;
            }
            throw new UserInputError("Lesson Not Found", 401);
        }).catch((error)=>{
            throw new UserInputError("System Error", 500);
        });
    }

    async lessons(){
        let data;
        await this.get(`lessons`).then((response)=>{
            if(response.code == 200){
                data = response.data;
                return data;            }
            throw new UserInputError("Bad lessons request");
        }).catch((error)=>{
            throw new UserInputError("System error: Could not process request", 500);
        });
    }
    //file upload
    async createLesson(payload){
        console.log(this.post(`lessons`, payload))
        let data;
        await this.post(`lessons`, payload).then((response)=>{
            if(response.code == 200){
                 data = response.data;
                 return data;
            }
            throw new UserInputError("Cannot create lesson: check parameters", 401);
        }).catch((error)=>{
            throw new UserInputError("System Error: Could not create lesson", 500);
        });
    }

    async updateLesson(payload){
        let data;
        await this.put(`lesson/${id}`, payload).then((response)=>{
            if(response.code == 200){
                data = response.data;
                return data;            }
            throw new UserInputError("Bad lessons request");
        }).catch((error)=>{
            throw new UserInputError("System error: Could not process request", 500);
        });
    
    }
}

module.exports = LessonRestAPIs;