const { gql } = require('apollo-server-express');

module.exports = gql`
type Query{
    lessons: [Lesson]
    lesson(id:String): Lesson
    }

type Mutation{
    createTest(lesson:String, test_name: String, test_data:[TestInput] ): Test
    createLesson(name:String, level: String, description:String, link:String, topic:String): Lesson

}

type Lesson{
    name: String
    link: String
    description: String
    level: String
    topic: String
    tests:[Test]

}

input TestInput{
    name: String
    test_data: [BlockInput]
}

type Test{
    name: String
    test_data: [Block]
}

input BlockInput{
    position: String
    code: String
}

type Block{
    position: String
    code: String

}
`;