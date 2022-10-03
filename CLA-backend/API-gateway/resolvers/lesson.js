const { ApolloError } = require('apollo-server');

const lessonAPI = require('../data-source/lesson-api');

const resolvers = {
    Query: {
        lessons: (parent, args, {dataSources})=>{
            return dataSources.lessonAPI.lessons();
        },
        lesson: (parent, args, {dataSources})=>{
            return dataSources.lessonAPI.lesson(args.id);
        },
        // validate: (parent,args, {dataSources}) => {
        //     return dataSources.lessonAPI.validate();
        // },
        // logout: (parent, args, {dataSources}) =>{
        //     return dataSources.lessonAPI.logout();
        // }
    },

    Mutation: {
        createLesson: (parent, {name, description, link,tests,level, topic}, { dataSources}) =>{
            const lesson = {
                name,
                description,
                link,
                tests,
                level,
                topic
            };
            return dataSources.lessonAPI.createLesson(lesson);
        }
    }
}

module.exports = resolvers;