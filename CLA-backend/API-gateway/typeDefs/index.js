const userSchema = require('./user');
const defaultSchema = require('./default');
// const billingSchema = require('./billing');
// const testSchema = require('./test');
const lessonSchema = require('./lesson');


// module.exports = [userSchema, billingSchema, lessonSchema, testSchema];

module.exports = [ lessonSchema, userSchema, defaultSchema];
